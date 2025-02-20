// ColdChainSection.js
import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import '../css/ColdChainSection.css'; // Optional CSS for custom styling

import coldChainImage from '../img/OUR COMPANY/our company (8).png'; // Replace with your image path

const ColdChainSection = () => {
    return (
        <Container fluid className="cold-chain-section">
            <Row className="align-items-center  justify-content-end">


                {/* Right-side Content */}
                <Col lg={4} md={4} xs={12} className="content-section ">
                    <h2 className="title">
                        COLD CHAIN  <br /><span className="highlight">MANAGEMENT</span>
                    </h2>
                    <p className="description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <Button variant="primary" className="mt-3">
                        Know more
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ColdChainSection;
