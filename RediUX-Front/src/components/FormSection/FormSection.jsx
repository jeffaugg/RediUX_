import { TextField } from "@mui/material";

const FormSection = ({ label, name, value, onChange, required = true, fullWidth = true }) => (
    <TextField
        margin="normal"
        required={required}
        fullWidth={fullWidth}
        id={name}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        sx={{
            width: 640,
            my: 2,
        }}
    />
);

export default FormSection;