import type { Dictionarie } from "./type";

export const en: Dictionarie = {
  menu: {
    home: "Início",
    services: "Serviços",
    resume: "Currículo",
    work: "Trabalhos",
    contact: "Contato",
    button: "Contrate-me",
  },
  home: {
    title: "Olá, eu sou",
    author: "Grégory Alvim",
    role: "Desenvolvedor de Software",
    description:
      "Eu me destaco em criar experiências digitais elegantes e sou proficiente em várias linguagens de programação e tecnologias.",

    button: "Baixar CV",

    stats: {
      yearsOfExperience: "Anos de experiência",
      projectsCompleted: "Projetos concluídos",
      technologiesMaastered: "Tecnologias dominadas",
      codeCommits: "Commits de código",
    },
  },
  services: {
    one: {
      title: "Sites e Aplicações Web Modernas",
      description:
        "Desenvolvimento de interfaces responsivas, rápidas e com foco em experiência do usuário, performance e SEO.",
      href: "",
    },
    two: {
      title: "APIs e Lógicas de Servidor",
      description:
        "Desenvolvimento de backends robustos com APIs REST seguras, escaláveis e prontas para produção.",
      href: "",
    },
    three: {
      title: "Automatizações Inteligentes com IA e N8N",
      description:
        "Criação de fluxos automáticos com n8n e integração de IA para otimizar tarefas, negócios e atendimento.",
      href: "",
    },
    four: {
      title: "Tem uma ideia ou desafio?",
      description:
        "Conte com minha expertise para transformar sua necessidade em uma solução funcional, criativa e personalizada.",
      href: "",
    },
  },
  resume: {
    experience: {
      menu: "Experiência",
      title: "Minha experiência",
      description:
        "Estou sempre em busca de oportunidades para aprender coisas novas e me aprofundar cada vez mais no mercado de tecnologia e desenvolvimento pessoal. Se você está procurando um desenvolvedor qualificado, estou à disposição para discutir minhas habilidades e como posso contribuir para o seu projeto e equipe.",
      cards: [
        {
          title: "2024 - Atual",
          description: "Desenvolvedor Full-Stack Junior",
          badge: "Pacific Sec",
        },
        {
          title: "2023 - 2024",
          description: "Desenvolvedor Front-End Trainee",
          badge: "Pacific Sec",
        },
        {
          title: "2022 - 2023",
          description: "Analista de Suporte Pleno",
          badge: "Portábilis",
        },
        {
          title: "2020 - 2022",
          description: "Suporte Técnico",
          badge: "Cubo Sistemas",
        },
      ],
    },
    education: {
      menu: "Educação",
      title: "Minha experiência",
      description:
        "Estou sempre em busca de oportunidades para aprender coisas novas e me aprofundar cada vez mais no mercado de tecnologia e desenvolvimento pessoal. Se você está procurando um desenvolvedor qualificado, estou à disposição para discutir minhas habilidades e como posso contribuir para o seu projeto e equipe.",
      cards: [
        {
          title: "2021 - 2024",
          description: "Superior em Análise e Desenvolvimento de Sistemas",
          badge: "IFSC - Instituto Federal de Santa Catarina",
        },
        {
          title: "2023 - 2024",
          description: "Formação Ignite - ReactJS",
          badge: "Rocketseat",
        },
        {
          title: "2023 - 2024",
          description: "Formação Ignite - NodeJS",
          badge: "Rocketseat",
        },
        {
          title: "2021 - 2022",
          description: "Formação Explorer",
          badge: "Rocketseat",
        },
        {
          title: "2017 - 2019",
          description: "Curso Técnico Programação Web",
          badge: "Centro de Educação Profissional Diomício Freitas",
        },
        {
          title: "2017 - 2019",
          description: "Ensino Médio",
          badge: "Centro de Educação Profissional Diomício Freitas",
        },
      ],
    },
    skills: {
      menu: "Habilidades",
      title: "Minha experiência",
      description:
        "Estou sempre em busca de oportunidades para aprender coisas novas e me aprofundar cada vez mais no mercado de tecnologia e desenvolvimento pessoal. Se você está procurando um desenvolvedor qualificado, estou à disposição para discutir minhas habilidades e como posso contribuir para o seu projeto e equipe.",
    },
    about: {
      menu: "Sobre",
      title: "Minha experiência",
      description:
        "Estou sempre em busca de oportunidades para aprender coisas novas e me aprofundar cada vez mais no mercado de tecnologia e desenvolvimento pessoal. Se você está procurando um desenvolvedor qualificado, estou à disposição para discutir minhas habilidades e como posso contribuir para o seu projeto e equipe.",
      author: {
        name: {
          title: "Nome",
          value: "Grégory Alvim",
        },
        experience: {
          title: "Experiência",
          value: "2 Anos",
        },
        nationality: { title: "Nacionalidade", value: "Brasileiro" },
        freelance: {
          title: "Freelance",
          value: "Disponível",
        },
        phone: {
          title: "Telefone",
          value: "(+48) 9 9839-4783",
        },
        discord: {
          title: "Discord",
          value: "Greg Disc",
        },
        email: {
          title: "E-mail",
          value: "gregori.alvim@gmail.com",
        },
        languages: {
          title: "Línguas",
          value: ["Portugues", "Inglês"],
        },
      },
    },
  },
  work: {},
  contact: {
    form: {
      title: "Vamos trabalhar juntos",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo impedit.",
      placeholders: {
        firstName: "Nome",
        lastName: "Sobrenome",
        emailAddress: "E-mail",
        phoneNumber: "Telefone",
        selectService: "Selecione o serviço",
        message: "Digite sua mensagem aqui",
      },

      serviceOptions: [
        "Desenvolvimento Web",
        "Desenvolvimento de API",
        "Automatização com N8N",
        "Outros",
      ],

      button: "Enviar mensagem",
    },

    phone: {
      name: "Telefone",
      value: "(+48) 9 9839-4783",
    },
    email: {
      name: "E-mail",
      value: "gregori.alvim@gmail.com",
    },
    address: {
      name: "Endereço",
      value: "Jaguaruna, Santa Catarina, Brasil",
    },
  },
};
