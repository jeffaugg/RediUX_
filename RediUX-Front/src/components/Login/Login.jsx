import { Container, Box } from "@mui/material"
import Logo from "../../assets/logo.svg"
import Ilustracao from "../../assets/ilustracao.svg"

import { useGlobalState } from "./GlobalStateContext";
import { useState } from "react"

import LoginForm from "./LoginForm";
import ResetPasswordButton from "../Buttons/ResetPasswordButton";
import LoginButton from "../Buttons/LoginButton";

const Login = () => {
  const { setGlobalState } = useGlobalState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setGlobalState({
      user: email,
      password: password,
      isAuth: true,
    });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleResetPassword = (event) => {
    setGlobalState({
      user: email,
      password: 123,
      isAuth: true,
    });
  };


  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  }

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 10,
      }}
    >
      <Box>
        <img
          src={Ilustracao}
          alt="Ilustração"
          width={500}
        />
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
        <img
          src={Logo}
          alt="Logo"
          height={75}
        />

        <LoginForm
          handleUserChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleKeyPress={handleKeyPress}
        />

        <ResetPasswordButton handleResetPassword={handleResetPassword} />

        <LoginButton handleSubmit={handleSubmit} />
        
      </Box>
    </Container>
  );
};

export default Login;
