import React from 'react';

const About = () => {
  return (
    <div>
      <p align="center">
        <img src="https://raw.githubusercontent.com/RediUX/RediUX/8a699d5e7859c1cd5d53c3a241a5bb358cd431ce/assets/favicon.svg" alt="Logo do RediUX" />
      </p>
      <h1>RediUX - Repositório Digital de User Experience</h1>

      <h2>Sobre o Projeto</h2>
      <p>
        O RediUX é uma aplicação web projetada para o compartilhamento de conteúdo educacional na área de User Experience (UX). Este repositório digital serve como uma plataforma centralizada onde materiais didáticos, como aulas, artigos, postagens e diversos tipos de mídia, são disponibilizados para enriquecer o processo de aprendizagem dos alunos. A iniciativa visa facilitar o acesso a recursos educacionais de qualidade, proporcionando uma experiência de aprendizado mais dinâmica e interativa.
      </p>

      <h2>Desenvolvedores e Responsabilidades</h2>
      <ul>
        <li>
          <strong><a href="https://github.com/Luiz-Eduardo-BL">Luiz Eduardo</a></strong>: Como Tech Lead e Desenvolvedor, Luiz Eduardo é o principal responsável pela condução técnica do projeto, garantindo as melhores práticas de desenvolvimento e a integração eficiente entre a equipe.
        </li>
        <li>
          <strong><a href="https://linkedin.com/in/lxcasamorim">Lucas Amorim</a></strong>: Atuando como Desenvolvedor, Lucas Amorim desempenha um papel crucial na implementação de funcionalidades, colaborando ativamente no ciclo de vida do desenvolvimento de software.
        </li>
      </ul>

      <h2>Tecnologias Utilizadas</h2>
      <ul>
        <li><strong>JavaScript</strong>: A espinha dorsal do desenvolvimento do RediUX, com Node.js empregado no BackEnd e React no FrontEnd, proporcionando uma experiência de usuário fluida e responsiva.</li>
        <li><strong>Docker</strong>: Essencial para a criação e gerenciamento dos ambientes de desenvolvimento e produção, garantindo consistência e eficiência operacional.</li>
      </ul>

      <h2>Como Contribuir</h2>
      <p>Para contribuir com o RediUX, vá até a página do projeto no GitHub <a href="https://github.com/RediUX_">aqui</a>.</p>

      <h2>Branches</h2>
      <ul>
        <li><strong>main</strong>: A branch principal que mantém o código estável e pronto para produção.</li>
        <li><strong>developer</strong>: A branch destinada ao desenvolvimento e testes, onde as novas funcionalidades são integradas antes de serem mescladas à <code>main</code>.</li>
      </ul>

      <p>Contribua para o RediUX e ajude a moldar o futuro do aprendizado em User Experience!</p>
    </div>
  );
};

export default About;
