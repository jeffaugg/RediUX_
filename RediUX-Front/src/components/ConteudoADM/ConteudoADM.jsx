import { Box, Chip, Container, Button, Typography, Stack } from "@mui/material";
import { InsertDriveFileOutlined, InsertLink, List, PersonOutline, ArrowBackIosNew } from "@mui/icons-material";
import folder from "../../assets/folder.svg"
import { Link } from "react-router-dom";
import Tollbaradm from "../TollbarADM/TollbarADM";
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../environment/Api";

const ConteudoADM = () => {

    const [titulo, setTitulo] = useState("")
    const [autor, setAutor] = useState("")
    const [descricao, setDescricao] = useState("")
    const [link, setLink] = useState("")
    const [, setTags] = useState({ carreira: false, fundamentosUX: false, designInteracao: false, UI: false, arquitetura: false })
    const [, setMidia] = useState({ livro: false, artigo: false, video: false, podcast: false })
    const [, setImgUrl] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchConteudo = async () => {
            try {
                const response = await api.getContent(id);
                setTitulo(response.titulo);
                setAutor(response.autor);
                setDescricao(response.descricao);
                setLink(response.link);
                setTags(response.tags);
                setMidia(response.midia);
                setImgUrl(response.imgUrl);
            } catch (error) {
                console.error("Erro ao buscar conteúdo: ", error);
            }
        };
        fetchConteudo();
    }, [id]);

    return (
        <>
            <Tollbaradm />

            <Container>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "left",
                        mt: 5,
                    }}
                >

                    <Link to="/ADM/ListaConteudos">
                        <Button
                            variant="secondary"
                            size="medium"
                            startIcon={<ArrowBackIosNew />}
                            sx={{
                                mr: 70,
                                mt: 5,
                                color: "#131313"
                            }}
                        >
                            Voltar
                        </Button>
                    </Link>
                </Box>

                <Container
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Box>
                        <Stack
                            mt={5}
                        >
                            <Typography variant="h6" component="h1" color="#0C2D8A">
                                {titulo}
                            </Typography>
                            <Typography variant="subtitle1" component="h2">
                                {descricao}
                            </Typography>
                        </Stack>

                        <Stack
                            direction="row"
                            spacing={1}
                            mt={2}
                            mb={2}
                        >
                            <PersonOutline />
                            <Typography variant="body1" component="body1" fontWeight={500}>
                                Autor: {autor}
                            </Typography>
                            <Typography variant="body1" component="body1">
                            
                            </Typography>
                        </Stack>

                        <Stack
                            direction="row"
                            spacing={1}
                            mb={2}
                        >
                            <List />
                            <Typography variant="body1" component="body1" fontWeight={500}>
                                Tags:
                            </Typography>
                            <Chip label="Tags" sx={{ backgroundColor: "#BECBEA", color: "0C2D8A", height: "auto" }} />
                            <Chip label="Tags" sx={{ backgroundColor: "#FFB1B1", color: "#BF4040", height: "auto" }} />
                        </Stack>
                        <Stack
                            direction="row"
                            spacing={1}
                            mb={2}
                        >
                            <InsertDriveFileOutlined />
                            <Typography variant="body1" component="body1" fontWeight={500}>
                                Mídia:
                            </Typography>
                            <Typography variant="body1" component="body1">
                                Artigo
                            </Typography>
                        </Stack>
                        <Stack
                            direction="row"
                            spacing={1}
                        >
                            <InsertLink />
                            <Typography variant="body1" component="body1" fontWeight={500}>
                                Link:
                            </Typography>
                            <Link href= {link} ml={1}>Ir para o conteúdo</Link>
                        </Stack>
                    </Box>
                    <Box mt={5} ml={5}>
                        <img
                            src={folder}
                            alt="Capa do Conteúdo"
                            height={240}
                        />
                    </Box>
                </Container>
            </Container >
        </>
    )
}

export default ConteudoADM
