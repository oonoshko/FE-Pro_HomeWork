import styled from "styled-components";
import News from "./News";

const SectionNews = () => {
  return (
    <SectionNewsStyled>
      <NewsTitleStyled>News</NewsTitleStyled>
      <News />
    </SectionNewsStyled>
  );
};

const SectionNewsStyled = styled.div({
  backgroundColor: "#d9d9d9",
  padding: "17px 28px 29px 25px",
});
const NewsTitleStyled = styled.h2({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "15px",
  paddingBottom: "15px",
  textAlign: "center",
});
export default SectionNews;
