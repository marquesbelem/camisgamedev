import type { Locale } from "@/components/LanguageProvider";
import type { Feedback, Track, TrackSlug } from "./site";

export const TRANSLATIONS = {
  pt: {
    skipToContent: "Ir para o conteúdo",
    nav: {
      classes: "Aulas",
      about: "Sobre",
      prices: "Preços",
      contact: "Contato",
      schedule: "Agendar",
      scheduleWhatsapp: "Olá! Gostaria de agendar uma aula",
      homeAria: "Camis GameDev - início",
      navAria: "Principal",
      navMobileAria: "Principal mobile",
    },
    footer: {
      tagline:
        "Mentoria e aulas particulares de programação e jogos, com engenharia real e pedagogia estruturada.",
      classesTitle: "Aulas",
      serviceTitle: "Atendimento",
      online: "Online: todo o Brasil e exterior.",
      onsite: "Presencial",
      rights: "Camis GameDev. Todos os direitos reservados.",
    },
    home: {
      badge: "Mentoria & aulas particulares",
      heroTitleBefore: "Aprenda a programar ",
      heroTitleAccent: "criando jogos",
      heroSubtitle:
        "Aulas com uma engenheira de software e game developer sênior, com 8+ anos de experiência, liderança técnica e produções comerciais. De 5 anos a profissionais.",
      heroWhatsapp: "Agendar pelo WhatsApp",
      heroWhatsappText: "Olá! Gostaria de agendar uma aula",
      heroTracks: "Ver aulas",
      onlineTag: "Online: Brasil e exterior",
      onsiteTag: "Presencial: Caieiras e região",
      portraitAlt: "Retrato da mentora Camis, engenheira de software e game developer",
      yearsBadge: "8+ anos",
      tracksTitle: "Escolha sua trilha",
      tracksSubtitle: "Cada trilha tem metodologia própria por faixa etária e objetivo.",
      learnMore: "Saiba mais",
      trialBadge: "30 minutos",
      trialTitle: "Sessão Prática Experimental",
      trialSubtitle:
        "Conheça a metodologia na prática antes de se comprometer. Uma aula curta, com projeto de verdade, para você ou seu filho sentir como é aprender a programar criando jogos.",
      trialBullet1Before: "Fechou o pacote mensal após a aula? O valor é ",
      trialBullet1Bold: "100% abatido",
      trialBullet1After: " da primeira mensalidade.",
      trialBullet2Before: "Depois da experiência, escolha entre ",
      trialBullet2Bold1: "aulas avulsas",
      trialBullet2Mid: " ou ",
      trialBullet2Bold2: "pacote mensal",
      trialBullet2After: ".",
      onlineLabel: "Online",
      onsiteLabel: "Presencial",
      trialWhatsapp: "Agendar sessão experimental",
      trialWhatsappText: "Olá! Gostaria de agendar uma Sessão Prática Experimental de 30 minutos",
      seeAllPrices: "Ver todos os preços",
      gamerAlt: "Jovem jogadora em frente ao computador",
      engTitle: "Engenharia real, pedagogia estruturada",
      engSubtitle:
        "Metodologia que une boas práticas de mercado, respeito ao tempo cognitivo de cada idade e projetos práticos a cada aula.",
      engBullets: [
        "Histórico em produções comerciais e liderança técnica",
        "Projetos práticos e portfólio desde as primeiras aulas",
        "Atendimento online e presencial exclusivo",
      ],
      feedbacksTitle: "O que dizem sobre o trabalho",
      contactTitle: "Vamos conversar?",
      contactSubtitle:
        "Me conte a idade, objetivo e se prefere online ou presencial. Respondo direto pelo WhatsApp.",
    },
    contact: {
      nameLabel: "Seu nome",
      namePlaceholder: "Como posso te chamar?",
      trackLabel: "Aula de interesse",
      modeLabel: "Modalidade",
      modeOnsite: "Presencial (Caieiras e região)",
      modeOnline: "Online",
      messageLabel: "Mensagem (opcional)",
      messagePlaceholder: "Idade, experiência prévia, horários...",
      submit: "Enviar pelo WhatsApp",
      sentStatus: "Abrimos o WhatsApp com sua mensagem pronta. Obrigada!",
      msgPrefix: "Olá! Meu nome é",
      msgInterest: "Tenho interesse em:",
      msgMode: "Modalidade:",
      msgBody: "Mensagem:",
    },
    feedback: {
      prev: "Feedback anterior",
      next: "Próximo feedback",
    },
    about: {
      portraitAlt: "Retrato da mentora Camis",
      title: "Sobre a mentora",
      p1: "Engenheira de Software e Desenvolvedora de Jogos sênior, com mais de 8 anos de experiência, liderança técnica e histórico em produções comerciais.",
      p2: "Minhas aulas unem engenharia real, pedagogia estruturada e desenvolvimento cognitivo: do primeiro bloco do ScratchJr à arquitetura de um jogo em Unity.",
      resumeLink: "Ver currículo completo",
      facts: [
        { t: "8+ anos", d: "de experiência em engenharia de software" },
        { t: "Jogos comerciais", d: "histórico real na indústria de games" },
        { t: "Liderança técnica", d: "code review e mentoria de times" },
        { t: "Pós-graduação", d: "formação acadêmica sólida" },
      ],
      whatsappText: "Olá! Vi seu site e gostaria de conversar sobre as aulas",
    },
    prices: {
      title: "Preços",
      subtitle:
        "Valores transparentes por trilha. Presencial com atendimento a domicílio ou espaço corporativo na região de Caieiras, Franco da Rocha e Mairiporã.",
      caption: "Comparativo de preços online e presencial",
      headers: ["Trilha", "Online", "Presencial", "Formato"],
      notOnline: "Não disponível online (apenas presencial)",
      onsiteOnlyShort: "Apenas presencial",
      onlineLabel: "Online",
      onsiteLabel: "Presencial",
      formatLabel: "Formato",
      footnote:
        "*Presencial com atendimento a domicílio ou espaço corporativo na região de Caieiras, Franco da Rocha e Mairiporã.",
      whatsappText: "Olá! Gostaria de um orçamento para as aulas",
      whatsappLabel: "Pedir orçamento",
    },
    trackPage: {
      breadcrumb: "Aulas",
      modeLabel: "Modalidade",
      formatLabel: "Formato",
      priceLabel: "Investimento",
      highlightsTitle: "Destaques",
      whatsappLabel: "Agendar pelo WhatsApp",
    },
  },
  en: {
    skipToContent: "Skip to content",
    nav: {
      classes: "Classes",
      about: "About",
      prices: "Pricing",
      contact: "Contact",
      schedule: "Book now",
      scheduleWhatsapp: "Hi! I'd like to book a class",
      homeAria: "Camis GameDev - home",
      navAria: "Main",
      navMobileAria: "Mobile main",
    },
    footer: {
      tagline:
        "1-on-1 programming and game development mentoring and classes, combining real-world engineering with structured pedagogy.",
      classesTitle: "Classes",
      serviceTitle: "Availability",
      online: "Online: worldwide.",
      onsite: "In-person",
      rights: "Camis GameDev. All rights reserved.",
    },
    home: {
      badge: "Mentoring & 1-on-1 classes",
      heroTitleBefore: "Learn to code by ",
      heroTitleAccent: "building games",
      heroSubtitle:
        "Classes with a senior software engineer and game developer with 8+ years of experience, technical leadership, and commercial releases. From age 5 to professionals.",
      heroWhatsapp: "Book on WhatsApp",
      heroWhatsappText: "Hi! I'd like to book a class",
      heroTracks: "View classes",
      onlineTag: "Online: worldwide",
      onsiteTag: "In-person: Caieiras & region (SP)",
      portraitAlt: "Portrait of mentor Camis, software engineer and game developer",
      yearsBadge: "8+ years",
      tracksTitle: "Choose your track",
      tracksSubtitle: "Each track has its own methodology tailored to age group and goals.",
      learnMore: "Learn more",
      trialBadge: "30 minutes",
      trialTitle: "Hands-On Trial Session",
      trialSubtitle:
        "Experience the methodology in practice before committing. A short session with a real mini-project so you or your child can feel what it's like to learn coding by making games.",
      trialBullet1Before: "Signed up for a monthly plan after the trial? The fee is ",
      trialBullet1Bold: "100% credited",
      trialBullet1After: " toward your first month.",
      trialBullet2Before: "After the trial, choose between ",
      trialBullet2Bold1: "single classes",
      trialBullet2Mid: " or a ",
      trialBullet2Bold2: "monthly plan",
      trialBullet2After: ".",
      onlineLabel: "Online",
      onsiteLabel: "In-person",
      trialWhatsapp: "Book trial session",
      trialWhatsappText: "Hi! I'd like to book a 30-minute Hands-On Trial Session",
      seeAllPrices: "View all pricing",
      gamerAlt: "Young gamer in front of a computer",
      engTitle: "Real engineering, structured pedagogy",
      engSubtitle:
        "A methodology that combines industry best practices, respect for each age's cognitive pace, and hands-on projects every class.",
      engBullets: [
        "Background in commercial game productions and tech leadership",
        "Hands-on projects and portfolio from the very first classes",
        "Exclusive online and in-person instruction",
      ],
      feedbacksTitle: "What people say",
      contactTitle: "Let's talk?",
      contactSubtitle:
        "Tell me the student's age, goals, and whether you prefer online or in-person. I reply directly on WhatsApp.",
    },
    contact: {
      nameLabel: "Your name",
      namePlaceholder: "How should I call you?",
      trackLabel: "Track of interest",
      modeLabel: "Format",
      modeOnsite: "In-person (Caieiras & region)",
      modeOnline: "Online",
      messageLabel: "Message (optional)",
      messagePlaceholder: "Age, prior experience, preferred schedule...",
      submit: "Send via WhatsApp",
      sentStatus: "WhatsApp opened with your message ready. Thank you!",
      msgPrefix: "Hi! My name is",
      msgInterest: "I'm interested in:",
      msgMode: "Format:",
      msgBody: "Message:",
    },
    feedback: {
      prev: "Previous feedback",
      next: "Next feedback",
    },
    about: {
      portraitAlt: "Portrait of mentor Camis",
      title: "About the mentor",
      p1: "Senior Software Engineer and Game Developer with over 8 years of experience, technical leadership, and a track record in commercial game productions.",
      p2: "My classes unite real-world engineering, structured pedagogy, and cognitive development: from the first ScratchJr block to the architecture of a Unity game.",
      resumeLink: "View full resume",
      facts: [
        { t: "8+ years", d: "of software engineering experience" },
        { t: "Commercial games", d: "real track record in the games industry" },
        { t: "Tech leadership", d: "code review and team mentoring" },
        { t: "Postgraduate", d: "solid academic background" },
      ],
      whatsappText: "Hi! I saw your website and would like to chat about classes",
    },
    prices: {
      title: "Pricing",
      subtitle:
        "Transparent pricing per track. In-person classes available at home or corporate spaces in Caieiras, Franco da Rocha, and Mairiporã (SP).",
      caption: "Online vs. in-person pricing comparison",
      headers: ["Track", "Online", "In-person", "Format"],
      notOnline: "Not available online (in-person only)",
      onsiteOnlyShort: "In-person only",
      onlineLabel: "Online",
      onsiteLabel: "In-person",
      formatLabel: "Format",
      footnote:
        "*In-person classes at home or corporate spaces in Caieiras, Franco da Rocha, and Mairiporã (SP).",
      whatsappText: "Hi! I'd like a quote for the classes",
      whatsappLabel: "Request a quote",
    },
    trackPage: {
      breadcrumb: "Classes",
      modeLabel: "Format",
      formatLabel: "Schedule",
      priceLabel: "Investment",
      highlightsTitle: "Highlights",
      whatsappLabel: "Book on WhatsApp",
    },
  },
} as const;

