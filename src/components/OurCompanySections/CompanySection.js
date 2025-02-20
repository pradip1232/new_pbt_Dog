// CompanySection.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/CompanySection.css'; // Optional CSS for custom styling

import mm from '../images/IMG (209).webp';



import f1 from '../images/IMG (219).webp';
import f2 from '../images/IMG (220).webp';
import f3 from '../images/IMG (221).webp';
const CompanySection = () => {
    return (
        <div className="company-section">
            <div className="our-company-page company-header">
                <img
                    src={mm}
                    alt="Our Company"
                    className="header-image"
                />
                <div className="header-overlay">
                    <h2>OUR COMPANY</h2>
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <hr />
                </div>
                <Container className="text-center  our-cpmany-card-3">
                    <Row>
                        <Col md={4} className="mb-4 card-our-company2">
                            <Card className="info-card shadow">
                                <Card.Body>
                                    {/* <i className="bi bi-beaker"></i> Bootstrap Icon */}
                                    <img src={f1} />
                                    <Card.Title>To Pursue Perfection</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4} className="mb-4 card-our-company2">
                            <Card className="info-card shadow">
                                <Card.Body>
                                    {/* <i className="bi bi-award"></i> Bootstrap Icon */}
                                    <img src={f2} />

                                    <Card.Title>To Command Excellence</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4} className="mb-4 card-our-company2">
                            <Card className="info-card shadow">
                                <Card.Body>
                                    
                                    {/* <i className="bi bi-heart"></i> Bootstrap Icon */}
                                    <img src={f3} />

                                    <Card.Title>To Be Assured Care</Card.Title>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>


        </div>
    );
};

export default CompanySection;
