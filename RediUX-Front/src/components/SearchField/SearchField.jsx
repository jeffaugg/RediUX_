import { TextField, InputAdornment, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchField = ({ value, onChange, onKeyDown, onSubmit, width }) => {
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSubmit();
        }
        if (onKeyDown) {
            onKeyDown(event);
        }
    };

    return (
        <TextField
            id="search"
            type="search"
            label="Pesquisar Conteúdo"
            value={value}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            sx={{ width: width }}
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
};

export default SearchField;