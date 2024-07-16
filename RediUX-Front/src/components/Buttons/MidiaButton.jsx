import React from 'react';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const BUTTON_COLOR = "#BECBEA";
const BUTTON_HOVER_COLOR = "#0C2D8A";

const MidiaButton = ({ to, startIcon, onClick, children }) => (
    <Link to={to}>
        <Button
            variant="contained"
            startIcon={startIcon}
            onClick={onClick}
            sx={{
                boxShadow: "none",
                width: 200,
                margin: 1,
                backgroundColor: BUTTON_COLOR,
                color: BUTTON_HOVER_COLOR,
                '&:hover': {
                    backgroundColor: BUTTON_HOVER_COLOR,
                    color: BUTTON_COLOR,
                    boxShadow: "none"
                }
            }}
        >
            {children}
        </Button>
    </Link>
);

export default MidiaButton;
