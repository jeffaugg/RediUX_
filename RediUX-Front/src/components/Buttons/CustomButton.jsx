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
        height: { height },
        mt: { mt },
        ml: { ml },
        mb: { mb },
        backgroundColor: { backgroundColor },
        color: { color },
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
