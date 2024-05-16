import {Box} from "@mui/material";
import MidiaButton from "../Buttons/MidiaButton";

const MidiaButtonsContainer = ({ midiaTypes, search, handleSetMidia }) => (
  <Box
      sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
      }}
  >
      {midiaTypes.map(({ type, icon, label }) => (
          <MidiaButton to={`/results?term=${search}&media=${type}`} startIcon={icon} onClick={() => handleSetMidia(type)}>
              {label}
          </MidiaButton>
      ))}
  </Box>
);

export default MidiaButtonsContainer;
