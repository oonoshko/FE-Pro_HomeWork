import styled from "styled-components";
import Logo from "./Logo";
import Menu from "./Menu";
import Title from "./Title";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Title />
      <Menu />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div({
  backgroundColor: "#d9d9d9",
  textAlign: "center",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "19px",
  padding: "6px 28px 5px 26px",
});

export default Header;
