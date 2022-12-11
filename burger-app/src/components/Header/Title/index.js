import styled from "styled-components";

const Title = () => {
  return <TitleStyled>Blog name</TitleStyled>;
};

const TitleStyled = styled.h1({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "15px",
  marginLeft: "115px",
});

export default Title;
