import styled from "styled-components";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <MenuStyled>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
    </MenuStyled>
  );
};

const MenuStyled = styled.ul({
  display: "flex",
  listStyle: "none",
  gap: "19px",
});

export default Menu;
