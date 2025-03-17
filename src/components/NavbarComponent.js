import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'; // Helps with React Router Links
import './css/navbar.css';
import logo from './img/homepage (38).webp';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { InputAdornment, TextField } from '@mui/material';
import { SearchIcon } from 'lucide-react';


function NavbarComponent() {
    // State to track the active link
    const [activeLink, setActiveLink] = useState('/'); // Default to Home
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = (link) => {
        setActiveLink(link); // Set the clicked link as active
        // console.log(`Clicked on ${link}`); // Log the clicked link
    };

    return (
        <>
            <Helmet>
                <link rel='icon' href={logo} type='image/webp' />
            </Helmet>
            {/* Upper Info Strip */}
            <div className="container-fluid upperStrip d-flex align-items-center">
                <Row className="w-100 align-items-center">
                    {/* Left Side: Email and Phone Number */}
                    <Col xs={9} md={6} className="d-flex justify-content-center justify-content-md-start align-items-center mb-2 mb-md-0">
                        <p className="mb-0 me-3" style={{ fontSize: '14px' }}>info@panavbiotech.com</p>
                        <p className="mb-0" style={{ fontSize: '14px' }}>011-47563428</p>
                    </Col>

                    {/* Right Side: Social Media Icons */}
                    <Col xs={3} md={6} className="d-flex justify-content-center justify-content-md-end align-items-center">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-4">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-4">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                            <i className="bi bi-twitter"></i>
                        </a>
                    </Col>
                </Row>

            </div>

            {/* Navbar Section */}
            <Navbar className='navbar-cutom' bg="white" variant="light" expand="lg" sticky="top">
                <Container>
                    {/* Brand Logo */}
                    <Navbar.Brand href="/">
                        <img
                            src={logo} // Replace with actual logo path
                            alt="Panav Biotech Logo"
                            className="d-inline-block align-top custom-loggo"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle
                        aria-controls="navbar-nav"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <i className={`bi ${isOpen ? "bi-x" : "bi-list"} text-black`}></i>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbar-nav" className='navbar-nav-links'>
                        <Nav className="ms-auto">
                            {/* Navigation Links */}
                            <LinkContainer to="/" onClick={() => handleLinkClick('/')}>
                                <Nav.Link className={`navLink-custom ${activeLink === '/' ? 'active-link' : ''}`}>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/our-company" onClick={() => handleLinkClick('/our-company')}>
                                <Nav.Link className={`navLink-custom ${activeLink === '/our-company' ? 'active-link' : ''}`}>Our Company</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/products" onClick={() => handleLinkClick('/products')}>
                                <Nav.Link className={`navLink-custom ${activeLink === '/products' ? 'active-link' : ''}`}>Products</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/blogs" onClick={() => handleLinkClick('/blogs')}>
                                <Nav.Link className={`navLink-custom ${activeLink === '/blogs' ? 'active-link' : ''}`}>Blogs</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/events" onClick={() => handleLinkClick('/events')}>
                                <Nav.Link className={`navLink-custom ${activeLink === '/events' ? 'active-link' : ''}`}>Events</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact" onClick={() => handleLinkClick('/contact')}>
                                <Nav.Link className={`navLink-custom ${activeLink === '/contact' ? 'active-link' : ''}`}>Contact Us</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/research-and-innovation" onClick={() => handleLinkClick('/research-and-innovation')}>
                                <Nav.Link className={`navLink-custom ${activeLink === '/research-and-innovation' ? 'active-link' : ''}`}>Research & Innovation</Nav.Link>
                            </LinkContainer>

                            {/* hre make the search bar with srarching icon inside the riht side s   */}
                            {/* <LinkContainer  > */}
                            <TextField
                                placeholder="Search.."
                                variant="outlined"
                                size="small"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    width: 200, // Adjust width as needed
                                    backgroundColor: "white",
                                    borderRadius: 1,
                                }}
                            />
                            {/* </LinkContainer> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;
