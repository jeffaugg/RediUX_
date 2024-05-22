import React from 'react';
import { Box, Button } from '@mui/material';
import { ArrowBackIosNew } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const BackButton = ({ sx, text = "Voltar" }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Link to="/ADM/ListaConteudos" style={{ textDecoration: 'none' }}>
        <Button
          variant='secondary'
          size="medium"
          startIcon={<ArrowBackIosNew />}
          sx={{
            color: '#131313',
            height: 55,
            ...sx
          }}
        >
          {text}
        </Button>
      </Link>
    </Box>
  );
};

export default BackButton;
