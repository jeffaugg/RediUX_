import { 
    Button, Box, Container, InputAdornment, TextField, Typography, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton 
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { deleteContent, getContentList } from "../../environment/Api";
import CustomToolBar from "../CustomToolBar/CustomToolBar";
import LogoImgSml from "../../assets/logo-sml.svg";

const ConteudoADM = () => {

    const [conteudos, setConteudos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [originalContents, setoriginalContents] = useState([]);
    const [, setSearchPerformed] = useState(false);
    const [searchResultTerm, setSearchResultTerm] = useState("");
    const [showSearchResult, setShowSearchResult] = useState(false);

    useEffect(() => {
        handleClearSearch();
    }, []);

    const handleSubmit = () => {
        const trimmedSearch = searchTerm.trim();

        if (trimmedSearch === "") {
            return;
        }

        const filteredConteudos = originalContents.filter(conteudo =>
            conteudo.titulo.toLowerCase().includes(trimmedSearch.toLowerCase()) ||
            conteudo.autor.toLowerCase().includes(trimmedSearch.toLowerCase()) ||
            conteudo.descricao.toLowerCase().includes(trimmedSearch.toLowerCase())
        );
        setConteudos(filteredConteudos);

        if (filteredConteudos.length === 0) {
            alert("Nenhum resultado encontrado.");
            handleClearSearch();
        }
        setSearchTerm("")
        setSearchResultTerm(trimmedSearch);
        setSearchPerformed(true);
        setShowSearchResult(filteredConteudos.length > 0);
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleClearSearch = () => {
        setSearchTerm("");
        getContentList()
            .then((data) => {
                setConteudos(data);
                setoriginalContents(data);
            })
            .catch((error) => console.error("Erro ao buscar os conteúdos: ", error));
        setShowSearchResult(false);
    };


    function excluirConteudo(id) {
        if (window.confirm("Deseja Excluir? " + id)) {
            deleteContent(id)
                .then(() => {
                    const resultado = conteudos.filter((conteudo) => conteudo._id !== id);
                    setConteudos(resultado);
                    setoriginalContents(resultado);
                })
                .catch((error) => console.error("Erro ao excluir o conteúdo: ", error));
        }
    }

    return (
        <>
            <CustomToolBar isADM>
                <a href="/">
                    <img src={LogoImgSml} height={38} alt="logo-sml" />
                </a>
            </CustomToolBar>

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
                        value={searchTerm}
                        onChange={handleChange}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                handleSubmit();
                            }
                        }}
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

                {showSearchResult && (
                    <Container
                        sx={{
                            display: "flex",
                            marginTop: 3,
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <SearchIcon
                                sx={{
                                    color: "#6C757D",
                                    mr: 1,
                                    fontSize: 35,
                                }}
                            />
                            <Typography
                                component="h1"
                                variant="h4"
                                fontWeight={500}
                                sx={{
                                    color: "#6C757D",
                                }}
                            >
                                Resultado da busca: "{searchResultTerm}"
                            </Typography>
                        </Box>
                        <Button
                            variant="outlined"
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
                            onClick={handleClearSearch}
                        >
                            Limpar Busca
                        </Button>
                    </Container>
                )}

                <Container
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        visibility: conteudos.length === 0 ? "hidden" : "visible",
                    }}
                >
                    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Título</TableCell>
                                    <TableCell align="left">Autor</TableCell>
                                    <TableCell align="left">Descrição</TableCell>
                                    <TableCell align="left">Editar</TableCell>
                                    <TableCell align="left">Excluir</TableCell>
                                    <TableCell align="left">Visualizar</TableCell>
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

                                        <TableCell align="center">
                                            <IconButton aria-label="deletar" onClick={() => excluirConteudo(conteudo._id)}><Delete /></IconButton></TableCell>

                                        <TableCell align="center">
                                            <Link to={`/ADM/Conteudo/${conteudo._id}`}>
                                                <IconButton aria-label="visualizar"><Visibility /></IconButton>
                                            </Link>
                                        </TableCell>

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

export default ConteudoADM;