import React from 'react';
import { Box, Button } from '@mui/material';
import { ArrowBackIosNew } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ sx, text = "Voltar", to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button
          variant='secondary'
          size="medium"
          startIcon={<ArrowBackIosNew />}
          sx={{
            color: '#131313',
            height: 55,
            ...sx
          }}
          onClick={handleClick}
        >
          {text}
        </Button>
    </Box>
  );
};

export default BackButton;
