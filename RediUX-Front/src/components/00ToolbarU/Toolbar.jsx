import { Box, Toolbar} from "@mui/material";
import Logo from "./logo-sml.svg";

const Tollbar = () => {
    return (
        <Toolbar
            sx={{
                backgroundColor: "#CED4DA"
            }}
        >
            <Box>
                <a href="/">
                    <img src={Logo} height={38} alt="logo"/>
                </a>
            </Box>
        </Toolbar>
    )
}

export default Tollbar