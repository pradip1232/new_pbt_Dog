import React, { useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/VeterinariansSection.css';
import { motion, useInView } from 'framer-motion';

import Group261 from '../images/IMG (203).webp';
import Group262 from '../images/IMG (204).webp';
import Group263 from '../images/IMG (205).webp';
import 'bootstrap/dist/css/bootstrap.min.css';

function VeterinariansSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1
            }
        }
    };

    const leftCard = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }
        }
    };

    const middleCard = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 80, damping: 20, delay: 0.4 }
        }
    };

    const rightCard = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 80, damping: 20, delay: 0.6 }
        }
    };

    return (
        <section className="veterinarians-section" ref={ref}>
            <Container className="text-center">
                <motion.h2
                    className="section-title"
                    variants={textVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    Sold exclusively through <span className="highlight">VETERINARIANS</span>
                </motion.h2>
                <motion.p
                    className="section-description"
                    variants={textVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    At Panav Biotech, our mission is to foster an understanding of the importance of animal health products in the lives of animals. We are dedicated to providing the animal kingdom with top-notch products at affordable prices to enhance their quality of life. Our core values set Panav Biotech apart as a leading entity in the veterinary industry.
                </motion.p>
            </Container>

            <Container fluid className="divisions-section">
                <Container>
                    <Row className="justify-content-center division-row-cards-home">
                        <Col md={4} xs={12} className="text-center">
                            <motion.div
                                variants={leftCard}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                            >
                                <Card className="division-card">
                                    <div className="division-image">
                                        <img src={Group261} alt="Orion Division" className="circle-img" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="division-title">ORION DIVISION</Card.Title>
                                        <Card.Text>Biological & Diagnostics</Card.Text>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>

                        <Col md={4} xs={12} className="text-center">
                            <motion.div
                                variants={middleCard}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                            >
                                <Card className="division-card">
                                    <div className="division-image">
                                        <img src={Group262} alt="Regal Division" className="circle-img" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="division-title">REGAL DIVISION</Card.Title>
                                        <Card.Text>Innovative Therapeutic Solutions</Card.Text>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>

                        <Col md={4} xs={12} className="text-center">
                            <motion.div
                                variants={rightCard}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                            >
                                <Card className="division-card">
                                    <div className="division-image">
                                        <img src={Group263} alt="Iris Division" className="circle-img" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="division-title">IRIS DIVISION</Card.Title>
                                        <Card.Text>Global Nutraceuticals</Card.Text>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default VeterinariansSection;
