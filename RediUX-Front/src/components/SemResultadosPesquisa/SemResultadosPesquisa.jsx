import React from "react";
import { Container, Typography, Stack } from "@mui/material";
import erroimagem from "../../assets/Search engines-bro.svg";

const SemResultadosPesquisa = () => {
  return (
    <Container
      display="flex"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 2,
      }}
    >
      <img src={erroimagem} alt="" height={400} />
      <Stack
        display="flex"
        flexDirection={"Column"}
      >
        <Typography variant="h3" component="div" fontWeight={500}> Que Pena! </Typography>
        <Typography variant="h5" component="div" sx={{ mt: 2 }}> Infelizmente ainda<br /> não temos este conteúdo</Typography>
      </Stack>
    </Container>
  );
};

export default SemResultadosPesquisa;