export const TRACKS_EN: Record<TrackSlug, Omit<Track, "slug" | "icon" | "accent">> = {
  "logica-infantil-scratch": {
    title: "Digital Literacy & Scratch",
    short: "ScratchJr and Scratch: logic, cause and effect, and first animations.",
    audience: "Ages 5 to 7",
    mode: "In-person only",
    format: "1x per week · 40 to 45 min · at home",
    price: "R$ 90/class",
    whatsappText: "Hi! I'd like to know more about Scratch classes for kids",
    seoTitle: "Scratch Classes for Kids in Caieiras | Ages 5 to 7",
    seoDescription:
      "Private coding classes for kids with ScratchJr and Scratch (ages 5–7). In-person in Caieiras, Franco da Rocha, and Mairiporã. 40–45 min sessions.",
    headline: "Kids coding with ScratchJr and Scratch",
    intro:
      "Logic, spatial reasoning, and persistence through stories and small animations. Classes designed for each age's attention span, with direct teacher mediation.",
    highlights: [
      "40 to 45-minute sessions respecting cognitive focus",
      "Playful storytelling before code",
      "Visual and interactive reward every 5 minutes",
      "Laterality, spatial reasoning, and problem-solving",
    ],
    sections: [
      {
        title: "Ages 5 to 6 · Pre-reader · ScratchJr",
        items: [
          "Tablet-based (iPad or Android)",
          "Purely visual and symbolic interface",
          "Cause and effect, temporal ordering (beginning, middle, end)",
          "Small interactive animations",
        ],
      },
      {
        title: "Age 7 · Early reader · Classic Scratch",
        items: [
          "Web/Desktop with simple written blocks (“move 10 steps”, “when flag clicked”)",
          "Fine motor control with mouse, clicks, and window switching",
          "First games and interactive stories",
        ],
      },
    ],
    notice:
      "This track is offered exclusively in-person, at home or in a dedicated space, in Caieiras, Franco da Rocha, and Mairiporã (SP). There is no online version, as ages 5–7 require fine-motor mediation and focus support. Each session lasts 40 to 45 minutes.",
  },
  "roblox-kids-teens": {
    title: "Roblox Studio & Luau",
    short: "Real programming in Luau, physics, multiplayer, and publishing on Roblox.",
    audience: "Ages 8 to 15",
    mode: "Online or in-person",
    format: "1x per week · 60 min · hands-on projects",
    price: "R$ 85 (Online) & R$ 120 (In-person)",
    whatsappText: "Hi! I'd like to know more about Roblox Studio classes for my child",
    seoTitle: "Roblox Studio & Luau Classes for Kids and Teens",
    seoDescription:
      "Private Roblox Studio classes with real Luau coding for ages 8 to 15. Online worldwide or in-person in Caieiras, Franco da Rocha, and Mairiporã.",
    headline: "Build and publish Roblox games with real code",
    intro:
      "From immediate playful appeal to real programming logic: Luau scripts, 3D vectors, physics, multiplayer mechanics, and publishing directly to the platform.",
    highlights: [
      "Luau scripting, going beyond visual blocks",
      "A practical mini-game every class",
      "Physics, 3D vectors, and multiplayer",
      "Direct publishing on the Roblox platform",
    ],
    sections: [
      {
        title: "What your child will learn",
        items: [
          "Logic fundamentals: variables, conditionals, loops, and functions",
          "Events, physics, and object interaction",
          "Multiplayer mechanics and client/server communication",
          "How to publish, test, and iterate on a game",
        ],
      },
    ],
  },
  "unity-csharp": {
    title: "Unity 3D & C#",
    short: "Software engineering applied to games, with portfolio and code review.",
    audience: "Ages 15+ · career focus",
    mode: "Online or in-person",
    format: "1 to 2x per week · 60 to 90 min · mentoring",
    price: "R$ 120 (Online) & R$ 160 (In-person)",
    whatsappText: "Hi! I'd like to know more about Unity and C# mentoring",
    seoTitle: "Unity & C# Mentoring | Game Dev Classes with Senior Engineer",
    seoDescription:
      "Unity 3D and C# mentoring with OOP, design patterns, component architecture, and portfolio. Online worldwide or in-person in Caieiras (SP).",
    headline: "Unity & C# mentoring with real engineering",
    intro:
      "Solid training for the games industry, simulation, and technical portfolio, led by someone who has been leading commercial productions for over 8 years.",
    highlights: [
      "OOP, design patterns, and component architecture",
      "Profiling and performance optimization",
      "Portfolio mentoring and code review",
      "Publishing for Steam and mobile",
    ],
    sections: [
      {
        title: "Curriculum",
        items: [
          "Modern C# and Object-Oriented Programming",
          "Component architecture and design patterns",
          "Profiling, performance, and build best practices",
          "Portfolio preparation and publishing (Steam/Mobile)",
        ],
      },
    ],
  },
  "criacao-sites-ia": {
    title: "Modern Websites with AI",
    short: "Landing pages live in 6h with Google Antigravity, Next.js, and deploy.",
    audience: "Adults & professionals",
    mode: "Online or in-person",
    format: "Immersive 6h package (e.g., 3 sessions of 2h)",
    price: "6h Package: R$ 780 (Online) & R$ 1080 (In-person)",
    whatsappText: "Hi! I'd like to know more about the AI website creation course",
    seoTitle: "AI Website Creation Course | Antigravity, Next.js & Deploy",
    seoDescription:
      "Learn to build and publish modern landing pages with Google Antigravity, Next.js, and Tailwind CSS in 6h. For freelancers and entrepreneurs.",
    headline: "Build and publish your website with AI",
    intro:
      "For freelancers, small business owners, and independent creators who want to go from zero to a published website without relying on third parties.",
    highlights: [
      "Acceleration with Google Antigravity",
      "Responsive UI with Tailwind CSS",
      "Forms, action buttons, and data",
      "Domain, DNS, SSL, and deploy (Vercel/GitHub Pages)",
    ],
    sections: [
      {
        title: "Modular structure · 6 intensive hours",
        items: [
          "Module 1: environment setup and technical prompts in Antigravity",
          "Module 2: modern UI and responsiveness with Tailwind CSS",
          "Module 3: integrating forms, action buttons, and data",
          "Module 4: custom domain, DNS, SSL, and cloud deploy",
        ],
      },
    ],
  },
};

