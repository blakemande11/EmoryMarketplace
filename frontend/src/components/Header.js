import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <>
        <br />
        <Navbar bg="primary" variant="dark" collapseOnSEelect>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Emory Exchange</Navbar.Brand>
            </LinkContainer>
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link href="/">Home</Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to="/cart"> */}
              {/* <Nav.Link href="/cart">
                Cart <i className="fas fa-shopping-cart"></i>
              </Nav.Link> */}
              {/* </LinkContainer> */}
              <LinkContainer to="/login">
                <Nav.Link>
                  Login <i className="fas fa-user"></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signup">
                <Nav.Link>
                  Sign Up <i className="fa-solid fa-user-plus"></i>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Container>
        </Navbar>
      </>
    </header>
  );
};

export default Header;
