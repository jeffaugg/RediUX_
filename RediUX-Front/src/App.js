import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ListaConteudos from "./components/ListaConteudos/ListaConteudos";
import Livro from "./components/PagMidias/Livro";
import Artigo from "./components/PagMidias/Artigo";
import Podcast from "./components/PagMidias/Podcast";
import Video from "./components/PagMidias/Video";

import Login from "./components/Login/Login";
import ListaConteudosADM from "./components/ListaADM/ListaConteudosADM";
import ConteudoADM from "./components/ConteudoADM/ConteudoADM";
import Cadastrar from "./pages/Cadastrar";
import Editar from "./pages/Editar";
import ResultadosPesquisas from "./components/ResultadosPesquisa/ResultadosPesquisas"
import ResetPassword from "./components/ResetPassword/ResetPassword";
import { useGlobalState } from "./components/Login/GlobalStateContext";
import About from "./pages/About";

function App() {

  const { globalState } = useGlobalState();
  const { isAuth } = globalState;

  return (
    <Routes>
      <Route element={<Home />} path="/" exact />
      <Route element={<ListaConteudos />} path="/Pesquisa" />
      <Route element={<Livro />} path="/Livros" />
      <Route element={<Artigo />} path="/Artigos" />
      <Route element={<Podcast />} path="/Podcasts" />
      <Route element={<Video />} path="/Videos" />
      <Route element={<About />} path="/about" />

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
        element={isAuth ? <ConteudoADM /> : <Login />}
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
  );
}

export default App;
