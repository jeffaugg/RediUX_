import {Box} from "@mui/material";

const Logo = ({ src, alt, height }) => (
  <Box
      sx={{
          display: "flex",
          justifyContent: "center",
          margin: 10,
          height: 90
      }}
  >
      <img src={src} alt={alt} height={height}/>
  </Box>
);

export default Logo;
