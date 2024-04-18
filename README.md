<p align="center">
  <img src="https://raw.githubusercontent.com/RediUX/RediUX/8a699d5e7859c1cd5d53c3a241a5bb358cd431ce/assets/favicon.svg" alt="Logo do RediUX">
</p>

# RediUX - Repositório Digital de User Experience


## Sobre o Projeto
O RediUX é uma aplicação web projetada para o compartilhamento de conteúdo educacional na área de User Experience (UX). Este repositório digital serve como uma plataforma centralizada onde materiais didáticos, como aulas, artigos, postagens e diversos tipos de mídia, são disponibilizados para enriquecer o processo de aprendizagem dos alunos. A iniciativa visa facilitar o acesso a recursos educacionais de qualidade, proporcionando uma experiência de aprendizado mais dinâmica e interativa.

## Desenvolvedores e Responsabilidades
- **[Luiz Eduardo](https://github.com/Luiz-Eduardo-BL)**: Como Tech Lead e Desenvolvedor, Luiz Eduardo é o principal responsável pela condução técnica do projeto, garantindo as melhores práticas de desenvolvimento e a integração eficiente entre a equipe.
- **[Lucas Amorim](https://linkedin.com/in/lxcasamorim)**: Atuando como Desenvolvedor, Lucas Amorim desempenha um papel crucial na implementação de funcionalidades, colaborando ativamente no ciclo de vida do desenvolvimento de software.

## Tecnologias Utilizadas
- **JavaScript**: A espinha dorsal do desenvolvimento do RediUX, com Node.js empregado no BackEnd e React no FrontEnd, proporcionando uma experiência de usuário fluida e responsiva.
- **Docker**: Essencial para a criação e gerenciamento dos ambientes de desenvolvimento e produção, garantindo consistência e eficiência operacional.

## Como Rodar o Projeto
Para iniciar sua jornada com o RediUX, siga os passos abaixo:

1. Clone o repositório com o comando: `git clone https://github.com/RediUX/RediUX_.git`.
2. Construa o ambiente utilizando Docker com: `docker-compose build`.
3. Inicie os serviços em modo 'detached' com: `docker-compose up -d`.
4. Verifique os contêineres ativos com: `docker ps`.
5. Acesse o projeto localmente via `localhost:8080`.
6. Em caso de alterações no código, reinicie os serviços com: `docker-compose up -d`. Um novo build será necessário somente se houver mudanças nas configurações do Docker ou nas dependências que exijam reconstrução do contêiner.

Siga os passos com atenção para assegurar a correta configuração do projeto.

## Como Contribuir
Para contribuir com o RediUX, adote os padrões de commits definidos em [Padrões de Commits](https://github.com/RediUX/Padroes-de-Commits), mantendo a consistência e clareza no histórico de desenvolvimento do projeto.

## Branches
- `main`: A branch principal que mantém o código estável e pronto para produção.
- `developer`: A branch destinada ao desenvolvimento e testes, onde as novas funcionalidades são integradas antes de serem mescladas à `main`.

Contribua para o RediUX e ajude a moldar o futuro do aprendizado em User Experience!