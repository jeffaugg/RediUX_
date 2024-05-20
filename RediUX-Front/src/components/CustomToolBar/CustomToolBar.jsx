import { Box, Toolbar, Button, useMediaQuery } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useContext } from "react";
import { GlobalStateContext } from "../Login/GlobalStateContext";

const CustomToolBar = ({ children, isADM }) => {
  const { setGlobalState } = useContext(GlobalStateContext);
  const { globalState } = useContext(GlobalStateContext);

  const handleLogout = async () => {
    await signOut(auth)
      .then(() => {
        setGlobalState({ ...globalState, isAuth: false });
        localStorage.setItem('isAuth', false);
        window.location.href = "/ADM/Login";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Toolbar
      sx={{
        backgroundColor: "#CED4DA",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: isSmallScreen? "100%" : "50%",
        }}
      >
        {children}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: isSmallScreen? "100%" : "50%",
        }}
      >
        {isADM && (
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
        )}
      </Box>
    </Toolbar>
  );
};

export default CustomToolBar;
