import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Tollbar from "../00ToolbarU/Toolbar";
import { Container, Typography, Button, Box, TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem, Card, CardMedia, CardContent, Chip, CardActions, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { ArrowBackIosNew, Book } from "@mui/icons-material";
import folder from "./folder2.svg"
import erroimagem from "./Search engines-bro.svg"



const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("term");
  const searchMedia = queryParams.get("media");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/contents/search?term=${searchTerm}&media=${searchMedia}`)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchTerm, searchMedia]);



  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = search.trim();
    if (searchTerm) {
      const url = `/results?term=${searchTerm}`;
      window.location.href = url;
    }
  };

  const [tag, setTag] = useState('');
  const tagChange = (event) => {
    setTag(event.target.value);
  };

  
  const LocalizarMidia = (listaMidia) => {
    for(var index in listaMidia) { 
      if(listaMidia[index] === true){
        return index
      }
    }
  }
  console.log(searchResults);

  return (
    <>
      <Tollbar />
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
          <Link to="/">
            <Button
              variant="secondary"
              size="medium"
              startIcon={<ArrowBackIosNew />}
              sx={{
                color: "#131313",
                height: 55,
              }}
            />
          </Link>

          <TextField
            id="search"
            type="search"
            label="Pesquisar Conteúdo"
            value={search}
            onChange={handleChange}
            sx={{
              width: "100%"
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Link to="/Pesquisa">
                    <Button
                      sx={{ height: 55 }}
                      onClick={handleSubmit}
                    >
                      <SearchIcon />
                    </Button>
                  </Link>
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

        <Box
          display="flex"
          alignItems="center"
          sx={{
            mt: 5,
            ml: 8,
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <SearchIcon
            sx={{
              color: "#6C757D",
              mr: 1,
              fontSize: 35,
            }}
          />
          <Typography
            component="h1"
            variant="h4"
            fontWeight={500}
            sx={{
              color: "#6C757D"
            }}
          >
            Resultado da busca: "{searchTerm}"
          </Typography>
        </Box>
      </Container>

      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          mb: 10,
          alignItens: "center",
          justifyContent: "center",
        }}
      >
        {searchResults.length > 0 ? (
          <>
            {searchResults.map((result) =>  (
              
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  my: 5,
                  ml: 8,
                  width:"400px"
                  
                }}
              >
                <Card key={result._id} sx={{ mr: 2, height:"400px",display:"flex",flexDirection: "column",width: "100%" }}>
                <div
                    style={{
                      width:'100%',
                      backgroundColor: '#becbeb'
                    }}
                  >
                  <CardMedia
                    sx={{
                      height: 120,
                      width: result.imgUrl !== undefined && result.imgUrl !== null ? 'auto' : 80,
                      backgroundSize: result.imgUrl !== undefined && result.imgUrl !== null ? '100%' : '90%',
                      margin:'auto'
                    }}
                    image={result.imgUrl || folder}
                    title={result.titulo}
                  />
                  </div>
                  <CardContent
                    key={result._id}
                    sx={{
                      width: "100%",
                      display:"flex",
                      flexDirection: "column",
                      boxSizing: "border-box"
                    }}
                  >
                    <Stack
                      
                      direction="row"
                      spacing={2}
                      sx={{
                        display:"flex",
                        alignItems: "start",
                        justifyContent:"space-between",
                        marginBottom:"10px"
                      }}
                    >
                      <Typography variant="h6" component="div" > {result.titulo} </Typography>
                      <Chip variant="outlined" size="small" icon={<Book />} sx={{ mr: 1 }} 
                        label={LocalizarMidia(result.midia)
                        }
                      />
                      
                    </Stack>
                    <Typography variant="p" component="div"> {result.descricao} </Typography>
                    
                  </CardContent>
                  
                  <CardActions  
                    sx={{
                        mt: "auto"
                      }}>
                    <Link to= {result.link}  target="_blank">
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        mt: -1,
                        ml: 1,
                        mb: 1,
                        color: "#0C2D8A",
                        borderColor: "#0C2D8A",
                        '&:hover': {
                          backgroundColor: "#0C2D8A",
                          color: "#BECBEA",
                        },
                      }}
                    >
                      Ir ao conteúdo
                    </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </>
        ) : (
          <Container
            display="flex"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 2,
            }}
          >
            <img src={erroimagem} alt="" height={400} />
            <Stack
              display="flex"
              flexDirection={"Column"}
            >
              <Typography variant="h3" component="div" fontWeight={500}> Que Pena! </Typography>
              <Typography variant="h5" component="div" sx={{ mt: 2 }}> Infelizmente ainda<br /> não temos este conteúdo</Typography>
            </Stack>

          </Container>
        )}
      </Container>

      {/* {searchResults.length > 0 ? (
        <>
          {searchResults.map((result) => (
            <li key={result._id}>{result.titulo}</li>
          ))}
        </>
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )} */}
    </>
  );
};

export default SearchResults;
