import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const TopMenu = () => {
  const MyData=useSelector((state)=>state.addCart.cart);
  console.log(MyData)
  const DataCount=MyData.length;
  const navigate= useNavigate();

  const [searchData, setSearchData]= useState("");

  const myCart=()=>{
    navigate("/mycart");
   }
   const handleSearch=()=>{
    navigate(`searchproduct/${searchData}`);
  }
  
    return ( 
        <>
        <marquee style={{backgroundColor:"black",color:"white"}}>
          get free delivery on your first order
        </marquee>
        <div id='topmenu'>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src="https://www.metroshoes.com/images/logo/main-logo.svg"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to ="home">HOME</Nav.Link>
            <Nav.Link as={Link} to ="Service">SERVICES</Nav.Link>
            <Nav.Link as={Link} to ="product">PRODUCTS</Nav.Link>
            <Nav.Link as={Link} to ="shop">SHOP</Nav.Link>
            <Nav.Link as={Link} to ="watch">OFFER</Nav.Link>
            <Nav.Link as={Link} to ="sale">Customer Testomonial</Nav.Link>
            <Nav.Link as={Link} to ="blog">BLOG</Nav.Link>
            
            
           
            <NavDropdown title="CATEGORY" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="kidsProduct">Kids Shoes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="mensProduct">
                Mens Shoes
              </NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="womensProduct">Women Shoes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="prewatches">
               Premium Shoes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link href="#deets">
          <input type="text" value={searchData} onChange={(e)=>{setSearchData(e.target.value)}} />
          </Nav.Link>
          <Nav.Link as={Link} to="searchproduct/:txtdata">
          <IoSearch onClick={handleSearch}/>
            </Nav.Link>
            <Nav.Link href="#deets">
            <a href='#' onClick={myCart}>
            <FaShoppingCart />
            </a>
            {DataCount<=0?"":<span>{DataCount}</span>}
            
            </Nav.Link>
            <Nav.Link  href="#memes">
            <FaUser />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
        </>
     );
}
 
export default TopMenu;