import { Box, Container, Typography } from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { imageDb } from "../config/firebase";
import { getDownloadURL, ref, uploadBytes, listAll } from "@firebase/storage";
import { v4 } from "uuid";
import { createContent } from "../environment/Api";
import CustomToolBar from "../components/CustomToolBar/CustomToolBar";
import LogoImgSml from "../assets/logo-sml.svg";
import FormSection from "../components/FormSection/FormSection";
import CheckBoxSection from "../components/CheckBoxSection/CheckBoxSection";
import FormButton from "../components/FormButton/FormButton";
import BackButton from "../components/Buttons/BackButton"

const Cadastrar = () => {
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [descricao, setDescricao] = useState("");
    const [link, setLink] = useState("");
    const [tags, setTags] = useState({ carreira: false, fundamentosUX: false, designInteracao: false, UI: false, arquitetura: false });
    const [midia, setMidia] = useState({ livro: false, artigo: false, video: false, podcast: false });
    const [file, setFile] = useState(null);
    const [, setImgUrl] = useState(null);
    const [loadingImage, setLoadingImage] = useState(false);
    const navigate = useNavigate();

    const handleChange = (newFile) => setFile(newFile);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const selectedTags = Object.values(tags).includes(true);
        const selectedMedia = Object.values(midia).includes(true);

        if (!selectedTags) {
            alert("Selecione pelo menos uma tag.");
            return;
        }

        if (!selectedMedia) {
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
                alert(`Conteúdo ${titulo} adicionado com sucesso!`);
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

    useEffect(() => {
        let isMounted = true;
        listAll(ref(imageDb, "files")).then((imgs) => {
            if (isMounted) {
                const promises = imgs.items.map((val) => getDownloadURL(val));
                Promise.all(promises).then((urls) => setImgUrl(urls));
            }
        }).catch((error) => console.error("Erro ao listar as imagens: ", error));

        return () => { isMounted = false; };
    }, []);

    const handleCheckBoxTags = (event) => setTags({ ...tags, [event.target.name]: event.target.checked });
    const handleCheckBoxMidia = (event) => setMidia({ ...midia, [event.target.name]: event.target.checked });

    return (
        <>
            <CustomToolBar isADM>
                <a href="/"><img src={LogoImgSml} height={38} alt="logo-sml" /></a>
            </CustomToolBar>
            <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link to="/ADM/ListaConteudos">
                    <BackButton sx={{ mr: 70, mt: 5}}/>
                </Link>
                <Typography variant="h4" fontWeight="bold" mt={2}>Cadastrar Conteúdo</Typography>
                <Box component="form" onSubmit={handleSubmit} mt={5} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <FormSection label="Título" name="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    <FormSection label="Autor" name="autor" value={autor} onChange={(e) => setAutor(e.target.value)} />
                    <FormSection label="Descrição" name="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                    <FormSection label="Link" name="link" value={link} onChange={(e) => setLink(e.target.value)} />
                    <CheckBoxSection legend="Tags" options={[{name: 'carreira', label: 'Carreira'}, {name: 'fundamentosUX', label: 'Fundamentos de UX'}, {name: 'designInteracao', label: 'Design de Interação'}, {name: 'UI', label: 'UI Design'}, {name: 'arquitetura', label: 'Arquitetura da Informação'}]} state={tags} handleChange={handleCheckBoxTags} />
                    <CheckBoxSection legend="Tipo de Mídia" options={[{name: 'livro', label: 'Livro'}, {name: 'artigo', label: 'Artigo'}, {name: 'video', label: 'Video'}, {name: 'podcast', label: 'Podcast'}]} state={midia} handleChange={handleCheckBoxMidia} />
                    <MuiFileInput value={file} onChange={handleChange} placeholder="Adicionar Capa do Conteúdo" sx={{ width: 640, my: 2, backgroundColor: "#f0f0f0" }} inputProps={{ accept: "image/*" }} />
                    <FormButton loading={loadingImage} onCancelLink="/ADM/ListaConteudos" submitText="Cadastrar" />
                </Box>
            </Container>
        </>
    );
};

export default Cadastrar;