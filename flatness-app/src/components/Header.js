import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div id = "nav" >
   <Navbar  bg="dark" variant="dark">
 <Container id = "cont">
  <Navbar.Brand id = "name">Victory</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/workouts">Workouts</Nav.Link>
    <Nav.Link href="/About">Creators</Nav.Link>
    
  </Nav>
</Container>
</Navbar>
    </div>
  );
}

export default Header;
