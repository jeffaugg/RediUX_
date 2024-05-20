import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import api from '../../environment/Api';
import Header from '../Header/Header';
import BackButton from '../Buttons/BackButton';
import ContentInfo from './ContentInfo';

const ContentADM = () => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [link, setLink] = useState('');
  const [tags, setTags] = useState([]);
  const [midia, setMidia] = useState([]);
  const [imgUrl, setImgUrl] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchConteudo = async () => {
      try {
        const response = await api.getContent(id);
        setTitulo(response.titulo);
        setAutor(response.autor);
        setDescricao(response.descricao);
        setLink(response.link);
        setTags(response.tags || []);
        setMidia(response.midia || []);
        setImgUrl(response.imgUrl);
      } catch (error) {
        console.error('Erro ao buscar conteúdo: ', error);
      }
    };
    fetchConteudo();
  }, [id]);

  return (
    <>
      <Header />
      <div style={{ height: '64px' }} />
      <Container maxWidth="md"> 
        <BackButton />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ContentInfo
              titulo={titulo}
              descricao={descricao}
              autor={autor}
              tags={tags}
              link={link}
            />
          </Grid>
          {imgUrl && (
            <Grid item xs={4}> {/* Adjust image width */}
              <img
                src={imgUrl}
                alt={titulo}
                style={{ width: '100%' }} 
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <Typography variant="subtitle2">Tipo de Mídia:</Typography>
            {midia.map((tipo) => (
              <Typography variant="subtitle2" key={tipo}>
                {tipo}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ContentADM;
