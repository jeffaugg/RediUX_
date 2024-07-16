import { Container, Box } from "@mui/material";
import Logo from "../assets/logo.svg";
import Ilustracao from "../assets/ilustracao.svg";

import { useGlobalState } from "../components/Login/GlobalStateContext";
import { useState, useEffect } from "react";

import LoginForm from "../components/Login/LoginForm";
import LoginButton from "../components/Buttons/LoginButton";
import NavigationLink from "../components/NavigationLink/NavigationLink";
import CustomToolBar from "../components/CustomToolBar/CustomToolBar";
import BackButton from "../components/Buttons/BackButton";

const Login = () => {
  const { setGlobalState, globalState, handleLogin } = useGlobalState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleLogin(email, password);
  };

  useEffect(() => {
    if (globalState.isAuth && !localStorage.getItem('isAuth')) {
      setGlobalState({...globalState, isAuth: false });
    }
  }, [globalState, globalState.isAuth, setGlobalState]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
  <>

    <CustomToolBar>
      <BackButton/>
    </CustomToolBar>

    <Container
      sx={{
        paddingTop: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 10,
      }}
    >
        <Box>
          <img src={Ilustracao} alt="Ilustração" width={500} />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#E9ECEF",
            padding: 6,
            borderRadius: 2,
          }}
        >
          <img src={Logo} alt="Logo" height={75} />

          <LoginForm
            handleUserChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}
            handleKeyPress={handleKeyPress} />

          <NavigationLink
            to={"/reset-password"}
            children={"Esqueci minha senha"} />

          <LoginButton handleSubmit={handleSubmit} />
        </Box>
      </Container>
    </>
  );
};

export default Login;