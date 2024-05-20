import React from "react";
import { Box, Card, CardMedia, CardContent, CardActions, Button, Chip, Typography, Stack } from "@mui/material";
import { Book } from "@mui/icons-material";
import folder from "../../assets/folder.svg";


const ResultadoItem = ({ result }) => {
  const LocalizarMidia = (listaMidia) => {
    for (var index in listaMidia) {
      if (listaMidia[index] === true) {
        return index;
      }
    }
  };

  return (
    <Box
      key={result._id}
      sx={{
        display: "flex",
        alignItems: "flex-start",
        my: 5,
        ml: 8,
        width: "400px",
      }}
    >
      <Card sx={{ mr: 2, height: "400px", display: "flex", flexDirection: "column", width: "100%" }}>
        <div
          style={{
            width: "100%",
            backgroundColor: "#becbeb",
          }}
        >
          <CardMedia
            sx={{
              height: 120,
              width: result.imgUrl !== undefined && result.imgUrl !== null ? 'auto' : 80,
              backgroundSize: result.imgUrl !== undefined && result.imgUrl !== null ? '100%' : '90%',
              margin: 'auto',
            }}
            image={result.imgUrl || folder}
            title={result.titulo}
          />
        </div>
        <CardContent
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <Typography variant="h6" component="div"> {result.titulo} </Typography>
            <Chip variant="outlined" size="small" icon={<Book />} sx={{ mr: 1 }} label={LocalizarMidia(result.midia)} />
          </Stack>
          <Typography variant="body1" component="div"> {result.descricao} </Typography>
        </CardContent>
        <CardActions
          sx={{
            mt: "auto",
          }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{
              mt: -1,
              ml: 1,
              mb: 1,
              color: "#0C2D8A",
              borderColor: "#0C2D8A",
              '&:hover': {
                backgroundColor: "#0C2D8A",
                color: "#BECBEA",
              },
            }}
            href={result.link}
            target="_blank"
          >
            Ir ao conteúdo
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ResultadoItem;
