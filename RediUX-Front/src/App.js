import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ListaConteudos from "./components/ListaConteudos/ListaConteudos";
import Conteudo from "./components/Conteudo/Conteudo";
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
  const { estaAutenticado } = globalState;

  return (
    <Routes>
      <Route element={<Home />} path="/" exact />
      <Route element={<ListaConteudos />} path="/Pesquisa" />
      <Route element={<Conteudo />} path="/Conteudo" />
      <Route element={<Livro />} path="/Livros" />
      <Route element={<Artigo />} path="/Artigos" />
      <Route element={<Podcast />} path="/Podcasts" />
      <Route element={<Video />} path="/Videos" />
      <Route element={<About />} path="/about" />

      <Route element={<ResetPassword />} path="/reset-password" />

      <Route
        path="/ADM/Login"
        element={estaAutenticado ? (<Navigate to="/ADM/ListaConteudos" />) : (<Login />)}
      />
      <Route
        path="/ADM/ListaConteudos"
        element={estaAutenticado ? <ListaConteudosADM /> : <Login />}
      />

      <Route
        path="/ADM/Conteudo/:id"
        element={estaAutenticado ? <ConteudoADM /> : <Login />}
      />
      <Route 
        path="/ADM/Cadastrar"
        element={estaAutenticado ? <Cadastrar /> : <Login />}
      />
      <Route
      path="/ADM/Editar/:id"
      element={estaAutenticado ? <Editar /> : <Login />}
      />

      <Route element={<ResultadosPesquisas />} path="/results" />
    </Routes>
  );
}

export default App;
