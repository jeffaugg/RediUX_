import { Box, Chip, Container, Button, Typography, Stack } from "@mui/material";
import { InsertDriveFileOutlined, InsertLink, List, PersonOutline, ArrowBackIosNew } from "@mui/icons-material";
import folder from "./folder.svg"
import { Link } from "react-router-dom";
import Tollbaradm from "../00TollbarADM/TollbarADM";
import axios from "axios";
import { useEffect } from "react"
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const ConteudoADM = () => {

    const [titulo, setTitulo] = useState("")
    const [autor, setAutor] = useState("")
    const [descricao, setDescricao] = useState("")
    const [link, setLink] = useState("")
    const [tags, setTags] = useState({ carreira: false, fundamentosUX: false, designInteracao: false, UI: false, arquitetura: false })
    const [midia, setMidia] = useState({ livro: false, artigo: false, video: false, podcast: false })
    const [imgUrl, setImgUrl] = useState([])

    const { carreira, fundamentosUX, designInteracao, UI, arquitetura } = tags
    const { livro, artigo, video, podcast } = midia
    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(
        () => {
            axios.get(`https://rediux-back-hheo.onrender.com/contents/retrieve/${id}`)
                .then(
                    (response) => {
                        setTitulo(response.data.titulo)
                        setAutor(response.data.autor)
                        setDescricao(response.data.descricao)
                        setLink(response.data.link)
                        setTags(response.data.tags)
                        setMidia(response.data.midia)
                        setImgUrl(response.data.imgUrl)
                    }
                )
                .catch(error => console.log(error))
        }
        ,
        []
    )



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
