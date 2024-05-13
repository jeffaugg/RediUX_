import { Button, Toolbar } from "@mui/material";
import Logo from "../../assets/logo-sml.svg";
import { Logout } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Tollbaradm = () => {
  const handleLogout = () => {
    localStorage.removeItem("authData");
    window.location.reload()
  };

    return (
        <Toolbar
            sx={{
                backgroundColor: "#CED4DA",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            
            <a href="/ADM/ListaConteudos">
                <img src={Logo} height={38} alt="logo" />
            </a>

            <Link to="/ADM/Login">
                <Button
                    onClick={handleLogout}
                    variant="outlined"
                    startIcon={<Logout />}
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
                    Logout
                </Button>
            </Link>
        </Toolbar>
    )
}

export default Tollbaradm