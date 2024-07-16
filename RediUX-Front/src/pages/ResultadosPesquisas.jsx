import React, { useState, useEffect, useCallback } from "react";
import { Box, Container } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import SearchField from "../components/SearchField/SearchField";
import TagSelector from "../components/TagSelector/TagSelector";
import CustomToolbar from "../components/CustomToolBar/CustomToolBar";
import ResultadoDaBusca from "../components/ResultadosDaBusca/ResultadoDaBusca";
import { searchContent } from "../environment/Api";
import { tags } from "../constants/Data";
import LogoImgSml from "../assets/logo-sml.svg";
import ResultadoItem from "../components/ResultadoItem/ResultadoItem";
import SemResultadosPesquisa from "../components/SemResultadosPesquisa/SemResultadosPesquisa";
import Loading from "../components/Loading/Loading";
import BackButton from "../components/Buttons/BackButton";

const ResultadosPesquisas = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("term");
  const searchMedia = queryParams.get("media");
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const results = await searchContent(searchTerm, searchMedia);
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm, searchMedia]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const searchTerm = search.trim();
    if (searchTerm) {
      const url = `/results?term=${searchTerm}`;
      navigate(url);
    }
  }, [search, navigate]);

  const tagChange = (event) => {
    setTag(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm, searchMedia, fetchData]);

  return (
    <>
      <CustomToolbar>
        <a href="/">
          <img src={LogoImgSml} height={38} alt="logo-sml" />
        </a>
      </CustomToolbar>

      <Container>
        <Box
          display="flex"
          alignItems="center"
          sx={{
            mt: 5,
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <BackButton
            text=""
          />

          <SearchField
            value={search}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            width="100%"
          />

          <TagSelector
            value={tag}
            onChange={tagChange}
            options={tags}
          />
        </Box>

        <ResultadoDaBusca
          searchTerm={searchTerm}
          searchResults={searchResults}
          sx={{
            mt: 5,
            ml: 8,
            display: "flex",
            justifyContent: "flex-start",
          }}
        />

        <Container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            mb: 10,
            alignItens: "center",
            justifyContent: "center",
          }}
        >
          {isLoading ? (
            <Loading />
          ) : searchResults.length > 0 ? (
            <>
              {searchResults.map((result) => (
                <ResultadoItem key={result._id} result={result} />
              ))}
            </>
          ) : (
            <SemResultadosPesquisa />
          )}
        </Container>
      </Container>
    </>
  );
};

export default ResultadosPesquisas;