import { FormControl, FormControlLabel, FormGroup, FormLabel, Checkbox, Stack } from "@mui/material";

const CheckBoxSection = ({ legend, options, state, handleChange }) => (
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
            <FormLabel component="legend" sx={{ fontSize: 12, mb: 2 }}>{legend}</FormLabel>
            <FormGroup>
                {options.map((option) => (
                    <FormControlLabel
                        key={option.name}
                        control={<Checkbox checked={state[option.name]} name={option.name} onChange={handleChange} />}
                        label={option.label}
                    />
                ))}
            </FormGroup>
        </FormControl>
    </Stack>
);

export default CheckBoxSection;
