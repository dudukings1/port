# AGENTS.md — Convenções pra qualquer IA trabalhando neste repo

Este arquivo é lido por agentes de coding (Claude Code, Codex CLI). Se você é uma
IA lendo isso: siga as regras abaixo antes de propor ou aplicar qualquer mudança.

## O projeto

Portfolio pessoal do Eduardo, estilo Cuberto — redesign com fonte Inter,
animações com GSAP + Lenis + mouse-follower.

**Atenção de estrutura**: o app real fica em `port/projeto/`, não na raiz do
repositório. Todo comando abaixo precisa ser rodado dentro de `projeto/`.

Stack: React 19 + TypeScript + Vite, ESLint.

## Comandos

Cada worktree (`-claude`, `-codex`) tem suas próprias dependências — rode
`npm install` de novo em cada uma, `node_modules` não é compartilhado entre
worktrees.

```powershell
cd projeto
npm install
npm run dev       # servidor local
npm run build     # tsc -b && vite build — precisa passar antes de commit
npm run lint       # eslint .
```

## Workflow com dois agentes em paralelo

| Pasta | Branch | Agente |
|---|---|---|
| `port/` | `main` | humano (Eduardo) — só recebe merges revisados |
| `port-claude/` | `claude-work` | Claude Code |
| `port-codex/` | `codex-work` | Codex |

Regras:

- Trabalhe **só** na sua branch/worktree (lembre de entrar em `projeto/`
  dentro dela).
- Commits pequenos, prefixo convencional (`feat:`, `fix:`, `refactor:`,
  `chore:`), em inglês.
- Nunca `push --force`, `merge` ou `rebase` direto na `main`.
- Antes de começar uma tarefa nova, dê rebase (ou merge) da `main` atualizada
  na sua branch.
- Nunca commite um arquivo `.env` real nem cole valor de segredo/credencial
  em commit, log ou código — use sempre `.env.example` como referência.
- Fidelidade visual importa muito aqui: cor, layout, raio de borda e
  animação são um pacote só — não aproxime "parecido o suficiente" sem
  confirmar com o Eduardo.

## Idioma

Textos de UI e documentação: português. Commits, código e comentários:
inglês.
