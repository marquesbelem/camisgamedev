export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://camisgamedev.com.br"
).replace(/\/$/, "");

/** Número com DDI+DDD, só dígitos. Configure em NEXT_PUBLIC_WHATSAPP. */
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP ?? "5511999999999";

export const BRAND = "Camis GameDev";
export const MENTOR_NAME = "Camis Marques Belem";
export const PERSONAL_SITE_URL = "https://cmbelem.vercel.app";
export const REGION = ["Caieiras", "Franco da Rocha", "Mairiporã"];

export function whatsappLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export type TrackSlug =
  | "logica-infantil-scratch"
  | "roblox-kids-teens"
  | "unity-csharp"
  | "criacao-sites-ia";

export interface Track {
  slug: TrackSlug;
  title: string;
  short: string;
  audience: string;
  mode: string;
  format: string;
  price: string;
  icon: "puzzle" | "blocks" | "gamepad" | "globe" | "cpu";
  accent: "yellow" | "purple";
  whatsappText: string;
  seoTitle: string;
  seoDescription: string;
  headline: string;
  intro: string;
  highlights: string[];
  sections: { title: string; items: string[] }[];
  notice?: string;
}

export const TRACKS: Track[] = [
  {
    slug: "logica-infantil-scratch",
    title: "Alfabetização Digital & Scratch",
    short: "ScratchJr e Scratch: lógica, causa e efeito e primeiras animações.",
    audience: "5 a 7 anos",
    mode: "Exclusivamente presencial",
    format: "1x por semana · 40 a 45 min · a domicílio",
    price: "R$ 90/aula",
    icon: "puzzle",
    accent: "yellow",
    whatsappText:
      "Olá! Gostaria de saber mais sobre as aulas de Scratch para crianças",
    seoTitle: "Aulas de Scratch para Crianças em Caieiras | 5 a 7 anos",
    seoDescription:
      "Aulas particulares de programação infantil com ScratchJr e Scratch para crianças de 5 a 7 anos. Presencial em Caieiras, Franco da Rocha e Mairiporã. Sessões de 40 a 45 min.",
    headline: "Programação infantil com ScratchJr e Scratch",
    intro:
      "Lógica, raciocínio espacial e persistência através de histórias e pequenas animações. Aulas pensadas para o tempo de foco de cada idade, com mediação direta da professora.",
    highlights: [
      "Sessões de 40 a 45 minutos, respeitando o foco cognitivo",
      "Narrativa lúdica antes do código",
      "Recompensa visual e interativa a cada 5 minutos",
      "Lateralidade, raciocínio espacial e resolução de problemas",
    ],
    sections: [
      {
        title: "5 a 6 anos · Fase pré-leitora · ScratchJr",
        items: [
          "Uso em tablets (iPad ou Android)",
          "Interface puramente visual e simbólica",
          "Causa e efeito, ordenação temporal (início, meio e fim)",
          "Pequenas animações interativas",
        ],
      },
      {
        title: "7 anos · Leitor inicial · Scratch tradicional",
        items: [
          "Web/Desktop com comandos escritos simples (“mova 10 passos”, “quando clicar na bandeira”)",
          "Domínio motor do mouse, cliques e alternância de janelas",
          "Primeiros jogos e histórias interativas",
        ],
      },
    ],
    notice:
      "Esta trilha é oferecida exclusivamente na modalidade presencial, a domicílio ou em espaço reservado, em Caieiras, Franco da Rocha e Mairiporã (SP). Não há versão online, pois a faixa de 5 a 7 anos exige mediação motora fina e apoio ao foco. Cada sessão dura de 40 a 45 minutos.",
  },
  {
    slug: "roblox-kids-teens",
    title: "Roblox Studio & Luau",
    short: "Programação real em Luau, física, multiplayer e publicação no Roblox.",
    audience: "8 a 15 anos",
    mode: "Online ou presencial",
    format: "1x por semana · 60 min · projetos práticos",
    price: "R$ 85 (Online) e R$ 120 (Presencial)",
    icon: "blocks",
    accent: "purple",
    whatsappText:
      "Olá! Gostaria de saber mais sobre as aulas de Roblox Studio para meu filho(a)",
    seoTitle: "Aulas de Roblox Studio e Luau para Crianças e Adolescentes",
    seoDescription:
      "Aulas particulares de Roblox Studio com programação real em Luau para 8 a 15 anos. Online para todo o Brasil ou presencial em Caieiras, Franco da Rocha e Mairiporã.",
    headline: "Crie e publique jogos no Roblox com código de verdade",
    intro:
      "Do apelo lúdico imediato à lógica de programação real: scripts em Luau, vetores 3D, física, mecânicas multiplayer e publicação direta na plataforma.",
    highlights: [
      "Scripts em Luau, indo além dos blocos visuais",
      "Um minijogo prático a cada aula",
      "Física, vetores 3D e multiplayer",
      "Publicação direta na plataforma Roblox",
    ],
    sections: [
      {
        title: "O que seu filho(a) vai aprender",
        items: [
          "Fundamentos de lógica: variáveis, condições, laços e funções",
          "Eventos, física e interação entre objetos",
          "Mecânicas multiplayer e comunicação cliente/servidor",
          "Como publicar, testar e iterar um jogo",
        ],
      },
    ],
  },
  {
    slug: "unity-csharp",
    title: "Unity 3D & C#",
    short: "Engenharia de software aplicada a jogos, com portfólio e code review.",
    audience: "15+ anos · foco profissional",
    mode: "Online ou presencial",
    format: "1 a 2x por semana · 60 a 90 min · mentoria",
    price: "R$ 120 (Online) e R$ 160 (Presencial)",
    icon: "gamepad",
    accent: "yellow",
    whatsappText: "Olá! Gostaria de saber mais sobre a mentoria de Unity e C#",
    seoTitle: "Mentoria Unity e C# | Aulas de Game Dev com Engenheira Sênior",
    seoDescription:
      "Mentoria de Unity 3D e C# com POO, design patterns, arquitetura de componentes e portfólio. Aulas online no Brasil todo ou presenciais na região de Caieiras (SP).",
    headline: "Mentoria Unity & C# com engenharia de verdade",
    intro:
      "Formação sólida para o mercado de jogos, simulação e portfólio técnico, conduzida por quem lidera produções comerciais há mais de 8 anos.",
    highlights: [
      "POO, design patterns e arquitetura de componentes",
      "Profiling e otimização de performance",
      "Mentoria de portfólio e code review",
      "Publicação para Steam e mobile",
    ],
    sections: [
      {
        title: "Conteúdo",
        items: [
          "C# moderno e Programação Orientada a Objetos",
          "Arquitetura de componentes e padrões de projeto",
          "Profiling, performance e boas práticas de build",
          "Preparação de portfólio e publicação (Steam/Mobile)",
        ],
      },
    ],
  },
  {
    slug: "criacao-sites-ia",
    title: "Sites Modernos com IA",
    short: "Landing pages no ar em 6h com Google Antigravity, Next.js e deploy.",
    audience: "Adultos & profissionais",
    mode: "Online ou presencial",
    format: "Pacote imersivo de 6h (ex.: 3 sessões de 2h)",
    price: "Pacote 6h: R$ 780 (Online) e R$ 1080 (Presencial)",
    icon: "globe",
    accent: "purple",
    whatsappText: "Olá! Gostaria de saber mais sobre o curso de criação de sites com IA",
    seoTitle: "Curso de Criação de Sites com IA | Antigravity, Next.js e Deploy",
    seoDescription:
      "Aprenda a criar e publicar landing pages modernas com Google Antigravity, Next.js e Tailwind CSS em 6h. Para autônomos e empreendedores. Online ou presencial.",
    headline: "Crie e publique seu site com a ajuda da IA",
    intro:
      "Para profissionais autônomos, pequenos empresários e criadores de projetos próprios que querem sair do zero até um site publicado, sem depender de terceiros.",
    highlights: [
      "Aceleração com Google Antigravity",
      "Interface responsiva com Tailwind CSS",
      "Formulários, botões de ação e dados",
      "Domínio, DNS, SSL e deploy (Vercel/GitHub Pages)",
    ],
    sections: [
      {
        title: "Estrutura modular · 6h intensivas",
        items: [
          "Módulo 1: setup do ambiente e prompts técnicos no Antigravity",
          "Módulo 2: interface moderna e responsividade com Tailwind CSS",
          "Módulo 3: integração de formulários, botões de ação e dados",
          "Módulo 4: domínio customizado, DNS, SSL e deploy na nuvem",
        ],
      },
    ],
  },
];

