import { useContext, useState } from "react";
import { Box, Toolbar, useMediaQuery } from "@mui/material";
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { GlobalStateContext } from "../Login/GlobalStateContext";

import RedButton from "../Buttons/RedButton";
import Logout from '@mui/icons-material/Logout';
import CustomButton from "../Buttons/CustomButton";
import ModalUserAdd from "./ModalUserAdd";

const CustomToolBar = ({ children, isADM }) => {
  const { setGlobalState } = useContext(GlobalStateContext);
  const { globalState } = useContext(GlobalStateContext);
  const [isShowModal, setIsShowModal] = useState(false); 

  const handleLogout = async () => {
    await signOut(auth)
      .then(() => {
        setGlobalState({ ...globalState, isAuth: false });
        localStorage.setItem('isAuth', false);
        window.location.href = "/login";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOpenModal = () => {
    setIsShowModal(true);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <>
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
            width: isSmallScreen ? "100%" : "50%",
          }}
        >
          {children}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: isSmallScreen ? "100%" : "50%",
            gap: 2,
          }}
        >
          {isADM && (
            <>
              <CustomButton 
                onClick={handleOpenModal}
                text={"Adicionar Usuario"}
                height={38}
                mx={2}
                px={2}
                ml={1}
              />
              <RedButton 
                onClick={handleLogout}
                startIcon={<Logout />}
                text={"LOGOUT"}
              /> 
            </>
          )}
        </Box>
      </Toolbar>

      {isShowModal && (
        <ModalUserAdd open={isShowModal} setOpen={setIsShowModal} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default CustomToolBar;
