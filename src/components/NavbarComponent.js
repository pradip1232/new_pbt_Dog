import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'; // Helps with React Router Links
import './css/navbar.css';
import logo from './img/homepage (38).webp';
import { Helmet } from 'react-helmet';
import { useState } from 'react';

function NavbarComponent() {
    // State to track the active link
    const [activeLink, setActiveLink] = useState('/'); // Default to Home

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
                <div className="row w-100">
                    {/* Left Side: Email and Phone Number */}
                    <div className="col-md-6 d-flex align-items-center">
                        <p className="mb-0 me-3" style={{ fontSize: '14px' }}>info@panavbiotech.com</p>
                        <p className="mb-0" style={{ fontSize: '14px' }}>011-47563428</p>
                    </div>

                    {/* Right Side: Social Media Icons */}
                    <div className="col-md-6 d-flex justify-content-end align-items-center">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white me-2"
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white me-2"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
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

                    <Navbar.Toggle aria-controls="navbar-nav" />
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
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;
