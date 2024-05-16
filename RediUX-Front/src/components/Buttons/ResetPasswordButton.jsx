import { Button } from "@mui/material";
import React from "react";

const ResetPasswordButton = () => {
  return (
    <Button
      onClick={() => window.location.href = "/reset-password"}
    >
      Esqueci minha senha
    </Button>
  );
};

export default ResetPasswordButton;