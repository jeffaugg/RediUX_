import { Box, Button, Stack,  Container, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, TextField, Typography } from "@mui/material"
import axios from "axios"
import { ArrowBackIosNew } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Tollbaradm from "../00TollbarADM/TollbarADM"

const Conteudo = () => {

    const [titulo, setTitulo] = useState("")
    const [autor, setAutor] = useState("")
    const [descricao, setDescricao] = useState("")
    const [link, setLink] = useState("")
    const [tags, setTags] = useState({ carreira: false, fundamentosUX: false, designInteracao: false, UI: false, arquitetura: false })
    const [midia, setMidia] = useState({ livro: false, artigo: false, video: false, podcast: false })
    //const [file, setFile] = useState(null)
    const [imgUrl, setImgUrl] = useState([])

    const { carreira, fundamentosUX, designInteracao, UI, arquitetura } = tags
    const { livro, artigo, video, podcast } = midia
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(
        () => {
            axios.get(`http://localhost:3000/contents/retrieve/${id}`)
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

    function handleSubmit(event) {
        event.preventDefault()
        const conteudo = { titulo, autor, descricao, link, tags, midia, imgUrl }
        axios.put(`http://localhost:3000/contents/update/${id}`, conteudo)
            .then(
                (response) => {
                    alert(`Conteúdo  ${response.data._id} atualizado com sucesso!`)
                    navigate("/ADM/ListaConteudos")
                }
            )
            .catch(error => console.log(error))
    }

    function handleCheckBoxTags(event) {
        setTags(
            {
                ...tags,
                [event.target.name]: event.target.checked
            }
        )
    }

    function handleCheckBoxMidia(event) {
        setMidia(
            {
                ...midia,
                [event.target.name]: event.target.checked
            }
        )
    }

    return (
        <>
            <Tollbaradm />

            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
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


                <Typography variant="h4" fontWeight="bold" mt={2}>
                    Editar Conteúdo: {titulo}
                </Typography>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    mt={5}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="titulo"
                        label="Título"
                        name="titulo"
                        onChange={(event) => setTitulo(event.target.value)}
                        value={titulo}
                        sx={{
                            width: 640,
                            my: 2,
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="autor"
                        label="Autor"
                        name="autor"
                        onChange={(event) => setAutor(event.target.value)}
                        value={autor}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="descricao"
                        label="Descrição"
                        name="descricao"
                        onChange={(event) => setDescricao(event.target.value)}
                        value={descricao}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="link"
                        label="Link"
                        name="link"
                        onChange={(event) => setLink(event.target.value)}
                        value={link}
                    />
                    
                    <Stack
                        sx={{
                            width: 640,
                            backgroundColor: "#F0F0F0",
                            borderRadius: 1,
                            borderBottom: 1,
                            borderColor: "#8B8B8B",
                            my: 2,
                        }}
                    >



                    <FormControl sx={{ mt: 2, ml: 2 }} component="fieldset" variant="standard">
                        <FormLabel component="legend" sx={{ fontSize: 12, mb: 2 }}>Tags</FormLabel>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox checked={carreira} name="carreira" onChange={handleCheckBoxTags} />} label="Carreira" />
                            <FormControlLabel control={<Checkbox checked={fundamentosUX} name="fundamentosUX" onChange={handleCheckBoxTags} />} label="Fundamentos de UX" />
                            <FormControlLabel control={<Checkbox checked={designInteracao} name="designInteracao" onChange={handleCheckBoxTags} />} label="Design de Interação" />
                            <FormControlLabel control={<Checkbox checked={UI} name="UI" onChange={handleCheckBoxTags} />} label="UI Design" />
                            <FormControlLabel control={<Checkbox checked={arquitetura} name="arquitetura" onChange={handleCheckBoxTags} />} label="Arquitetura da Informação" />
                        </FormGroup>
                    </FormControl>

                    </Stack>

                    <Stack
                        sx={{
                            width: 640,
                            backgroundColor: "#F0F0F0",
                            borderRadius: 1,
                            borderBottom: 1,
                            borderColor: "#8B8B8B",
                            my: 2,
                        }}
                    >

                    <FormControl sx={{ mt: 2, ml: 2 }} component="fieldset" variant="standard">
                        <FormLabel component="legend" sx={{ fontSize: 12, mb: 2 }}>Tipo de Mídia</FormLabel>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox checked={livro} name="livro" onChange={handleCheckBoxMidia} />} label="Livro" />
                            <FormControlLabel control={<Checkbox checked={artigo} name="artigo" onChange={handleCheckBoxMidia} />} label="Artigo" />
                            <FormControlLabel control={<Checkbox checked={video} name="video" onChange={handleCheckBoxMidia} />} label="Video" />
                            <FormControlLabel control={<Checkbox checked={podcast} name="podcast" onChange={handleCheckBoxMidia} />} label="Podcast" />
                        </FormGroup>
                    </FormControl>

                     </Stack>

                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 2
                    }}>
                        <Link to="/ADM/ListaConteudos">
                            <Button
                                variant="outlined"
                                sx={{
                                    mx: 2,
                                    color: "#0C2D8A",
                                    borderColor: "#0C2D8A",
                                }}
                            >
                                Cancelar
                            </Button>
                        </Link>
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{
                                mb: 2,
                                backgroundColor: "#0C2D8A",
                                color: "#BECBEA",
                                boxShadow: 0,
                                '&:hover': {
                                    backgroundColor: "#BECBEA",
                                    color: "#0C2D8A",
                                    boxShadow: 0,
                                },
                            }}
                        >
                            Atualizar
                        </Button>

                    </Box>
                </Box>
            </Container>
        </>
    )
}
export default Conteudo
