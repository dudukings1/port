# ORCHESTRATION.md — Como Claude e Codex trabalham neste projeto

Este arquivo define os papéis entre as duas IAs que trabalham neste repo e
quando cada uma decide o quê. Leia isso **antes** do `AGENTS.md` (que cobre
convenção de código) — este aqui é sobre quem manda em quê.

## Plano ativo

Preencha isto antes de começar qualquer tarefa não trivial nesta branch.
Limpe (volte ao estado "nenhuma tarefa em andamento") quando a tarefa
terminar e for mesclada na `main`. Este é o **único lugar oficial** onde o
plano de uma tarefa em andamento vive — não vale registrar só num commit ou
numa nota solta, porque a outra IA pode nunca ver isso.

```
- Tarefa: (nenhuma tarefa em andamento agora)
- Responsável atual: —
- Status: —
- Última atualização: —
- Decisões de arquitetura já tomadas: —
- Próximos passos: —
```

Se "Responsável atual" for Claude e o Eduardo precisar continuar a tarefa
através do Codex (fallback), o Codex lê esta seção, assume a partir do que
estiver escrito aqui, e atualiza "Responsável atual" pra Codex. Se esta
seção estiver vazia ou claramente desatualizada demais pra dar segurança, o
Codex pergunta ao Eduardo antes de inventar um plano novo — nunca assume
silenciosamente que pode redesenhar a arquitetura sozinho.

## Papéis

**Claude (arquiteto/orquestrador)**
- Dono do planejamento: quebra pedidos do Eduardo em tarefas executáveis,
  decide arquitetura, escolhe abordagem técnica.
- Escreve o plano **antes** de qualquer implementação grande na seção
  "Plano ativo" acima — decisão de arquitetura não fica só na cabeça.
- Revisa o que o Codex produzir antes de considerar pronto pra merge na
  `main`.

**Codex (executor em paralelo)**
- Trabalha na própria worktree/branch (`<projeto>-codex`, branch
  `codex-work`), implementando o que já foi planejado.
- Não redesenha arquitetura por conta própria. Se a tarefa não tiver plano
  registrado em "Plano ativo", ou se algo no meio do caminho exigir uma
  decisão que muda o desenho original, **para e pergunta ao Eduardo** em vez
  de decidir sozinho.
- Pode (e deve) apontar problemas no plano do Claude — só não deve
  substituir o plano sem essa conversa acontecer primeiro.

**Eduardo (decisor final)**
- Aprova merge de `claude-work`/`codex-work` pra `main`.
- Resolve qualquer divergência entre o que as duas IAs propõem.
- Decide prioridade quando as duas branches mexem em áreas que podem
  conflitar (ver seção "Conflito entre as duas branches").

## Se o Claude falhar (sem tokens, sessão caiu, etc.)

O Codex assume a **execução** da tarefa em andamento, não o papel de
arquiteto. Antes de continuar, o Codex deve:

1. Ler a seção "Plano ativo" no topo deste arquivo.
2. Se não achar plano suficiente pra continuar com segurança, perguntar ao
   Eduardo em vez de inventar um novo desenho.
3. Continuar seguindo as mesmas convenções do `AGENTS.md`.

Quando o Claude voltar a ficar disponível, ele deve reassumir o papel de
arquiteto — revisar o que foi feito na ausência dele antes de aprovar
continuidade, e atualizar "Plano ativo" de volta pra si mesmo.

## Conflito entre as duas branches

Se `claude-work` e `codex-work` mudarem o mesmo arquivo antes do merge: quem
perceber primeiro avisa o Eduardo. Ele decide qual versão vira a base
mesclada na `main`; o outro agente reaplica o que fez em cima dessa base
(rebase da própria branch) em vez de tentar resolver o conflito sozinho.

## Depois do merge

Quando `claude-work` ou `codex-work` for mesclada na `main`: apague a
worktree (`git worktree remove <pasta>`) e a branch (`git branch -d
<branch>`), depois recrie os dois a partir da `main` atualizada antes da
próxima tarefa. Não continue trabalhando numa branch que já foi mesclada —
isso acumula divergência e commits duplicados.

## Handoff entre os dois (ou entre sessões)

Antes de encerrar uma sessão no meio de uma tarefa, atualize a seção "Plano
ativo" no topo deste arquivo: o que já foi feito, o que falta, e qualquer
decisão tomada que não seja óbvia olhando só o código. Isso evita que a
próxima IA (seja Claude retomando, seja Codex assumindo) precise adivinhar o
estado.

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
   mesmo e registro a decisão em "Plano ativo".
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
paralelo, seja como fallback), ele segue o plano já registrado em "Plano
ativo" e foca na etapa 3 (implementação). A etapa 4 (revisão final) continua
sendo feita por mim ou pelo Eduardo antes do merge pra `main`.
