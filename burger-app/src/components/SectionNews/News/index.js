import styled from "styled-components";
import NewsItem from "./NewsItems";

const News = () => {
  return (
    <NewsStyled>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </NewsStyled>
  );
};

const NewsStyled = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "9px",
});

export default News;
