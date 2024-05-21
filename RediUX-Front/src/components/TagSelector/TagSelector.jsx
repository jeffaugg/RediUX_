import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const TagSelector = ({ value, onChange, options }) => (
    <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-filled-label">Tags</InputLabel>
        <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={value}
            onChange={onChange}
            sx={{
                width: 200,
                ml: 1,
            }}
        >
            <MenuItem value="" />
            {options.map((option, index) => (
                <MenuItem key={index} value={option}>{option}</MenuItem>
            ))}
        </Select>
    </FormControl>
);

export default TagSelector;