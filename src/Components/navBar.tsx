import { Box, Button } from "@mui/material";
import styled from "styled-components";
import StyledLink from "../styled";

const BoxOne = styled(Box)`
  display: flex;
  justify-content: right;
  padding-right: 30px;
`;

const NavBar = () => {
  return (
    <BoxOne sx={{ bgcolor: "#6ee7b7", height: "50px" }}>
      <StyledLink to="/">
        <Button variant="text" sx={{ color: "black", paddingTop: "15px" }}>
          Search
        </Button>
      </StyledLink>
      <StyledLink to="/favorites">
        <Button variant="text" sx={{ color: "black", paddingTop: "15px" }}>
          Favorites
        </Button>
      </StyledLink>
    </BoxOne>
  );
};

export default NavBar;
