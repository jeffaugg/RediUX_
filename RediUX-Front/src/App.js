import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import Login from "./pages/Login";
import ListaConteudosADM from "./components/ListaADM/ListaConteudosADM";

import Cadastrar from "./pages/Cadastrar";
import Editar from "./pages/Editar";
import ResultadosPesquisas from "./pages/ResultadosPesquisas"
import ResetPassword from "./components/ResetPassword/ResetPassword";
import { useGlobalState } from "./components/Login/GlobalStateContext";
import About from "./pages/About";
import ContentADM from "./pages/ContentADM";
import Favicon from "../src/components/Favicon/Favicon";

function App() {

  const { globalState } = useGlobalState();
  const { isAuth } = globalState;

  return (
    <div className="App">
    <Favicon />

    <Routes>
      <Route element={<Home />} path="/" exact />

      <Route element={<About />} path="/about" />

      <Route element={<Login />} path="/login" />

      <Route element={<ResetPassword />} path="/reset-password" />

      <Route
        path="/ADM/Login"
        element={isAuth ? (<Navigate to="/ADM/ListaConteudos" />) : (<Login />)}
      />
      
      <Route
        path="/ADM/ListaConteudos"
        element={isAuth ? <ListaConteudosADM /> : <Login />}
      />

      <Route
          path="/ADM/Conteudo/:id"
          element={isAuth ? <ContentADM /> : <Login />} 
      />

      <Route 
        path="/ADM/Cadastrar"
        element={isAuth ? <Cadastrar /> : <Login />}
      />
      
      <Route
      path="/ADM/Editar/:id"
      element={isAuth ? <Editar /> : <Login />}
      />

      <Route element={<ResultadosPesquisas />} path="/results" />
    </Routes>
    </div>
  );
}

export default App;
