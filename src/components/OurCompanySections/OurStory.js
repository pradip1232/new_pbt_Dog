import React, { useState } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import cc from '../images/PBT REMAIMING IMG (2).webp';
import rr from '../images/IMG (32).webp';





import f1 from '../images/IMG (219).webp';
import f2 from '../images/IMG (220).webp';
import f3 from '../images/IMG (221).webp';


import vvv from '../images/events_vdd/Video for top .mp4';
import mm from '../images/IMG (212).webp';
const OurStory = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (<>

        <section className='our-story-section-page'>
            <img src={cc} alt="Welcome " className='left-side-half-circle-ourStory' />

            <Container className='our-story text-left'>
                <Row>
                    <Col md={4} className=' justify-content-end'>
                        <img src={mm} alt="Our Company" className="img-fluidd" />
                    </Col>
                    <Col md={8} className='d-flex flex-column justify-content-center text-left our-story-text-left'>
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

                                <Button variant="primary" onClick={handleShow} >View Video</Button>
                            </Col>

                        </Row>

                    </Col>
                </Row>
            </Container>

            {/* <img src={cc} className='right-side-half-circle-company' /> */}



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
            <Row className="justify-content-center">
                <Col md={4} className="mb-4 card-our-company2">
                    <Card className="info-card shadow">
                        <Card.Body>
                            <div className="card-icon">
                                <img src={f1} alt="To Pursue Perfection" />
                            </div>
                            <Card.Title>Striving for Perfection</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4 card-our-company2">
                    <Card className="info-card shadow">
                        <Card.Body>
                            <div className="card-icon">
                                <img src={f2} alt="To Command Excellence" />
                            </div>
                            <Card.Title>Delivering Excellence</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4 card-our-company2">
                    <Card className="info-card shadow">
                        <Card.Body>
                            <div className="card-icon">
                                <img src={f3} alt="To Be Assured Care" />
                            </div>
                            <Card.Title>Ensuring Trusted Care</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>

    );
}

export default OurStory;
