import React from "react";
import { Typography, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const ResultadoDaBusca = ({ searchTerm, sx }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={sx}
    >
      <SearchIcon
        sx={{
          color: "#6C757D",
          mr: 1,
          fontSize: 35,
        }}
      />
      <Typography
        component="h1"
        variant="h4"
        fontWeight={500}
        sx={{
          color: "#6C757D",
        }}
      >
        Resultado da busca: "{searchTerm}"
      </Typography>
    </Box>
  );
};

export default ResultadoDaBusca;
