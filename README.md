# Product & Technical Specification (SPEC)

## Mentoria & Aulas Particulares de Programação e Jogos

## 1. Visão Geral do Produto

* **Objetivo do Site:** Plataforma institucional e comercial de conversão para aulas particulares e mentoria técnica especializada em desenvolvimento de software e jogos.

* **Diferencial de Autoridade:** Ministrado por Engenheira de Software e Desenvolvedora de Jogos sênior (8+ anos de experiência, liderança técnica, histórico em produções comerciais e pós-graduação). Posicionamento *premium* focado em engenharia real, pedagogia estruturada e desenvolvimento cognitivo. https://marquesbelem.github.io/info/

* **Modalidades de Atendimento:**

  * **Online:** Todo o Brasil e exterior (a partir de 8 anos).

  * **Presencial Exclusivo:** Domicílio ou espaço reservado na região de **Caieiras, Franco da Rocha e Mairiporã (SP)**. Crianças de 5 a 7 anos são atendidas **exclusivamente na modalidade presencial**.

* **Call-to-Action (CTA) Principal:** Agendamento via WhatsApp direto e formulário de contato integrado.

## 2. Stack Tecnológica & Requisitos Técnicos

* **Framework:** Next.js (App Router, versão estável mais recente).

* **Linguagem:** TypeScript (strict mode ativado).

* **Estilização:** Tailwind CSS (design moderno, responsivo, modo escuro/claro e alto contraste para leitura clara por pais e estudantes).

* **Ícones:** Lucide React (`lucide-react`).

* **Renderização & Performance:**

  * Static Site Generation (SSG) para páginas estáticas de trilhas e landing pages.

  * Fontes otimizadas com `next/font/google` (zero Layout Shift / CLS = 0).

  * Imagens servidas via `next/image` com formatos WebP/AVIF automáticos e dimensões explícitas.

* **SEO & Indexação Técnica:**

  * Metadados dinâmicos e estáticos nativos do App Router (`Metadata` API).

  * `sitemap.ts` e `robots.ts` gerados programaticamente na rota `/app`.

  * Dados estruturados Schema.org via JSON-LD (`Course`, `Service`, `Person`, `LocalBusiness`).

  * URLs canônicas em todas as páginas para evitar conteúdo duplicado.

## 3. Arquitetura de Informação & Rotas

```
app/
├── layout.tsx                     # Shell global, fontes, header, footer e JSON-LD de Person/LocalBusiness
├── page.tsx                       # Home comercial (apresentação, resumo das trilhas, autoridade e CTAs)
├── robots.ts                      # Configuração de indexação para buscadores
├── sitemap.ts                     # Geração dinâmica do sitemap.xml
├── sobre/
│   └── page.tsx                   # Bio profissional, experiência na indústria de games e formação acadêmica
├── aulas/
│   ├── logica-infantil-scratch/
│   │   └── page.tsx               # Rota SEO pais/educação: 5 a 7 anos, ScratchJr e Scratch (Presencial exclusivo)
│   ├── roblox-kids-teens/
│   │   └── page.tsx               # Rota 8 a 15 anos: Roblox Studio + Luau
│   ├── unity-csharp/
│   │   └── page.tsx               # Rota profissional: Unity, C#, POO e arquitetura de software
│   ├── criacao-sites-ia/
│   │   └── page.tsx               # Rota adultos/empreendedores: Antigravity, Next.js e deploy
│   └── godot/
│       └── page.tsx               # Alternativa técnica para computadores de entrada
└── precos/
    └── page.tsx                   # Tabela comparativa transparente de valores Online vs. Presencial

```

## 4. Conteúdo das Trilhas de Ensino

### Trilha 1: Alfabetização Digital & Raciocínio Lógico (5 a 7 anos)

* **Modalidade:** **Exclusivamente Presencial** a domicílio ou espaço neutro (não ofertada online devido à necessidade de mediação motora fina e suporte ao foco).

* **Linha de Corte da Alfabetização:**

  * **5 a 6 anos (Fase Pré-Leitora) — ScratchJr:** Uso em tablets (iPad ou Android); interface puramente visual e simbólica; noções de causa e efeito, ordenação temporal (início, meio e fim) e pequenas animações interativas.

  * **7 anos (Leitor Inicial) — Scratch Tradicional:** Web/Desktop; introdução a comandos escritos simples ("mova 10 passos", "quando clicar na bandeira"); foco no domínio motor do mouse, cliques e alternância de janelas.

* **Diretrizes Pedagógicas:**

  * Sessões concentradas de **40 a 45 minutos** no máximo (respeitando o teto de foco cognitivo).

  * Narrativa lúdica contextualizada antes do código.

  * Recompensas visuais e interativas a cada 5 minutos.

* **Proposta de Valor aos Pais:** Desenvolvimento de lateralidade (esquerda/direita), raciocínio espacial, resolução de problemas e persistência lógica.

### Trilha 2: Roblox Studio & Luau (8 a 15 anos)

* **Foco:** Crianças e adolescentes com apelo lúdico imediato.

* **Metodologia:** Lógica de programação real com scripts em Luau (superando blocos visuais), vetores 3D, física de jogo, mecânicas multiplayer e publicação direta na plataforma Roblox.

* **Formato:** 1x por semana (60 min), com projetos práticos e minijogos a cada aula.

### Trilha 3: Unity 3D & C# (15+ anos)

* **Foco:** Formação sólida voltada para mercado de jogos, simulação e portfólio técnico.

* **Metodologia:** Boas práticas de Engenharia de Software aplicadas a games: POO (Programação Orientada a Objetos), design patterns, arquitetura de componentes, profiling, performance e publicação (Steam/Mobile).

