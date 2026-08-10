# ORCHESTRATION.md — Como Claude e Codex trabalham neste projeto

Este arquivo define os papéis entre as duas IAs que trabalham neste repo e
quando cada uma decide o quê. Leia isso **antes** do `AGENTS.md` (que cobre
convenção de código) — este aqui é sobre quem manda em quê.

## Papéis

**Claude (arquiteto/orquestrador)**
- Dono do planejamento: quebra pedidos do Eduardo em tarefas executáveis,
  decide arquitetura, escolhe abordagem técnica.
- Escreve o plano **antes** de qualquer implementação grande — decisão de
  arquitetura não fica só na cabeça, fica registrada (neste arquivo, num
  commit, ou numa nota de handoff — ver seção abaixo).
- Revisa o que o Codex produzir antes de considerar pronto pra merge na
  `main`.

**Codex (executor em paralelo)**
- Trabalha na própria worktree/branch (`<projeto>-codex`, branch
  `codex-work`), implementando o que já foi planejado.
- Não redesenha arquitetura por conta própria. Se a tarefa não tiver plano
  registrado, ou se algo no meio do caminho exigir uma decisão que muda o
  desenho original, **para e pergunta ao Eduardo** em vez de decidir sozinho.
- Pode (e deve) apontar problemas no plano do Claude — só não deve substituir
  o plano sem essa conversa acontecer primeiro.

**Eduardo (decisor final)**
- Aprova merge de `claude-work`/`codex-work` pra `main`.
- Resolve qualquer divergência entre o que as duas IAs propõem.
- Decide prioridade quando as duas branches mexem em áreas que podem
  conflitar.

## Se o Claude falhar (sem tokens, sessão caiu, etc.)

O Codex assume a **execução** da tarefa em andamento, não o papel de
arquiteto. Antes de continuar, o Codex deve:

1. Ler o plano/decisão mais recente registrada (neste arquivo, no último
   commit relevante, ou numa nota de handoff que o Claude tenha deixado).
2. Se não achar plano suficiente pra continuar com segurança, perguntar ao
   Eduardo em vez de inventar um novo desenho.
3. Continuar seguindo as mesmas convenções do `AGENTS.md`.

Quando o Claude voltar a ficar disponível, ele deve reassumir o papel de
arquiteto — revisar o que foi feito na ausência dele antes de aprovar
continuidade.

## Handoff entre os dois (ou entre sessões)

Antes de encerrar uma sessão no meio de uma tarefa, deixe registrado em
algum lugar visível (commit, comentário no topo do arquivo em progresso, ou
uma nota curta): o que já foi feito, o que falta, e qualquer decisão tomada
que não seja óbvia olhando só o código. Isso evita que a próxima IA (seja
Claude retomando, seja Codex assumindo) precise adivinhar o estado.

## Ver também

- `AGENTS.md` — convenções de código, comandos, estrutura de worktrees.

## Ordem de trabalho do Claude (pipeline de agentes)

Pra qualquer tarefa não trivial, eu sigo essa ordem, acionando os agentes
especializados disponíveis no meu ambiente quando fizer sentido:

1. **Descoberta** — se o pedido ainda está vago (objetivo, regra de negócio
   ou critério de pronto não claros), acionar `descoberta-requisitos` antes
   de qualquer decisão técnica.
2. **Arquitetura** — desenhar estrutura, módulos e responsabilidades antes
   de codar. Uso o agente `arquiteto-projetos` quando o projeto/feature é
   novo o suficiente pra merecer isso; pra mudanças pequenas, decido eu
   mesmo e registro a decisão (ver seção de Handoff).
3. **Implementação** — eu implemento, ou delego a um especialista quando
   existir um pra o tipo de tarefa (ex: `especialista-n8n` pra automação,
   `designer-landing-page` pra landing page).
4. **Revisão** — antes de considerar pronto, passo por revisão de código
   (`/code-review`) ou pelo agente `revisor-entrega` quando for checklist de
   entrega, não só de código.
5. **Debug** — se aparecer um bug, primeiro `investigador-bugs` pra achar a
   causa raiz; só depois aplico o fix. Nunca corrijo sintoma sem entender a
   causa.

**Codex não tem acesso a esses subagentes** — ao assumir uma tarefa (seja em
paralelo, seja como fallback), ele segue o plano já registrado pelas etapas
1–2 e foca na etapa 3 (implementação). A etapa 4 (revisão final) continua
sendo feita por mim ou pelo Eduardo antes do merge pra `main`.
