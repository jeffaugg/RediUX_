import { Container, Box, Button, TextField } from "@mui/material"
import Logo from "./logo.svg"
import Ilustracao from "./ilustracao.svg"
import {signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { useGlobalState } from "./GlobalStateContext"
import { useEffect } from "react"

const Login = () => {
    const { globalState, setGlobalState } = useGlobalState();
    const { user, password } = globalState;
  
    const handleUserChange = (e) => {
      const newUser = e.target.value;
      setGlobalState((prevGlobalState) => ({
        ...prevGlobalState,
        user: newUser,
      }));
    };
  
    const handlePasswordChange = (e) => {
      const newPassword = e.target.value;
      setGlobalState((prevGlobalState) => ({
        ...prevGlobalState,
        password: newPassword,
      }));
    };

    const saveAuthToLocalStorage = (authData) => {
        localStorage.setItem("authData", JSON.stringify(authData));
      };
      
      
      const getAuthFromLocalStorage = () => {
        const authData = localStorage.getItem("authData");
        return authData ? JSON.parse(authData) : null;
      };
  
      const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, user, password)
          .then((userCredential) => {
            const authData = {
              user: userCredential.user,
            };
            setGlobalState((prevGlobalState) => ({
              ...prevGlobalState,
              estaAutenticado: true,
            }));
            saveAuthToLocalStorage(authData); 
          })
          .catch((error) => {
            setGlobalState((prevGlobalState) => ({
              ...prevGlobalState,
              estaAutenticado: false,
            }));
            alert("Usuário ou senha inválidos");
          });
      };
      
      useEffect(() => {
        const authData = getAuthFromLocalStorage();
        if (authData) {
          setGlobalState((prevGlobalState) => ({
            ...prevGlobalState,
            estaAutenticado: true,
          }));
        }
      }, []);

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

                <TextField
                    required
                    fullWidth
                    margin="normal"
                    autoFocus

                    label="Nome de Usuário"
                    id="username"
                    name="username"
                    type="username"
                    value={user}
                    onChange={handleUserChange}
                />

                <TextField
                    required
                    fullWidth
                    margin="normal"

                    label="Senha"
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />

                <Button
                    onClick={() => window.location.href = "/reset-password"}
                >
                    Esqueci minha senha
                </Button>

                <Button
                    onClick={signIn}

                    sx={{
                        width: 280,
                        my: 2,
                        backgroundColor: "#0C2D8A",
                        color: "#BECBEA",
                        boxShadow: "none",
                        '&:hover': {
                            backgroundColor: "#BECBEA",
                            color: "#0C2D8A",
                            boxShadow: "none",
                        }
                    }}
                    variant="contained"
                >
                    Login
                </Button>
            </Box>
        </Container>
    )
}
export default Login
