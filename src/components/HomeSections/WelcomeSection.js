import React, { useEffect, useRef, useState } from 'react';
import '../css/WelcomeSection.css'; // Keep your styling
import { Col, Container, Row } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';

import fff from '../images/IMG (67).webp';
import sd from '../images/IMG (68).webp';
import dsds from '../images/IMG (69).webp';
import cdcd from '../images/IMG (70).webp';
import cvcv from '../images/IMG (71).webp';
import dfdf from '../images/IMG (72).webp';

import cc from '../images/PBT REMAIMING IMG (2).webp';
import vvvvv from '../images/WELCOME TO PBT DNA VIDEO.mp4';

function WelcomeSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { threshold: 0.2 });

    const products = [
        { name: 'Vaccines', icon: fff },
        { name: 'Hyperimmune serums', icon: sd },
        { name: 'Endocrinology', icon: dsds },
        { name: 'Medicines', icon: cdcd },
        { name: 'Diagnostic Kits', icon: cvcv },
        { name: 'Supplements', icon: dfdf },
    ];



    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15, // controls delay between cards
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    };




    return (
        <>
            <section ref={sectionRef} className="welcome-dog-section position-relative">
                {/* Left Image Animation */}
                <motion.img
                    src={cc}
                    alt="Welcome"
                    className="left-side-half-circle"
                    initial={{ x: -100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 1 }}
                />

                <Container>
                    <Row className="d-flex align-items-center justify-content-center mb-5 position-relative welcome-section">
                        <Col lg={12} md={12} className="d-flex align-items-center home-welcome-row content-section">
                            <Row>
                                <Col md={6} className="welcome-home-heading text-left">
                                    <motion.div
                                        initial={{ x: -50, opacity: 0 }}
                                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                                        transition={{ duration: 1, delay: 0.3 }}
                                    >
                                        <h1 className="fw-boldd">WELCOME TO</h1>
                                        <h2 className="fw-boldd">PANAV BIO-TECH</h2>
                                    </motion.div>
                                </Col>

                                {/* Video and Text Content Animation */}
                                <Col
                                    md={6}
                                    className="p-0 position-relativee text-content-container"
                                >
                                    <motion.div
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className='' style={{ marginBottom: '-6px' }}
                                    >
                                        <video
                                            src={vvvvv}
                                            className="w-100 h-100 video-background"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        ></video>

                                        <div className="text-content-overlay text-white">
                                            <p className="text-justify m-0">
                                                <b>Panav Biotech</b>: Enhancing Animal Health, Enriching Lives. Our
                                                corporate philosophy is to create awareness about the significance of
                                                animal health products in their lives and provide the animal kingdom
                                                with high-quality products at accessible prices to improve their
                                                quality of life.
                                                <br />
                                                <br />
                                                Our values, including integrity, excellence, loyalty, trust, and
                                                appreciation, distinguish Panav Biotech as a prominent entity in the
                                                veterinary industry.
                                            </p>
                                        </div>
                                    </motion.div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Right Image Animation */}
            <motion.img
                src={cc}
                className="right-side-half-circle"
                initial={{ x: 100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1 }}
            />

            {/* Product Grid Section */}
            <Container className="welcome-section-container my-5">
                <motion.div
                    className="text-center my-5"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <h2 className="mb-4 home-our-product">OUR PRODUCTS</h2>
                    <Row>
                        {products.map((product, index) => (
                            <Col key={index} sm={12} md={4} lg={2} className="mb-4">
                                <motion.div
                                    className="product-circle shadow-sm mx-auto"
                                    variants={cardVariants}
                                >
                                    <img src={product.icon} className="product-icon-home" alt={product.name} />
                                </motion.div>
                                <p className="mt-2 home-product-name">{product.name}</p>
                            </Col>
                        ))}
                    </Row>
                </motion.div>
            </Container>

        </>
    );
}

export default WelcomeSection;
