import {Outlet} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Container from "./Container";
import Section from "./Section";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Section>
        <Container>
          <Outlet />
        </Container>
      </Section>
    </>
  );
};
export default Layout;
