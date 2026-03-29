# AGENTS.md - Diretrizes de Codificação para ytv

## Visão Geral do Projeto

ytv é uma aplicação web que simula programações de TV convencionais utilizando conteúdo do YouTube. Cada canal integrado possui uma programação predefinida, ininterrupta e sincronizada entre todos os usuários. A aplicação inclui comerciais autorais entre quadros e programas.

Stack: Nuxt 4, Vue 3, TypeScript e Bun como gerenciador de pacotes. O projeto está em estágios iniciais.

## Recursos Adicionais

- **Documentação Nuxt UI**: https://ui.nuxt.com/llms.txt

## Comandos de Build / Lint / Teste

### Gerenciador de Pacotes
Este projeto usa **Bun** como gerenciador de pacotes. Use comandos `bun` em vez de npm/pnpm/yarn.

### Scripts Disponíveis

| Comando | Descrição |
|---------|------------|
| `bun install` | Instalar dependências |
| `bun run dev` | Iniciar servidor de desenvolvimento em http://localhost:3000 |
| `bun run build` | Build para produção |
| `bun run preview` | Visualizar build de produção |
| `bun run generate` | Gerar site estático |
| `bun run postinstall` | Executa `nuxt prepare` para gerar tipos |

### Executando um Único Teste
**Nenhum framework de teste está configurado atualmente.** Para adicionar testes, considere instalar o Vitest:
```bash
bun add -d vitest @vue/test-utils jsdom
```
Em seguida, adicione ao package.json:
```json
"test": "vitest",
"test:run": "vitest run"
```

### Linting
**Nenhum linter está configurado atualmente.** Para adicionar ESLint:
```bash
bun add -d eslint @nuxt/eslint
```
Em seguida, adicione ao nuxt.config.ts:
```ts
export default defineNuxtConfig({
  modules: ['@nuxt/eslint']
})
```

## Diretrizes de Estilo de Código

### Convenções Gerais
- Este é um projeto **Nuxt 4** usando Vue 3 Composition API com `<script setup>`
- Use TypeScript para todos os arquivos
- Siga a estrutura de diretórios do Nuxt: `app/`, `pages/`, `components/`, `composables/`, `server/`

### Imports
- Use auto-imports fornecidos pelo Nuxt (componentes Vue, composables, utilitários auto-importados)
- Imports explícitos apenas quando o auto-import não está disponível
- Agrupe imports: built-in → external → internal

### Formatação
- Use 2 espaços para indentação
- Use aspas simples para strings
- Sem vírgulas à direita
- Use inferência de TypeScript; tipos explícitos apenas para parâmetros/retornos de funções, props e tipos complexos

### Convenções de Nomenclatura
- **Componentes**: PascalCase (ex: `MyComponent.vue`, `<MyComponent />`)
- **Composables**: camelCase com prefixo `use` (ex: `useAuth.ts`)
- **Tipos/Interfaces**: PascalCase (ex: `UserResponse`)
- **Arquivos**: kebab-case (ex: `my-file.ts`)
- **Constantes**: SCREAMING_SNAKE_CASE para constantes globais

### Diretrizes de TypeScript
- Habilite `strict: true` no tsconfig quando possível
- Evite `any`; use `unknown` quando o tipo é desconhecido
- Use interfaces para formas de objetos, types para unions/intersections
- Aproveite os tipos auto-importados do Nuxt (`Ref`, `ComputedRef`, etc.)

### Específico para Vue/Nuxt
- Use `<script setup lang="ts">` para todos os componentes Vue
- Defina props com `defineProps<{ ... }>()` e use props tipadas
- Defina emits com `defineEmits<{ ... }>()` para segurança de tipos
- Use `nuxt.config.ts` para toda configuração (sem arquivos de config separados a menos que necessário)
- Use `composables/` para lógica reativa compartilhada
- Use `server/api/` para rotas de API

### Tratamento de Erros
- Use try/catch para operações assíncronas
- Aproveite o `useFetch` do Nuxt para busca de dados com tratamento de erros integrado
- Exiba mensagens de erro amigáveis na interface
- Log erros apropriadamente (console.error para dev, logging adequado em produção)

### Organização de Arquivos
```
ytv/
├── app/
│   ├── app.vue          # Componente raiz da aplicação
│   ├── pages/           # Páginas de rotas (criar se necessário)
│   ├── components/     # Componentes Vue
│   └── composables/    # Lógica compartilhada (criar se necessário)
├── server/
│   └── api/            # Rotas de API
├── nuxt.config.ts      # Configuração do Nuxt
├── package.json
└── tsconfig.json
```

### Convenções Git
- Use commits convencionais: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`
- Mantenha commits atômicos e focados
- Execute `bun run build` antes de fazer commit para garantir que não há erros de build

### Testes (quando adicionados)
- Place testes próximos aos arquivos de origem com sufixo `.spec.ts` ou `.test.ts`
- Use Vitest para testes unitários
- Teste renderização de componentes com @vue/test-utils

### Dependências
- Verifique o package.json antes de adicionar novas dependências
- Use `bun add` para dependências de produção
- Use `bun add -d` para dependências de desenvolvimento

### Problemas Conhecidos / Advertências
- Auto-imports do Nuxt podem sombrear imports explícitos; use import explícito se necessário
- Diretório `.nuxt/` é gerado - não edite diretamente
- Execute `bun run postinstall` após instalar novas dependências para regenerar os tipos