export const PRICES_EN = [
  {
    track: "Digital Literacy & Scratch",
    sub: "Ages 5 to 7",
    online: null as string | null,
    onlineMonth: null as string | null,
    onsite: "R$ 90/class (45 min)",
    onsiteMonth: "R$ 360/month · 4 classes",
    format: "1x/week (40 to 45 min) at home",
  },
  {
    track: "Roblox Studio",
    sub: "Ages 8 to 15",
    online: "R$85/h",
    onlineMonth: "R$ 340/month · 4x 1h classes",
    onsite: "R$120/h",
    onsiteMonth: "R$ 480/month · 4x 1h classes",
    format: "1x/week (60 min) with hands-on projects",
  },
  {
    track: "Unity & C#",
    sub: "Career focus",
    online: "R$120/h",
    onlineMonth: "R$ 480/month · 4x 1h classes",
    onsite: "R$160/h",
    onsiteMonth: "R$ 640/month · 4x 1h classes",
    format: "1–2x/week (60 to 90 min) + mentoring",
  },
  {
    track: "Websites with AI (Antigravity)",
    sub: "Adults",
    online: "R$130/h",
    onlineMonth: "6h package: R$ 780",
    onsite: "R$180/h",
    onsiteMonth: "6h package: R$ 1080",
    format: "Immersive (e.g., 3 sessions of 2h)",
  },
];

