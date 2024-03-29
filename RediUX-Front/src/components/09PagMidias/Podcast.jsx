import { Button, Box, Container, InputAdornment, TextField, FormControl, InputLabel, Select, MenuItem, Typography, Card, CardMedia, CardContent, CardActions, Chip, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import folder from "./folder.png"
import { ArrowBackIos } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Tollbar from "../00ToolbarU/Toolbar";

const Podcast = () => {
    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const [tag, setTag] = useState('');

    const tagChange = (event) => {
        setTag(event.target.value);
    };

    return (
        <>
            <Tollbar />
            <Container>
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
                        sx={{ width: 860 }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button
                                        sx={{ height: 55 }}
                                    >
                                        <SearchIcon />
                                    </Button>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <FormControl vairant="primary">
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
                        Podcasts
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            overflow: "auto",
                            mb: 5,
                            pb: 2,
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

export default Podcast