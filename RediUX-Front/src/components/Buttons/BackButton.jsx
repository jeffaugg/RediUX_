import React from 'react';
import { Box, Button } from '@mui/material';
import { ArrowBackIosNew } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Link to="/ADM/ListaConteudos">
        <Button
          variant="secondary"
          size="medium"
          startIcon={<ArrowBackIosNew />}
          sx={{ mr: 70, color: '#131313' }}
        >
          Voltar
        </Button>
      </Link>
    </Box>
  );
};

export default BackButton;
