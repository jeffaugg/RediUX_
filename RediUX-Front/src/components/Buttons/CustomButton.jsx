import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({
  text, href, size, sx, mt, ml, mb, height, target = "_blank", backgroundColor = "#0C2D8A", hoverBackgroundColor = "#BECBEA",
  color = "white", hoverColor = "#0C2D8A", ...props
}) => {
  return (
    <Button
      variant="outlined"
      size={size}
      sx={{
        height: height, // Ajuste correto da propriedade height
        mt: mt, // Ajuste correto da propriedade mt
        ml: ml, // Ajuste correto da propriedade ml
        mb: mb, // Ajuste correto da propriedade mb
        backgroundColor: backgroundColor, // Ajuste correto da propriedade backgroundColor
        color: color, // Ajuste correto da propriedade color
        borderColor: backgroundColor,
        '&:hover': {
          backgroundColor: hoverBackgroundColor,
          color: hoverColor,
        },
        ...sx, // Aplicar estilos adicionais passados por props
      }}
      href={href}
      target={target}
      {...props} // Aplicar qualquer outra propriedade passada para o botão
    >
      {text}
    </Button>
  );
};

export default CustomButton;
