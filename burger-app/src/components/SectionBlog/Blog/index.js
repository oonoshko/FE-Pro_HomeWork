import styled from "styled-components";
import BlogItem from "./BlogItems";

const Blog = () => {
  return (
    <BlogStyled>
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </BlogStyled>
  );
};

const BlogStyled = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "27px",
});

export default Blog;
