import { useState, useEffect, useCallback } from "react";
import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { deleteContent, getContentList } from "../environment/Api";
import CustomToolbar from "../components/CustomToolBar/CustomToolBar";
import LogoImgSml from "../assets/logo-sml.svg";
import ContentTable from "../components/ContentTable/ContentTable";
import SearchField from "../components/SearchField/SearchField";
import CustomButton from "../components/Buttons/CustomButton";
import RedButton from "../components/Buttons/RedButton";
import ResultadoDaBusca from "../components/ResultadosDaBusca/ResultadoDaBusca";

const ConteudoADM = () => {
    const [conteudos, setConteudos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [originalContents, setOriginalContents] = useState([]);
    const [searchResultTerm, setSearchResultTerm] = useState("");
    const [showSearchResult, setShowSearchResult] = useState(false);

    const fetchContents = useCallback(async () => {
        try {
            const data = await getContentList();
            setConteudos(data);
            setOriginalContents(data);
        } catch (error) {
            console.error("Erro ao buscar os conteúdos: ", error);
        }
    }, []);

    useEffect(() => {
        fetchContents();
    }, [fetchContents]);

    const handleSubmit = () => {
        const trimmedSearch = searchTerm.trim();
        if (!trimmedSearch) return;

        const filteredContents = originalContents.filter(content =>
            content.titulo.toLowerCase().includes(trimmedSearch.toLowerCase()) ||
            content.autor.toLowerCase().includes(trimmedSearch.toLowerCase()) ||
            content.descricao.toLowerCase().includes(trimmedSearch.toLowerCase())
        );

        if (filteredContents.length === 0) {
            alert("Nenhum resultado encontrado.");
            handleClearSearch();
        } else {
            setConteudos(filteredContents);
            setSearchResultTerm(trimmedSearch);
            setShowSearchResult(true);
        }
        setSearchTerm("");
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleClearSearch = () => {
        setSearchTerm("");
        fetchContents();
        setShowSearchResult(false);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Deseja Excluir? " + id)) {
            try {
                await deleteContent(id);
                const updatedContents = conteudos.filter(content => content._id !== id);
                setConteudos(updatedContents);
                setOriginalContents(updatedContents);
            } catch (error) {
                console.error("Erro ao excluir o conteúdo: ", error);
            }
        }
    };

    return (
        <>
            <CustomToolbar isADM>
                <a href="/">
                    <img src={LogoImgSml} height={38} alt="logo-sml" />
                </a>
            </CustomToolbar>

            <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography component="h1" variant="h4" fontWeight={500} mt={10}>
                    Visualizar Conteúdos
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                    <SearchField width={650} value={searchTerm} onChange={handleChange} onSubmit={handleSubmit} />
                    <Link to="/ADM/Cadastrar">
                        <CustomButton
                            text="Cadastrar Conteúdo"
                            backgroundColor="#0C2D8A"
                            hoverBackgroundColor="#BECBEA"
                            color="#BECBEA"
                            hoverColor="#0C2D8A"
                            height={55}
                            mx= {2}
                            px= {2}
                            ml= {1}
                        />
                        
                    </Link>
                </Box>
                {showSearchResult && (
                    <Container sx={{ display: "flex", marginTop: 3, alignItems: "center", justifyContent: "space-between" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <ResultadoDaBusca
                                searchTerm={searchResultTerm}
                            />
                        </Box>

                        <RedButton 
                            text={"LIMPAR BUSCA"}
                            onClick={handleClearSearch}
                        />

                    </Container>
                )}

                <Container sx={{ display: "flex", alignItems: "center", justifyContent: "center", visibility: conteudos.length === 0 ? "hidden" : "visible" }}>
                    <ContentTable contents={conteudos} onDelete={handleDelete} />
                </Container>
            </Container>
        </>
    );
};

export default ConteudoADM;
