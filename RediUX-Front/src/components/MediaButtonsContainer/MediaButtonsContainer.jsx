import {Box} from "@mui/material";
import MediaButton from "../MediaButton/MediaButton";

const MediaButtonsContainer = ({ mediaTypes, search, handleSetMidia }) => (
  <Box
      sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
      }}
  >
      {mediaTypes.map(({ type, icon, label }) => (
          <MediaButton to={`/results?term=${search}&media=${type}`} startIcon={icon} onClick={() => handleSetMidia(type)}>
              {label}
          </MediaButton>
      ))}
  </Box>
);

export default MediaButtonsContainer;
