// CompanySection.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/CompanySection.css'; // Optional CSS for custom styling

import mm from '../img/OUR COMPANY/our company (4).png';

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
                                    <i className="bi bi-beaker"></i> {/* Bootstrap Icon */}
                                    <Card.Title>To Pursue Perfection</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4} className="mb-4 card-our-company2">
                            <Card className="info-card shadow">
                                <Card.Body>
                                    <i className="bi bi-award"></i> {/* Bootstrap Icon */}
                                    <Card.Title>To Command Excellence</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4} className="mb-4 card-our-company2">
                            <Card className="info-card shadow">
                                <Card.Body>
                                    <i className="bi bi-heart"></i> {/* Bootstrap Icon */}
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
