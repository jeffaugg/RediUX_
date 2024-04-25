import { Button, Box, Container, InputAdornment, TextField, Typography, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { Delete, Edit } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import Tollbaradm from "../00TollbarADM/TollbarADM";
import { deleteContent, getContentList } from "../../environment/Api";

const ConteudoADM = () => {

    const [conteudos, setConteudos] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        getContentList()
            .then((data) => {
                setConteudos(data);
            })
            .catch((error) => console.error("Erro ao buscar os conteúdos: ", error));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const searchTerm = search.trim();
        navigate(`/results?term=${searchTerm}`);
    };

    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    function excluirConteudo(id) {
        if (window.confirm("Deseja Excluir? " + id)) {
            deleteContent(id)
                .then(() => {
                    const resultado = conteudos.filter((conteudo) => conteudo._id !== id);
                    setConteudos(resultado);
                })
                .catch((error) => console.error("Erro ao excluir o conteúdo: ", error));
        }
    }

    return (
        <>
            <Tollbaradm />

            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "Center",
                }}
            >
                <Typography
                    component="h1"
                    variant="h4"
                    fontWeight={500}
                    mt={10}
                >
                    Visualizar Conteúdos
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 5,
                    }}
                >
                    <TextField
                        id="search"
                        type="search"
                        label="Pesquisar Conteúdo"
                        value={search}
                        onChange={handleChange}
                        sx={{ width: 650 }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button
                                        sx={{ height: 55 }}
                                        onClick={handleSubmit}
                                    >
                                        <SearchIcon />
                                    </Button>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Link to="/ADM/Cadastrar">
                        <Button
                            size="small"
                            sx={{
                                height: 55,
                                backgroundColor: "#0C2D8A",
                                color: "#BECBEA",
                                '&:hover': {
                                    backgroundColor: "#BECBEA",
                                    color: "#0C2D8A",
                                },
                                mx: 2,
                                px: 2,
                            }}
                        >
                            Cadastrar Conteúdo
                        </Button>
                    </Link>
                </Box>

                <Container
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        my: 5,
                    }}
                >

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Título</TableCell>
                                    <TableCell align="left">Autor</TableCell>
                                    <TableCell align="left">Descrição</TableCell>
                                    {/* <TableCell align="left">URL</TableCell> */}
                                    <TableCell align="left">Editar</TableCell>
                                    <TableCell align="left">Excluir</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {conteudos.map((conteudo) => (
                                    <TableRow
                                        key={conteudo.titulo}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {conteudo.titulo}
                                        </TableCell>
                                        <TableCell align="left">{conteudo.autor}</TableCell>
                                        <TableCell align="left">{conteudo.descricao}</TableCell>
                                        <TableCell align="center">
                                            <Link to={`/ADM/Editar/${conteudo._id}`}>
                                                <IconButton aria-label="editar"><Edit /></IconButton>
                                            </Link>
                                        </TableCell>
                                        <TableCell align="center"><IconButton aria-label="deletar" onClick={() => excluirConteudo(conteudo._id)}><Delete /></IconButton></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </Container>
        </>
    )
}

export default ConteudoADM