export const FEEDBACKS_EN: Feedback[] = [
  {
    name: "Alan",
    review:
      "I had the opportunity to know Camila as a student in the Digital Games program at Faculdade Impacta, where she showed great commitment. Since graduating, Camila has dedicated herself to her personal and professional growth, building a remarkable path in the Brazilian digital games industry.",
  },
  {
    name: "Clara",
    review:
      "Camila is a dedicated, organized, and responsible professional, with great project vision and exemplary technical mastery. As a leader, she is empathetic, communicative, and bridges communication across different areas of the project. She trusts her team and gives the support needed for complex tasks, showing great delegation skills and a vision for developing the people around her. I strongly recommend Camila as a professional and leader for high-performance engineering teams.",
  },
  {
    name: "Kleber",
    review:
      "Camila is an extraordinary person, very easy to work with. She is a very competent, focused, and committed professional. Always attentive to deadlines, and especially to the quality of her deliveries.",
  },
  {
    name: "Felipe",
    review:
      "Camila is one of the most organized and dedicated people I know. She always prioritizes quality and deadlines, going above and beyond to deliver work she can be proud of. She is eager to learn and never hesitates to ask for help when needed. Simply the best person I've had the pleasure to study and build projects with.",
  },
];

export function getLocalizedTrack(track: Track, locale: Locale): Track {
  if (locale === "pt") return track;
  return {
    ...track,
    ...TRACKS_EN[track.slug],
  };
}
