import { Container, Grid, Typography } from '@mui/material';
import ContentInfo from '../components/Content/ContentInfo';

import CustomToolBar from '../components/CustomToolBar/CustomToolBar';
import BackButton from '../components/Buttons/BackButton';

const ContentADM = () => {

  return (
    <>
      <CustomToolBar isADM>
        <BackButton /> 
      </CustomToolBar>

      <div style={{ height: '64px' }} />
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">Informações do Conteúdo</Typography>
            <Grid container justifyContent="center">
              <Grid item> 
                <ContentInfo />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ContentADM;
