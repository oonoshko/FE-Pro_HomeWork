// import logo from "./logo.svg";
import "./App.css";
import { Header, Main, SectionBlog, SectionNews } from "./components";
import styled from "styled-components";

function App() {
  return (
    <AppWrapper className="App">
      <Container className="container">
        <Header />
        <Main />
        <DownSection className="downSection">
          <SectionBlog />
          <SectionNews />
        </DownSection>
      </Container>
    </AppWrapper>
  );
}
const AppWrapper = styled.div({
  height: "100vh",
});
const Container = styled.div({
  width: "100%",
  maxWidth: "1209px",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "1rem",
  paddingRight: "1rem",
});
const DownSection = styled.div({
  display: "flex",
  gap: "67px",
});

export default App;
