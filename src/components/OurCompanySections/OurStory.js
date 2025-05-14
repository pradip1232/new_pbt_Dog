import React, { useState } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import cc from '../images/PBT REMAIMING IMG (2).webp';
import rr from '../images/IMG (32).webp';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import f1 from '../images/IMG (219).webp';
import f2 from '../images/IMG (220).webp';
import f3 from '../images/IMG (221).webp';

import vvv from '../images/events_vdd/Video for top .mp4';
import mm from '../images/IMG (212).webp';

const OurStory = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: false });
    const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: false });
    const { ref: cardsRef, inView: cardsInView } = useInView({ triggerOnce: false });

    return (
        <>
            <section className='our-story-section-page'>
                <img src={cc} alt="Welcome " className='left-side-half-circle-ourStory' />

                <Container className='our-story text-left'>
                    <Row>
                        <Col md={4} className=' justify-content-end'>
                            <motion.div
                                ref={rightRef}
                                initial={{ x: 100, opacity: 0 }}
                                animate={rightInView ? { x: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.8 }}
                            >
                                <img src={mm} alt="Our Company" className="img-fluidd" />
                            </motion.div>
                        </Col>

                        <Col md={8} className='d-flex flex-column justify-content-center text-left our-story-text-left'>
                            <motion.div
                                ref={leftRef}
                                initial={{ x: -100, opacity: 0 }}
                                animate={leftInView ? { x: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.8 }}
                            >
                                <h1>Our Story</h1>
                                <p>
                                    Panav Bio-tech was established in 2006 with the objective of animal health care and today it is one of
                                    the dominant company of healthcare products in India.
                                    We are allied with global market leading companies who are having WGMP facilities to manufacture
                                    exceptional innovative quality research products for animal health care market worldwide.
                                    With portfolio of biopreparations especially vaccines against the menacing diseases, curative
                                    solutions to specific pathologies and pioneering nutraceuticals products for the robustness and well-
                                    being of animals.
                                </p>
                                <Row>
                                    <Col md={4}>
                                        <Button variant="primary" onClick={handleShow}>View Video</Button>
                                    </Col>
                                </Row>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>

                <Modal show={show} onHide={handleClose} centered size="lg">
                    <Modal.Body className="p-0">
                        <div className="ratio ratio-16x9">
                            <video
                                width="100%"
                                height="auto"
                                autoPlay
                                controls
                                controlsList="nodownload fullscreen noremoteplayback noplaybackrate novolume"
                                style={{
                                    pointerEvents: 'auto',
                                }}
                            >
                                <source src={vvv} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </Modal.Body>
                </Modal>
            </section>

            <Container className="text-center our-cpmany-card-3">
                <Row className="justify-content-center" ref={cardsRef}>
                    {[f1, f2, f3].map((img, index) => (
                        <Col md={4} className="mb-4 card-our-company2" key={index}>
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={cardsInView ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <Card className="info-card shadow">
                                    <Card.Body>
                                        <div className="card-icon">
                                            <img src={img} alt={`Card ${index + 1}`} />
                                        </div>
                                        <Card.Title>
                                            {index === 0 && 'Striving for Perfection'}
                                            {index === 1 && 'Delivering Excellence'}
                                            {index === 2 && 'Ensuring Trusted Care'}
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default OurStory;