export const PRICES = [
  {
    track: "Alfabetização Digital & Scratch",
    sub: "5 a 7 anos",
    online: null as string | null,
    onlineMonth: null as string | null,
    onsite: "R$ 90/aula (45 min)",
    onsiteMonth: "R$ 360/mês · 4 aulas",
    format: "1x semana (40 a 45 min) a domicílio",
  },
  {
    track: "Roblox Studio",
    sub: "8 a 15 anos",
    online: "R$85/h",
    onlineMonth: "R$ 340/mês · 4 aulas de 1h",
    onsite: "R$120/h",
    onsiteMonth: "R$ 480/mês · 4 aulas de 1h",
    format: "1x semana (60 min) com entregas práticas",
  },
  {
    track: "Unity & C#",
    sub: "Foco profissional",
    online: "R$120/h",
    onlineMonth: "R$ 480/mês · 4 aulas de 1h",
    onsite: "R$160/h",
    onsiteMonth: "R$ 640/mês · 4 aulas de 1h",
    format: "1x a 2x semana (60 a 90 min) + mentoria",
  },
  {
    track: "Sites com IA (Antigravity)",
    sub: "Adultos",
    online: "R$130/h",
    onlineMonth: "Pacote fechado 6h: R$ 780",
    onsite: "R$180/h",
    onsiteMonth: "Pacote fechado 6h: R$ 1080",
    format: "Imersivo (ex.: 3 sessões de 2h)",
  },
];
