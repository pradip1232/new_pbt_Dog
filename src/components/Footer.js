import React from 'react';
import './css/Footer.css'; // Import your custom CSS
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ff from './img/HOMEPAGE/homepage (2).png'; // Import logo image

const Footer = () => {
    return (
        <footer className="footer bg-white">
            <Container fluid className="">
                <Row className="newsletter-section d-flex justify-content-center align-items-center  mb-4 p-0">
                    <Col md={4} className="text-center text-md-start">
                        <h5 className="newsletter-title">
                            SUBSCRIBE TO OUR <strong>NEWSLETTER</strong>
                        </h5>
                    </Col>
                    <Col md={8} lg={8} className="newsletter ">
                        <Form className="d-flex flex-wrap gap-2">
                            <Form.Control
                                type="text"
                                placeholder="your name"
                                className="flex-grow-1"
                            />
                            <Form.Control
                                type="email"
                                placeholder="your mail"
                                className="flex-grow-1"
                            />
                            <Button variant="primary">SUBSCRIBE</Button>
                        </Form>
                    </Col>
                </Row>

                <Row className="align-items-center">
                    {/* Logo Section */}
                    <Col md={6} className="p-3 text-center text-md-start footer-img-colmn">
                        <div className="logo">
                            <img
                                src={ff}
                                alt="Panav Bio-Tech Logo"
                                className="logo-img"
                            />
                        </div>
                    </Col>

                    {/* Contact Information Section */}
                    <Col md={6} className="p-3">
                        <div className="info">
                            <p><strong>CONTACT US</strong></p>
                            <p>011-47563428, Customer care - 1800 572 1434</p>
                            <p><strong>WORKING HOURS</strong></p>
                            <ul className="list-unstyled">
                                <li>Open from 10am - 6:30pm</li>
                                <li>Monday to Saturday: Open</li>
                                <li>Sunday: Closed</li>
                            </ul>
                            <p>
                                70, Rama Road, B-6, Najafgarh Road <br />
                                Industrial Area, New Delhi, Delhi 110015
                            </p>
                            <p>Email: <a href="mailto:info@panavbiotech.com">info@panavbiotech.com</a></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
