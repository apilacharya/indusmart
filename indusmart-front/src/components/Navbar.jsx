import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FaShoppingCart } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
const NavbarComponent = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userData"));

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name_asc");
  const [products, setProducts] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    window.location.href = "/login"; // Redirect to login page after logout
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
    applySearchSort(products, value, sortBy);
  };

  const handleSort = (value) => {
    setSortBy(value);
    applySearchSort(products, searchQuery, value);
  };

  const applySearchSort = (products, searchQuery, sortBy) => {
    let filteredProducts = products;
    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (sortBy === "price_asc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price_desc") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name_asc") {
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name_desc") {
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
    setProducts(filteredProducts);
  };

  return (
    <Navbar expand='lg' className='py-0 bg-black'>
      <Container className='bg-black'>
        {/* Logo */}

        <p
          role='button'
          className='fs-4 fw-fw-semibold text-white cursor-pointer'
          onClick={() => navigate("/")}
        >
          IndustroMart
        </p>

        {/* Toggler */}
        <Navbar.Toggle aria-controls='navbarNav'>
          <RxHamburgerMenu size={30} className='text-white' />
        </Navbar.Toggle>

        {/* Navbar Collapse */}
        <Navbar.Collapse id='navbarNav'>
          <Nav className='ms-auto d-flex align-items-center gap-4'>
            {/* Cart Icon */}

            <Nav.Link>
              <Link
                to='/products'
                className='text-decoration-none text-white fs-5'
              >
                Products
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to='/contact-us'
                className='text-decoration-none text-white fs-5'
              >
                Contact
              </Link>
            </Nav.Link>

            {/* User Dropdown */}
            {user ? (
              <NavDropdown
                title={`Hello, ${user.username.toUpperCase()}`}
                className='btn btn-sm btn-light py-0 text-xs'
              >
                <NavDropdown.Item as={Link} to='/orderlist'>
                  Orders
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/address'>
                  Address
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/cart'>
                  Cart
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout} as={Link} to='/login'>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Link to='/login'>
                <Button variant='light'>Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
