import styled from "styled-components";
import Blog from "./Blog";

const SectionBlog = () => {
  return (
    <SectionBlogStyled>
      <BlogTitleStyled>Blog</BlogTitleStyled>
      <Blog />
    </SectionBlogStyled>
  );
};

const SectionBlogStyled = styled.div({
  backgroundColor: "#d9d9d9",
  padding: "17px 26px 24px 25px",
});
const BlogTitleStyled = styled.h2({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "15px",
  paddingBottom: "15px",
  textAlign: "center",
});
export default SectionBlog;
