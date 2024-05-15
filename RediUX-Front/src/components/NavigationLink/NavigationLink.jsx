import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const NavigationLink = ({ to, children }) => (
  <Link to={to}>
      <Button>
          {children}
      </Button>
  </Link>
);

export default NavigationLink;
