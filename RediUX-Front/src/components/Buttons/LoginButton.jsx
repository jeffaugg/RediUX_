import { Button } from "@mui/material";
import React from "react";

const LoginButton = ({ handleSubmit }) => {
  return (
    <Button
      onClick={handleSubmit}

      sx={{
        width: 280,
        my: 2,
        backgroundColor: "#0C2D8A",
        color: "#BECBEA",
        boxShadow: "none",
        '&:hover': {
          backgroundColor: "#BECBEA",
          color: "#0C2D8A",
          boxShadow: "none",
        }
      }}
      variant="contained"
    >
      Login
    </Button>
  );
};

export default LoginButton;