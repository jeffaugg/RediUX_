import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ text, href, target = "_blank", ...props }) => {
  return (
    <Button
      variant="outlined"
      size="small"
      sx={{
        mt: -1,
        ml: 1,
        mb: 1,
        color: "#0C2D8A",
        borderColor: "#0C2D8A",
        '&:hover': {
          backgroundColor: "#0C2D8A",
          color: "#BECBEA",
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
