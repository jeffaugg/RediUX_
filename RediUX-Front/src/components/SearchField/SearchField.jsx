import { TextField, InputAdornment, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchField = ({ value, onChange, onKeyDown, onSubmit }) => (
    <TextField
        id="search"
        type="search"
        label="Pesquisar Conteúdo"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        sx={{ width: 600 }}
        InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <Button
                        sx={{ height: 55 }}
                        onClick={onSubmit}
                    >
                        <SearchIcon />
                    </Button>
                </InputAdornment>
            ),
        }}
    />
);

export default SearchField;
