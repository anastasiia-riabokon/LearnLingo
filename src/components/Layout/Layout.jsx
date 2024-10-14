import {Outlet} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Container from "./Container";
import Section from "./Section";

const Layout = () => {
  return (
    <Container>
      <NavBar />
      <Section>
        <Outlet />
      </Section>
    </Container>
  );
};
export default Layout;
