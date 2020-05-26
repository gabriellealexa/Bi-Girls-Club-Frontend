import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

class TopBar extends React.Component {

  render() {
  return (
      
    <div>
     <Navbar fill="true" bg="light" expand="lg">
     <Navbar.Brand href="#home">
      <img
        alt=""
        src="https://shopbigirlsclub.com/wp-content/uploads/2019/05/BGC_PLAINBIG-e1559852736160.png"
        height="30"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto" defaultActiveKey="http://localhost:3000/">
      <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
      <Nav.Link href="http://localhost:3000/hi">Apparel</Nav.Link>
      <Nav.Link href="http://localhost:3000/what">Accessories</Nav.Link>
      <Nav.Link href="http://localhost:3000/what">Lifestyle</Nav.Link>
      <Nav.Link href="http://localhost:3000/sup">Collections</Nav.Link>
      <Nav.Link href="http://localhost:3000/what">About</Nav.Link>
      
      <Nav.Item ><FontAwesomeIcon icon={faShoppingCart} /></Nav.Item>
    </Nav>
  </Navbar.Collapse>
    </Navbar>
   
</div>
  
    )}
  }

export default TopBar;
  
