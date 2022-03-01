import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <>
        <br />
        <Navbar bg="primary" variant="dark" collapseOnSEelect>
          <Container>
            <Navbar.Brand href="/">Emory Exchange</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/cart">
                Cart <i className="fas fa-shopping-cart"></i>
              </Nav.Link>
              <Nav.Link href="/login">
                Login <i className="fas fa-user"></i>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </header>
  );
};

export default Header;
