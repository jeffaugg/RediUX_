import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const FormButton = ({ loading, onCancelLink, submitText, cancelText = "Cancelar" }) => (
    <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
        <Link to={onCancelLink}>
            <Button
                variant="outlined"
                sx={{
                    mx: 2,
                    color: "#0C2D8A",
                    borderColor: "#0C2D8A",
                }}
            >
                {cancelText}
            </Button>
        </Link>
        <Button
            disabled={loading}
            variant="contained"
            type="submit"
            sx={{
                mx: 2,
                boxShadow: "none",
                backgroundColor: "#0C2D8A",
                color: "#BECBEA",
                '&:hover': {
                    backgroundColor: "#BECBEA",
                    color: "#0C2D8A",
                    boxShadow: "none",
                },
            }}
        >
            {submitText}
        </Button>
    </Box>
);

export default FormButton;