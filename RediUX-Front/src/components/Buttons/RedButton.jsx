import React from 'react';
import Button from '@mui/material/Button';

const RedButton = ({ onClick, startIcon, text }) => {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      startIcon={ startIcon }
      sx={{
        boxShadow: "none",
        borderColor: "#DC3545",
        color: "#DC3545",
        '&:hover': {
          backgroundColor: "#DC3545",
          borderColor: "#DC3545",
          color: "#F5f5f5",
          boxShadow: "none",
        }
      }}
    >
      {text}
    </Button>
  );
};

export default RedButton;
