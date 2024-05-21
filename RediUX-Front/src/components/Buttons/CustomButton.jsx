import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({
  text,
  href,
  target = "_blank",
  backgroundColor = "#0C2D8A",
  hoverBackgroundColor = "#BECBEA",
  color = "white",
  hoverColor = "#0C2D8A",
  ...props
}) => {
  return (
    <Button
      variant="outlined"
      size="small"
      sx={{
        mt: -1,
        ml: 1,
        mb: 1,
        backgroundColor,
        color,
        borderColor: backgroundColor, 
        '&:hover': {
          backgroundColor: hoverBackgroundColor,
          color: hoverColor,
        },
        ...props,
      }}
      href={href}
      target={target}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
