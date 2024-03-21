import { Columns } from "../globals";
import { TASK_MODAL_TAG_OPTION } from "@/components";
import { v4 as uuidv4 } from "uuid";

export const TaskData: Columns = {
  backlog: {
    name: "Backlog",
    items: [
      {
        id: uuidv4(),
        title: "Implementar página de login",
        briefDescription: "Criar a página de login do sistema",
        description:
          "Desenvolver a página de login com campos de usuário e senha.",
        priority: "high",
        deadline: 180,
        endTask: new Date(2024, 2, 25),
        tags: [TASK_MODAL_TAG_OPTION[0]],
      },
      {
        id: uuidv4(),
        title: "Configurar servidor",
        briefDescription: "Configurar o servidor para o projeto",
        description: "Configurar um servidor para hospedar a aplicação.",
        priority: "medium",
        deadline: 165,
        endTask: new Date(2024, 2, 28),
        tags: [TASK_MODAL_TAG_OPTION[1]],
      },
      {
        id: uuidv4(),
        title: "Atualizar bibliotecas",
        briefDescription: "Atualizar as bibliotecas do projeto",
        description:
          "Atualizar todas as bibliotecas para as últimas versões estáveis.",
        priority: "low",
        deadline: 16,
        tags: [TASK_MODAL_TAG_OPTION[0]],
      },
      {
        id: uuidv4(),
        title: "Criar página de perfil",
        briefDescription: "Desenvolver a página de perfil do usuário",
        description:
          "Implementar a página de perfil do usuário com informações pessoais e configurações.",
        priority: "high",
        deadline: 90,
        endTask: new Date(2024, 2, 25),
        tags: [TASK_MODAL_TAG_OPTION[0]],
      },
      {
        id: uuidv4(),
        title: "Otimizar consultas SQL",
        briefDescription: "Otimizar as consultas SQL do sistema",
        description:
          "Revisar e otimizar todas as consultas SQL para melhorar o desempenho do sistema.",
        priority: "high",
        deadline: 90,
        endTask: new Date(2024, 2, 25),
        tags: [TASK_MODAL_TAG_OPTION[1]],
      },
    ],
  },
  todo: {
    name: "A Fazer",
    items: [
      {
        id: uuidv4(),
        title: "Implementar validações de formulário",
        briefDescription: "Adicionar validações aos formulários",
        description:
          "Incluir validações nos campos dos formulários para evitar dados inválidos.",
        priority: "medium",
        deadline: 180,
        endTask: new Date(2024, 2, 28),
        tags: [TASK_MODAL_TAG_OPTION[0]],
      },
      {
        id: uuidv4(),
        title: "Configurar pipeline de CI/CD",
        briefDescription: "Configurar integração contínua e entrega contínua",
        description:
          "Configurar um pipeline automatizado para testes e implantação contínua.",
        priority: "high",
        deadline: 160,
        endTask: new Date(2024, 2, 24),
        tags: [TASK_MODAL_TAG_OPTION[1]],
      },
      {
        id: uuidv4(),
        title: "Criar documentação do projeto",
        briefDescription: "Elaborar documentação completa do projeto",
        description:
          "Criar documentação detalhada sobre a arquitetura, instalação e utilização do projeto.",
        priority: "medium",
        deadline: 260,
        tags: [TASK_MODAL_TAG_OPTION[0]],
      },
      {
        id: uuidv4(),
        title: "Realizar testes de unidade",
        briefDescription: "Implementar e executar testes de unidade",
        description:
          "Criar e executar testes automatizados para garantir a integridade do código.",
        priority: "high",
        deadline: 90,
        tags: [TASK_MODAL_TAG_OPTION[2]],
      },
      {
        id: uuidv4(),
        title: "Configurar ambiente de desenvolvimento",
        briefDescription: "Preparar ambiente para desenvolvimento",
        description:
          "Configurar ambiente de desenvolvimento com as ferramentas necessárias.",
        priority: "medium",
        deadline: 50,
        endTask: new Date(2024, 2, 24),
        tags: [TASK_MODAL_TAG_OPTION[1]],
      },
    ],
  },
  doing: {
    name: "Em Progresso",
    items: [
      {
        id: uuidv4(),
        title: "Testar funcionalidades",
        briefDescription: "Realizar testes de funcionalidades",
        description:
          "Realizar testes de unidade e integração nas funcionalidades implementadas.",
        priority: "high",
        deadline: 180,
        endTask: new Date(2024, 2, 24),
        tags: [TASK_MODAL_TAG_OPTION[2]],
      },
      {
        id: uuidv4(),
        title: "Resolver bugs",
        briefDescription: "Corrigir problemas identificados",
        description: "Corrigir os bugs identificados durante os testes.",
        priority: "high",
        deadline: 200,
        endTask: new Date(2024, 2, 24),
        tags: [TASK_MODAL_TAG_OPTION[3]],
      },
      {
        id: uuidv4(),
        title: "Melhorar a UX/UI",
        briefDescription: "Realizar melhorias na experiência do usuário",
        description:
          "Realizar ajustes no design para melhorar a experiência do usuário.",
        priority: "medium",
        deadline: 160,
        endTask: new Date(2024, 3, 5),
        tags: [TASK_MODAL_TAG_OPTION[0]],
      },
      {
        id: uuidv4(),
        title: "Implementar novas funcionalidades",
        briefDescription: "Adicionar novas funcionalidades ao sistema",
        description:
          "Desenvolver e implementar novas funcionalidades solicitadas.",
        priority: "high",
        deadline: 180,
        endTask: new Date(2024, 2, 24),
        tags: [TASK_MODAL_TAG_OPTION[1]],
      },
      {
        id: uuidv4(),
        title: "Realizar testes de integração",
        briefDescription: "Testar a integração entre módulos",
        description:
          "Realizar testes de integração para garantir o funcionamento correto do sistema.",
        priority: "high",
        deadline: 260,
        endTask: new Date(2024, 2, 24),
        tags: [TASK_MODAL_TAG_OPTION[2]],
      },
    ],
  },
  test: {
    name: "Em Teste",
    items: [
      {
        id: uuidv4(),
        title: "Executar testes de desempenho",
        briefDescription: "Avaliar desempenho do sistema",
        description:
          "Realizar testes para avaliar o desempenho do sistema sob diferentes cargas.",
        priority: "high",
        deadline: 360,
        endTask: new Date(2024, 2, 24),
        tags: [TASK_MODAL_TAG_OPTION[2]],
      },
      {
        id: uuidv4(),
        title: "Realizar testes de segurança",
        briefDescription: "Verificar segurança do sistema",
        description:
          "Realizar testes para identificar e corrigir vulnerabilidades de segurança.",
        priority: "high",
        deadline: 180,
        endTask: new Date(2024, 2, 23),
        tags: [TASK_MODAL_TAG_OPTION[2]],
      },
      {
        id: uuidv4(),
        title: "Documentar resultados dos testes",
        briefDescription: "Registrar resultados dos testes realizados",
        description:
          "Documentar os resultados dos testes de forma clara e objetiva.",
        priority: "low",
        deadline: 90,
        tags: [TASK_MODAL_TAG_OPTION[2]],
      },
    ],
  },
  done: {
    name: "Concluído",
    items: [
      {
        id: uuidv4(),
        title: "Finalizar documentação",
        briefDescription: "Concluir a documentação do projeto",
        description:
          "Finalizar a documentação do projeto com todas as informações necessárias.",
        priority: "medium",
        deadline: 90,
        tags: [TASK_MODAL_TAG_OPTION[0]],
      },
    ],
  },
};
