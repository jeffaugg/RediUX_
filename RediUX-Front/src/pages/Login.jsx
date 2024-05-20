import { Container, Box } from "@mui/material";
import Logo from "../assets/logo.svg";
import Ilustracao from "../assets/ilustracao.svg";

import { useGlobalState } from "../components/Login/GlobalStateContext";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

import LoginForm from "../components/Login/LoginForm";
import ResetPasswordButton from "../components/Buttons/ResetPasswordButton";
import LoginButton from "../components/Buttons/LoginButton";

const Login = () => {
  const { setGlobalState, globalState, handleLogin } = useGlobalState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleLogin(email, password); // Use handleLogin from GlobalStateContext
  };

  useEffect(() => {
    // Check if user is already authenticated on load
    if (globalState.isAuth) { // Use isAuth from globalState
      // Handle potential logic for a pre-authenticated user (optional)
    }
  }, [globalState.isAuth]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleResetPassword = (event) => {
    // Handle reset password logic (optional)
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

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
          handleKeyPress={handleKeyPress}
        />

        <ResetPasswordButton handleResetPassword={handleResetPassword} />

        <LoginButton handleSubmit={handleSubmit} />
      </Box>
    </Container>
  );
};

export default Login;
