import React from 'react';
import { Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h4" align="center">RediUX - Repositório Digital de User Experience</Typography>
              <img src="https://raw.githubusercontent.com/RediUX/RediUX/8a699d5e7859c1cd5d53c3a241a5bb358cd431ce/assets/favicon.svg" alt="Logo do RediUX" style={{ display: 'block', margin: '0 auto', width: '100px', height: '100px' }} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Sobre o Projeto</Typography>
          <Typography variant="body1">
            O RediUX é uma aplicação web projetada para o compartilhamento de conteúdo educacional na área de User Experience (UX). Este repositório digital serve como uma plataforma centralizada onde materiais didáticos, como aulas, artigos, postagens e diversos tipos de mídia, são disponibilizados para enriquecer o processo de aprendizagem dos alunos. A iniciativa visa facilitar o acesso a recursos educacionais de qualidade, proporcionando uma experiência de aprendizado mais dinâmica e interativa.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Desenvolvedores e Responsabilidades</Typography>
          <List>
            <ListItem>
              <ListItemText primary="Luiz Eduardo" secondary={<Typography variant="body2">Tech Lead e Desenvolvedor</Typography>} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Lucas Amorim" secondary={<Typography variant="body2">Desenvolvedor</Typography>} />
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Tecnologias Utilizadas</Typography>
          <List>
            <ListItem>
              <ListItemText primary="JavaScript" secondary={<Typography variant="body2">Node.js (BackEnd), React (FrontEnd)</Typography>} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Docker" secondary={<Typography variant="body2">Gerenciamento de Ambientes</Typography>} />
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Como Contribuir</Typography>
          <Typography variant="body1">
            Para contribuir com o RediUX, vá até a página do projeto no GitHub <Link to={{ pathname: 'https://github.com/RediUX_' }} target="_blank">aqui</Link>.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Branches</Typography>
          <List>
            <ListItem>
              <ListItemText primary="main" secondary={<Typography variant="body2">Código estável e pronto para produção</Typography>} />
            </ListItem>
            <ListItem>
              <ListItemText primary="developer" secondary={<Typography variant="body2">Desenvolvimento e testes de novas funcionalidades</Typography>} />
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" align="center">
            Contribua para o RediUX e ajude a moldar o futuro do aprendizado em User Experience!
          </Typography>
          <Typography variant="body1" align="center">
            <Link to={{ pathname: 'https://github.com/RediUX_' }} target="_blank">
              <GitHubIcon color="primary" sx={{ fontSize: '30px', margin: '10px 0' }} />
              RediUX no GitHub
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;