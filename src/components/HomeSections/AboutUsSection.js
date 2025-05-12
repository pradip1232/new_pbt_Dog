import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../css/AboutUsSection.css';
import bg from "../img/HOMEPAGE/webp/scientffic bg 1.webp";

import f1 from '../images/IMG (113).webp';
import f2 from '../images/IMG (114).webp';
import f3 from '../images/IMG (118).webp';
import f4 from '../images/IMG (119).webp';

import { motion, useInView } from 'framer-motion';

function AboutUsSection() {
    const cards = [
        {
            title: "HEALTHCARE SOLUTION",
            text: "Innovative Healthcare Solutions for Animal Well-being",
            icon: f1,
        },
        {
            title: "Global Partnerships",
            text: "Partnered with WHO-GMP certified global market leading Pharmaceutical companies",
            icon: f2,
        },
        {
            title: "Diverse Portfolio",
            text: "Includes Biologicals & Diagnostics, therapeutic solutions, and pioneering nutraceuticals",
            icon: f3,
        },
        {
            title: "Company Incorporation",
            text: "As a registered entity with the Government of India, our organization specializes in the importation of veterinary biologicals, therapeutic solutions, and innovative nutraceuticals.",
            icon: f4,
        }
    ];

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const containerVariants = {
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 80,
                damping: 12
            }
        }
    };

    return (
        <Container fluid className="about-us-section py-5" ref={ref}>
            <Container>
                <Row className="justify-content-center mb-4">
                    <Col xs={12} className="text-center">
                        <h2 className="section-title">ABOUT US</h2>
                        <p className="section-description">
                            The corporate ideology to construct consciousness regarding the relevance of vaccines in animals' life and serve the animal race with quality vaccines at economical prices to enhance their quality of life.
                        </p>
                    </Col>
                </Row>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <Row className="justify-content-center">
                        {cards.map((card, index) => (
                            <Col key={index} lg={3} md={6} sm={12} className="mb-4">
                                <motion.div
                                    className="info-card-home text-center p-4 shadow"
                                    variants={cardVariants}
                                >
                                    <div className="card-icon mb-3">
                                        <img src={card.icon} className='img-fluid card-icon' alt={card.title} />
                                    </div>
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.text}</p>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </motion.div>
            </Container>
        </Container>
    );
}

export default AboutUsSection;
