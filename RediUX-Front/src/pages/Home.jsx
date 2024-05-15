import { Box, Container, Typography, Divider } from "@mui/material";
import { useState, useEffect, useCallback } from "react";

import Tollbar from "../components/ToolbarU/Toolbar";
import SearchField from "../components/SearchField/SearchField";
import { tags, mediaTypes } from "../constants/Data";
import TagSelector from "../components/TagSelector/TagSelector";
import MediaButtonsContainer from "../components/MediaButtonsContainer/MediaButtonsContainer";
import Logo from "../components/Logo/Logo";
import LogoImg from "../assets/logo.svg";
import NavigationLink from "../components/NavigationLink/NavigationLink";


const Home = () => {
    const [search, setSearch] = useState("");
    const [, setMidia] = useState({
        livro: false, 
        artigo: false, 
        video: false, 
        podcast: false 
    })
    const [tag, setTag] = useState('');
    const handleSetMidia = useCallback((midia) => {
        setMidia(midia);
    }, [setMidia]);

    const handleChange = (event) => {
        setSearch(event.target.value);
    };
      
    const handleSubmit = useCallback((event) => {
        if (event) event.preventDefault();
        const searchTerm = search.trim();
        const url = `/results?term=${searchTerm}&tag=${tag}`;
        window.location.href = url;
    }, [search, tag]);
    
    const tagChange = (event) => {
        setTag(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSubmit(event);
        }
    };

    useEffect(() => {
        if (tag) {
            handleSubmit();
        }
    }, [tag, handleSubmit]);

    return (
        <>
            <Tollbar />

            <Container maxWidth="md" sx={{ mt: 20 }}>
                <Logo src={LogoImg} alt="Logo" height={100} />

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <SearchField
                        value={search}
                        onChange={handleChange}
                        onKeyDown={handleKeyPress}
                        onSubmit={handleSubmit}
                    />

                    <TagSelector
                        value={tag}
                        onChange={tagChange}
                        options={tags}
                    />
                </Box>

                <Divider sx={{ mt: 5 }} />

                <Typography
                    variant="h6"
                    component="h2"
                    sx={{ mt: 5, color: "gray" }}
                >
                    Navegue por Tipo de Mídia
                </Typography>

                <MediaButtonsContainer mediaTypes={mediaTypes} search={search} handleSetMidia={handleSetMidia} />
            </Container>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 25,
                    mb: 5,
                    '& > :not(style)': { m: 2 },
                }}
            >
                <NavigationLink to="/ADM/login">Administração</NavigationLink>
                <NavigationLink to="/about">Sobre</NavigationLink>
            </Box>
        </>
    );
}

export default Home