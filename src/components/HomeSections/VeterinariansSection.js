import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/VeterinariansSection.css'; // Import custom CSS

// Import images directly
import Group261 from '../img/HOMEPAGE/webp/Group 261.webp';
import Group262 from '../img/HOMEPAGE/webp/Group 262.webp';
import Group263 from '../img/HOMEPAGE/webp/Group 263.webp';
import ss from '../img/HOMEPAGE/webp/scientffic  1 bg 1.webp';


import 'bootstrap/dist/css/bootstrap.min.css';

// Sample data for divisions
const divisions = [
    {
        name: 'ORION DIVISON',
        description: 'Biological & Diagnostics',
        image: Group261, // Directly use imported image
    },
    {
        name: 'REGAL DIVISON',
        description: 'Innovative Therapeutic Solutions',
        image: Group262, // Directly use imported image
    },
    {
        name: 'IRIS DIVISON',
        description: 'Global Nutraceuticals',
        image: Group263, // Directly use imported image
    },
];

function VeterinariansSection() {
    return (
        <section className="veterinarians-section">
            <Container className="text-center">
                <h2 className="section-title">
                    Sold exclusively through <span className="highlight">VETERINARIANS</span>
                </h2>
                <p className="section-description">
                    At Panav Biotech, our mission is to foster an understanding of the importance of animal health products in the lives of animals. We are dedicated to providing the animal kingdom with top-notch products at affordable prices to enhance their quality of life. Our core values set Panav Biotech apart as a leading entity in the veterinary industry.                </p>
            </Container>


            <Container fluid className="divisions-section">
                <Container>
                    <Row className="justify-content-center">
                        {/* Orion Division */}
                        <Col md={4} className="text-center">
                            <Card className="division-card">
                                <div className="division-image">
                                    <img src={Group261} alt="Orion Division" className="circle-img" />
                                </div>
                                <Card.Body>
                                    <Card.Title className="division-title">ORION DIVISION</Card.Title>
                                    <Card.Text>Biological & Diagnostics</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Regal Division */}
                        <Col md={4} className="text-center">
                            <Card className="division-card">
                                <div className="division-image">
                                    <img src={Group262} alt="Regal Division" className="circle-img" />
                                </div>
                                <Card.Body>
                                    <Card.Title className="division-title">REGAL DIVISION</Card.Title>
                                    <Card.Text>Innovative Therapeutic Solutions</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Iris Division */}
                        <Col md={4} className="text-center">
                            <Card className="division-card">
                                <div className="division-image">
                                    <img src={Group263} alt="Iris Division" className="circle-img" />
                                </div>
                                <Card.Body>
                                    <Card.Title className="division-title">IRIS DIVISION</Card.Title>
                                    <Card.Text>Global Nutraceuticals</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>


        </section >
    );
}

export default VeterinariansSection;
