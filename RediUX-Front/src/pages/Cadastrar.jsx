import Tollbaradm from "../components/TollbarADM/TollbarADM"
import { Box, Button, Container, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, TextField, Typography, Stack } from "@mui/material"
import { MuiFileInput } from "mui-file-input"
import { ArrowBackIosNew } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { imageDb } from "../firebase"
import { getDownloadURL, listAll, ref, uploadBytes } from "@firebase/storage"
import { v4 } from "uuid"
import { createContent } from "../environment/Api";

const Cadastrar = () => {

    const [titulo, setTitulo] = useState("")
    const [autor, setAutor] = useState("")
    const [descricao, setDescricao] = useState("")
    const [link, setLink] = useState("")
    const [tags, setTags] = useState({ carreira: false, fundamentosUX: false, designInteracao: false, UI: false, arquitetura: false })
    const [midia, setMidia] = useState({ livro: false, artigo: false, video: false, podcast: false })

    const { carreira, fundamentosUX, designInteracao, UI, arquitetura } = tags
    const { livro, artigo, video, podcast } = midia

    const [file, setFile] = useState(null)
    const [, setImgUrl] = useState(null)
    const [loadingImage, setLoadingImage] = useState(false);

    const handleChange = (newFile) => {
        setFile(newFile);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const selectedTags = Object.values(tags);
        const atLeastOneTagSelected = selectedTags.includes(true);

        const selectedMedia = Object.values(midia);
        const atLeastOneMediaSelected = selectedMedia.includes(true);

        if (!atLeastOneTagSelected) {
            alert("Selecione pelo menos uma tag.");
            return;
        }

        if (!atLeastOneMediaSelected) {
            alert("Selecione pelo menos uma mídia.");
            return;
        }

        if (file) {

            const imgRef = ref(imageDb, `files/${v4()}`);

            try {
                setLoadingImage(true);
                await uploadBytes(imgRef, file);
                const url = await getDownloadURL(imgRef);
                setImgUrl(url);
                const conteudo = { titulo, autor, descricao, link, tags, midia, imgUrl: url };
                await createContent(conteudo);

                alert("Conteúdo " + titulo + " adicionado com sucesso!");
                console.log(conteudo);
                navigate("/ADM/ListaConteudos");
            } catch (error) {
                console.error("Erro ao enviar o arquivo ou cadastrar conteúdo: ", error);
            } finally {
                setLoadingImage(false);
            }
        } else {
            alert("Por favor, selecione uma imagem para a capa do conteúdo.");
            console.error("Nenhum arquivo selecionado para upload");
        }
    };

    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;

        listAll(ref(imageDb, "files"))
            .then((imgs) => {
                if (isMounted) {
                    const promises = imgs.items.map((val) => getDownloadURL(val))
                    Promise.all(promises)
                        .then((urls) => {
                            setImgUrl(urls);
                        })
                }
            })
            .catch((error) => {
                console.error("Erro ao listar as imagens: ", error);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    const handleCheckBoxTags = (event) => {
        setTags({
            ...tags,
            [event.target.name]: event.target.checked,
        });
    };

    const handleCheckBoxMidia = (event) => {
        setMidia({
            ...midia,
            [event.target.name]: event.target.checked,
        });
    };

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
                    Cadastrar Conteúdo
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
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="descricao"
                        label="Descrição"
                        name="Descricao"
                        onChange={(event) => setDescricao(event.target.value)}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="link"
                        label="Link"
                        name="link"
                        onChange={(event) => setLink(event.target.value)}
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
                        <FormControl sx={{ mt: 2, ml: 2 }} component="fieldset" variant="standard" required>
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
                        <FormControl sx={{ mt: 2, ml: 2 }} component="fieldset" variant="standard" required>
                            <FormLabel component="legend" sx={{ fontSize: 12, mb: 2 }}>Tipo de Mídia</FormLabel>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox checked={livro} name="livro" onChange={handleCheckBoxMidia} />} label="Livro" />
                                <FormControlLabel control={<Checkbox checked={artigo} name="artigo" onChange={handleCheckBoxMidia} />} label="Artigo" />
                                <FormControlLabel control={<Checkbox checked={video} name="video" onChange={handleCheckBoxMidia} />} label="Video" />
                                <FormControlLabel control={<Checkbox checked={podcast} name="podcast" onChange={handleCheckBoxMidia} />} label="Podcast" />
                            </FormGroup>
                        </FormControl>
                    </Stack>

                    <MuiFileInput
                        value={file}
                        onChange={handleChange}
                        placeholder="Adicionar Capa do Conteúdo"
                        sx={{
                            width: 640,
                            my: 2,
                            backgroundColor: "#f0f0f0",
                        }}
                        inputProps={{
                            accept: "image/*", // Aceita qualquer extensão de imagem
                        }}
                    />

                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        my: 2
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
                            disabled={loadingImage}
                            variant="contained"
                            type="submit"
                            sx={{
                                mx: 2,
                                boxShadow: "none",
                                backgroundColor: "#0C2D8A",
                                color: "#BECBEA",
                                '&:hover': {
                                    backgroundColor: "#BECBEA",
                                    color: "#0C2D8A",
                                    boxShadow: "none"
                                },
                            }}
                        >
                            Cadastrar
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}
export default Cadastrar
