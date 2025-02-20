import React from 'react';
import './css/Footer.css'; // Import your custom CSS
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ff from './images/homepage (31).webp'; // Import logo image
import logo from './images/IMG (73).webp';



import f1 from './images/Phone icon pbt.webp';
import f2 from './images/IMG (56).webp';
import f3 from './images/IMG (57).webp';
import f4 from './images/IMG (58).webp';

const Footer = () => {
    return (
        <footer className="footer bg-white">
            <Container fluid className="">
                <Row className="newsletter-section d-flex justify-content-center align-items-center   ">
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
                    <Col md={6} xs={12} className="p-3 text-center text-md-start footer-img-colmn">
                        <div className="logo">
                            <img
                                src={ff}
                                alt="Panav Bio-Tech Logo"
                                className="logo-img footer-logo-img"
                            />
                        </div>

                        <div>
                            <img src={logo} className='imglogo-footer' />
                        </div>
                    </Col>

                    {/* Contact Information Section */}
                    <Col md={6} xs={12} className="p-3">
                        <Row className="contact-info  ">
                            <Col md={1} xs={3} className="text-end icon-footer p-0 text-md-start">
                                <img src={f1} className='img-fluid' />
                            </Col>
                            <Col md={8} xs={8} className="text-left text-md-start">
                                <div className="info">
                                    <p><strong>CONTACT US</strong></p>
                                    <p className='phonenumber-footer'>011-47563428, Customer care - 1800 572 1434</p>
                                </div>
                            </Col>

                        </Row>
                        <Row className="contact-info  ">
                            <Col md={1} xs={3} className="text-end icon-footer p-0 text-md-start">
                                <img src={f2} className='img-fluid' />
                            </Col>
                            <Col md={8} xs={8} className="text-left text-md-start">
                                <div className="info">
                                    <p><strong>WORKING HOURS</strong></p>
                                    <ul className="list-unstyledd mx-4">
                                        <li>Open from 10am - 6:30pm</li>
                                        <li>Monday to Saturday: Open</li>
                                        <li>Sunday: Closed</li>
                                    </ul>

                                </div>
                            </Col>

                        </Row>
                        <Row className="contact-info  ">
                            <Col md={1} xs={3} className="text-end icon-footer p-0 text-md-start">
                                <img src={f3} className='img-fluid' />
                            </Col>
                            <Col md={8} xs={8} className="text-left text-md-start">
                                <div className="info">
                                    <p>
                                        70, Rama Road, B-6, Najafgarh Road <br />
                                        Industrial Area, New Delhi, Delhi 110015
                                    </p>


                                </div>
                            </Col>

                        </Row>
                        <Row className="contact-info  ">
                            <Col md={1} xs={3} className="text-end icon-footer p-0 text-md-start">
                                <img src={f4} className='img-fluid' />
                            </Col>
                            <Col md={8} xs={8} className="text-left text-md-start">
                                <div className="info">

                                    <p>
                                        <a href="mailto:info@panavbiotech.com">info@panavbiotech.com</a>
                                    </p>


                                </div>
                            </Col>

                        </Row>

                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
