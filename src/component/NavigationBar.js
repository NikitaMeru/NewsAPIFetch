import { Component } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export class NavigationBar extends Component{
    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">News App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to={'/'}>
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>
           
            <LinkContainer to={'/top-headlines'}>
            <Nav.Link >Top Headlines</Nav.Link>
            </LinkContainer>
           
            <LinkContainer to={'/all-news'}>
            <Nav.Link>All News</Nav.Link>
            </LinkContainer>

            
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </div>
        );
    }
}