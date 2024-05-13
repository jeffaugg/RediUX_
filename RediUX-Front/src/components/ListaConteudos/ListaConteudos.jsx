import { Button, Box, Container, InputAdornment, TextField, FormControl, InputLabel, Select, MenuItem, Typography, Card, CardMedia, CardContent, CardActions, Chip, Divider, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import folder from "../../assets/folder.svg";
import { ArrowBackIos } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Tollbar from "../ToolbarU/Toolbar";
import { useNavigate } from "react-router-dom";

const ListaConteudos = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const [tag, setTag] = useState('');

    const tagChange = (event) => {
        setTag(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSubmit(event);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const searchTerm = search.trim();
        navigate(`/results?term=${searchTerm}`);
    };

    return (
        <>
            <Tollbar />

            <Container>
                <Typography
                    component="h1"
                    variant="h4"
                    fontWeight={500}
                    mt={10}
                    sx={{
                        color: "#8B8B8"
                    }}
                >
                    Mostrando resultados para:
                    "Pesquisa do Usuário"
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 5,
                    }}
                >

                    <Link to="/">
                        <IconButton
                            sx={{
                                width: 50,
                                height: 50,
                                mr: 1,
                            }}
                        >
                            <ArrowBackIos />
                        </IconButton>
                    </Link>

                    <TextField
                        id="search"
                        type="search"
                        label="Pesquisar Conteúdo"
                        value={search}
                        onChange={handleChange}
                        onKeyDown={handleKeyPress}
                        sx={{ width: 860 }}
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

                    <FormControl variant="outlined">
                        <InputLabel id="demo-simple-select-filled-label">Tags</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={tag}
                            onChange={tagChange}
                            sx={{
                                width: 200,
                                ml: 1,
                            }}
                        >
                            <MenuItem
                                value=""
                            >
                            </MenuItem>
                            <MenuItem value={"Carreira"}>Carreira</MenuItem>
                            <MenuItem value={"FundamentosDeUX"}>Fundamentos de UX</MenuItem>
                            <MenuItem value={"DesignDeInteração"}>Design de Interação</MenuItem>
                            <MenuItem value={"UIDesign"}>UI Design</MenuItem>
                            <MenuItem value={"ArquiteturaDaInformacao"}>Arquitetura da Informação</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Container>
                    <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                            mt: 5,
                            mb: 2,
                        }}>
                        Livros
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            overflow: "auto",
                            mb: 5
                        }}
                    >
                        <Card sx={{ minWidth: 240, mr: 2 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={folder}
                                tittle="Conteúdo"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Título
                                </Typography>
                                <Chip label="Tags" sx={{ backgroundColor: "#BECBEA", color: "0C2D8A", mr: 1, }} />
                                <Chip label="Tags" sx={{ backgroundColor: "#FFB1B1", color: "#BF4040", mr: 1 }} />
                            </CardContent>
                            <CardActions>
                                <Link to="/IDConteudo">
                                    <Button
                                        size="small"
                                        sx={{
                                            backgroundColor: "#0C2D8A",
                                            color: "#BECBEA",
                                            '&:hover': {
                                                backgroundColor: "#BECBEA",
                                                color: "#0C2D8A",
                                            }
                                        }}
                                    >
                                        Visualizar
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Box>
                </Container>

                <Divider />

                <Container>
                    <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                            mt: 5,
                            mb: 2,
                        }}>
                        Artigos
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            overflow: "auto",
                            mb: 5,
                        }}
                    >
                        <Card sx={{ minWidth: 240, mr: 2 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={folder}
                                tittle="Conteúdo"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Título
                                </Typography>
                                <Chip label="Tags" sx={{ backgroundColor: "#BECBEA", color: "0C2D8A", mr: 1 }} />
                                <Chip label="Tags" sx={{ backgroundColor: "#FFB1B1", color: "#BF4040", mr: 1 }} />
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    sx={{
                                        backgroundColor: "#0C2D8A",
                                        color: "#BECBEA",
                                        '&:hover': {
                                            backgroundColor: "#BECBEA",
                                            color: "#0C2D8A",
                                        }
                                    }}
                                >
                                    Visualizar
                                </Button>
                            </CardActions>
                        </Card>
                    </Box>
                </Container>

                <Divider />

                <Container>
                    <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                            mt: 5,
                            mb: 2,
                        }}>
                        Podcasts
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            overflow: "auto",
                            mb: 5,
                        }}
                    >
                        <Card sx={{ minWidth: 240, mr: 2 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={folder}
                                tittle="Conteúdo"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Título
                                </Typography>
                                <Chip label="Tags" sx={{ backgroundColor: "#BECBEA", color: "0C2D8A", mr: 1 }} />
                                <Chip label="Tags" sx={{ backgroundColor: "#FFB1B1", color: "#BF4040", mr: 1 }} />
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    sx={{
                                        backgroundColor: "#0C2D8A",
                                        color: "#BECBEA",
                                        '&:hover': {
                                            backgroundColor: "#BECBEA",
                                            color: "#0C2D8A",
                                        }
                                    }}
                                >
                                    Visualizar
                                </Button>
                            </CardActions>
                        </Card>
                    </Box>
                </Container>

                <Divider />

                <Container>
                    <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                            mt: 5,
                            mb: 2,
                        }}>
                        Vídeos
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            overflow: "auto",
                            mb: 5,
                        }}
                    >
                        <Card sx={{ minWidth: 240, mr: 2 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={folder}
                                tittle="Conteúdo"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Título
                                </Typography>
                                <Chip label="Tags" sx={{ backgroundColor: "#BECBEA", color: "0C2D8A", mr: 1 }} />
                                <Chip label="Tags" sx={{ backgroundColor: "#FFB1B1", color: "#BF4040", mr: 1 }} />
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    sx={{
                                        backgroundColor: "#0C2D8A",
                                        color: "#BECBEA",
                                        '&:hover': {
                                            backgroundColor: "#BECBEA",
                                            color: "#0C2D8A",
                                        }
                                    }}
                                >
                                    Visualizar
                                </Button>
                            </CardActions>
                        </Card>
                    </Box>
                </Container>
            </Container>
        </>
    )
}

export default ListaConteudos