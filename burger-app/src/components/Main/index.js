import styled from "styled-components";

const Main = () => {
  return <MainWrapper>Full-width banner image</MainWrapper>;
};

const MainWrapper = styled.div({
  backgroundColor: "#d9d9d9",
  textAlign: "center",
  padding: "64px 0 66px 0",
  marginBottom: "24px",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "15px",
});

export default Main;