* **Formato:** 1 a 2x por semana (60 a 90 min) com mentoria de portfólio e code review.

### Trilha 4: Criação de Sites Modernos com IA (Adultos & Profissionais)

* **Foco:** Profissionais autônomos, pequenos empresários e criadores de projetos próprios.

* **Metodologia:** Aceleração via Google Antigravity e ferramentas de IA para estruturar, componentizar e publicar landing pages funcionais.

* **Estrutura Modular (6h intensivas):**

  1. *Módulo 1:* Setup do ambiente e prompts técnicos no Antigravity.

  2. *Módulo 2:* Interface moderna e responsividade com Tailwind CSS.

  3. *Módulo 3:* Integração de formulários, botões de ação e dados.

  4. *Módulo 4:* Domínio customizado, DNS, SSL e deploy na nuvem (Vercel/GitHub Pages).

## 5. Tabela de Preços & Pacotes Comerciais

| Trilha / Categoria | Modalidade Online (Hora / Mensal) | Modalidade Presencial (Hora / Mensal)\* | Formato Recomendado | 
| ----- | ----- | ----- | ----- | 
| **Alfabetização Digital & Scratch** *(5 a 7 anos)* | *Não disponível online (apenas presencial)* | R\$ 90 a R$ 110/aula (45 min)  *(R\$ 360 a R$ 420/mês — 4 aulas)* | 1x semana (40 a 45 min) a domicílio | 
| **Roblox Studio** *(8 a 15 anos)* | R\$ 70 a R$ 85/h  *(R\$ 260 a R$ 320/mês — 4 aulas de 1h)* | R\$ 95 a R$ 120/h  *(R\$ 360 a R$ 450/mês — 4 aulas de 1h)* | 1x semana (60 min) com entregas práticas | 
| **Unity & C#** *(Foco Profissional)* | R\$ 90 a R$ 120/h  *(R\$ 340 a R$ 450/mês — 4 aulas de 1h)* | R\$ 130 a R$ 160/h  *(R\$ 480 a R$ 600/mês — 4 aulas de 1h)* | 1x a 2x semana (60 a 90 min) + mentoria | 
| **Sites com IA (Antigravity)** *(Adultos)* | R\$ 100 a R$ 130/h  *(Pacote fechado 6h: R\$ 500 a R$ 750)* | R\$ 140 a R$ 180/h  *(Pacote fechado 6h: R\$ 750 a R$ 950)* | Imersivo (ex: 3 sessões de 2h ou intensivo) | 

*\*Presencial com atendimento a domicílio ou espaço corporativo na região de Caieiras, Franco da Rocha e Mairiporã.*

## 6. Diretrizes de SEO Local e Dados Estruturados

### 6.1. Palavras-Chave Alvo

* **Primárias:** "Aulas particulares de programação infantil", "Mentoria Unity C# Brasil", "Aulas de Scratch para crianças".

* **Locais (Caieiras e Região):** "Aulas de programação infantil em Caieiras", "Professor de Scratch Franco da Rocha", "Roblox Studio Mairiporã", "Aulas particulares de tecnologia a domicílio Caieiras".

### 6.2. Schema JSON-LD Recomendado (Root Layout ou Home)

```
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://seudominio.com.br/#mentor",
      "name": "Nome da Engenheira",
      "jobTitle": "Engenheira de Software & Game Developer Senior",
      "description": "Mais de 8 anos de experiência em engenharia de software e produção de jogos comerciais.",
      "knowsAbout": ["Unity", "C#", "Roblox Luau", "Scratch", "ScratchJr", "Next.js", "AI-assisted Web Development"]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://seudominio.com.br/#business",
      "name": "Mentoria & Aulas de Programação",
      "url": "https://seudominio.com.br",
      "areaServed": [
        { "@type": "City", "name": "Caieiras" },
        { "@type": "City", "name": "Franco da Rocha" },
        { "@type": "City", "name": "Mairiporã" }
      ],
      "priceRange": "$$"
    }
  ]
}

```

## 7. Critérios de Aceite para o Agente de IA

1. **Acessibilidade & Responsividade:** Layout mobile-first fluido, pontuação Lighthouse de acessibilidade acima de 95.

2. **SEO Checklist:**

   * \[ \] Meta tags configuradas em cada rota (`title`, `description`, `canonical`, `openGraph`).

   * \[ \] Inclusão da rota `/aulas/logica-infantil-scratch` no `sitemap.ts`.

   * \[ \] `robots.ts` permitindo indexação completa de buscadores.

3. **Regra de Conversão & Negócio:**

   * Na página de Scratch/crianças menores de 8 anos, deixar **explícito** que a modalidade é presencial para a região atendida (Caieiras e arredores), informando a sessão de 40-45 minutos.

   * Botões de contato via WhatsApp com parâmetros URL específicos (ex: `?text=Olá! Gostaria de saber mais sobre as aulas de Scratch para crianças`).

## 8. Agent Skills
- **Next.js 16:** Sempre que houver solicitações relacionadas a Next.js 16, utilize obrigatoriamente a skill nextjs-best-practices (em: .agents/skills/nextjs-best-practices/SKILL.md) para garantir a qualidade do código.
- **Caveman:** Utilize obrigatoriamente a skill caveman (em: .agents/skills/caveman/SKILL.md) para otimização nos tokens e performance nas solicitações para os modelos. Seja conciso e objetivo nas suas respostas.

## 9. Identidade visual
Na raiz do projeto contém uma pasta chamada "assets" use os arquivos que estão dentro dela para montar o site com essa identidade, use a imagem de logotipo, profile, simbolos e fontes para deixar o site com a cara da minha marca.
