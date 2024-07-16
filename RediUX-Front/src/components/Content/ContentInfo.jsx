import React, { useEffect, useState } from 'react';
import { Box, Card, CardMedia, CardContent, Chip, Stack, Typography, Link as MuiLink } from '@mui/material';
import { InsertLink, List } from '@mui/icons-material';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import api from '../../environment/Api';
import { midiaTypes } from '../../constants/Data';
import folder from '../../assets/folder.svg';

const ContentInfo = () => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [link, setLink] = useState('');
  const [conteudoTags, setConteudoTags] = useState([]);
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
        
        const allTags = response.tags ? Object.keys(response.tags).filter((tag) => response.tags[tag]) : []; 
        setConteudoTags(allTags);

        const mediaTypes = midiaTypes.filter((type) => response.midia[type.type]);
        const mediaLabels = mediaTypes.map((type) => type.label); 

        setMidia(mediaLabels);

        setImgUrl(response.imgUrl);
      } catch (error) {
        console.error('Erro ao buscar conteúdo:', error);
      }
    };
    fetchConteudo();
  }, [id]);

  return (
    <Container>
      <div className="card-wrapper">
        <div style={{ 
          height: '64px', 
          alignItems: 'center'}} 
        />
        <Card style={{ width: '600px' }}>
          <CardMedia 
            component="img" 
            image={imgUrl || folder} 
            alt="Capa do Conteúdo" 
            sx={{ height: 300 }} 
          />
          <CardContent>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="h5">{titulo}</Typography>
              {link && (
                <MuiLink 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <InsertLink />
                </MuiLink>
              )}
            </Stack>
            <Typography 
              variant="body2" 
              color="text.secondary" 
              gutterBottom
            >
              por {autor}
            </Typography>
            <Typography 
              variant="body1"
            >
              {descricao}
            </Typography>

            <Stack 
              direction="row" 
              spacing={1} 
              mt={2}
            >
              <Typography 
                variant="subtitle2" 
                alignSelf="center"
              >
                Mídia:
              </Typography> 
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  flexGrow: 1 }}
              >
                {midia.map((mediaType, index) => (
                  <Chip 
                    key={mediaType} 
                    label={mediaType} 
                    icon={<List />} 
                    style={{ marginRight: index !== midia.length - 1 ? 8 : 0 }} 
                  />
                ))}
              </Box>
            </Stack>

            <Stack 
              direction="row" 
              spacing={1} 
              mt={2}
            >
              <Typography 
                variant="subtitle2" 
                alignSelf="center"
              >
                Tags:
              </Typography> 
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  flexGrow: 1 }}
              >
                {conteudoTags.map((tag, index) => (
                  <Chip 
                    key={tag} 
                    label={tag} 
                    style={{ marginRight: index !== conteudoTags.length - 1 ? 8 : 0 }} 
                  /> 
                ))}
              </Box>
            </Stack>

          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default ContentInfo;
