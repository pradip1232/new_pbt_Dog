// MissionVisionSection.js
import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import '../css/MissionVisionSection.css'; // Optional custom CSS

import missionImage from '../images/IMG (173).webp'; // Example right-side image

import visionImage from '../images/IMG (226).webp';
import gg from '../images/IMG (207).webp';
import ss from '../images/IMG (228).webp';
import ff from '../images/IMG (60).webp';
const MissionVisionSection = () => {
    return (
        <>
            <Container fluid className="mission-vision-section ">
                <Row className="align-items-center">
                    {/* Cards Section */}
                    <Col lg={8} md={12} className="mb-4 justify-content-end ">
                        <Row className='mx-5'>
                            <h2 className="text-left mb-4">OUR MISSION | OUR VISION</h2>
                            {/* Vision Card */}
                            <Col md={6} xs={12} className="mb-4">
                                <Card className="mission-vision-card shadow">
                                    <div className="icon-container">
                                        <i className="bi bi-lightbulb-fill icon-style"></i>
                                    </div>
                                    <div className="divider">
                                        <Card.Title className="text-center">Vision</Card.Title>
                                    </div>
                                    <Card.Body>
                                        <Card.Text className="text-center">
                                            Lorem Ipsum is simply dummy text of ndustry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            {/* Mission Card */}
                            <Col md={6} xs={12} className="mb-4">
                                <Card className="mission-vision-card shadow">
                                    <div className="icon-container">
                                        <i className="bi bi-flag-fill icon-style"></i>
                                    </div>
                                    <div className="divider">
                                        <Card.Title className="text-center">Mission</Card.Title>

                                    </div>
                                    <Card.Body>
                                        <Card.Text className="text-center">
                                            Lorem Ipsum is simply dum my text of the printing and typesetting industry. It has been the industry's standard since the 1500s.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>

                    {/* Right-Side Image Section */}
                    <Col lg={4} md={12} className="image-container justify-content-center ">
                        <Image src={missionImage} alt="Mission Vision" fluid className="right-side-image" />
                    </Col>
                </Row>
            </Container>

            <section className='trust-section-company'>
                <Container className=''>
                    <Row className="justify-content-center">
                        <Col md={12} xs={12} className="text-center">
                            <div className='text-content-company'>
                                <h4 className="text-center mb-0">How do we Uphold the</h4>
                                <h2 className="mb-0 me-3">TRUST</h2>
                                <div className='d-flex align-items-center trust-line-container'>
                                    <hr className='trust-hr-line flex-grow-1' />
                                    <img src={ff} className='dog-plus-img ms-3' />
                                </div>
                                <h3 className="mb-0 ms-3">that Veterinarian vested upon us</h3>


                            </div>

                        </Col>
                    </Row>
                </Container>
            </section >
            <section className='overview-g-map-section-company'>
                <Container className=''>
                    <h2 className='overviewheading-company text-left'>OVERVIEW OF <br /> <span>PANAV BIOTECH</span></h2>
                    <Row className="justify-content-center">
                        <Col md={6} xs={12} className="text-left text-colmn-company">
                            <div className="gmap-container-text">
                                <Row>

                                    <Col md={1} >
                                        <img src={ss} className='img-fluid' />
                                    </Col>
                                    <Col md={10} >
                                        <p>A prominent position in the veterinary industry.</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={1} >
                                        <img src={ss} className='img-fluid' />

                                    </Col>
                                    <Col md={10} >
                                        <p>A diverse portfolio of globally renowned companies specializing in the development and distribution of cutting-edge bio preparations, therapeutic solutions, and innovative nutraceutical products.</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={1} >
                                        <img src={ss} className='img-fluid my-4' />

                                    </Col>
                                    <Col md={10} >
                                        <p>Established in <span> 2006
                                        </span> , our organization is based in New Delhi.</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={1} >
                                        <img src={ss} className='img-fluid my-4' />

                                    </Col>
                                    <Col md={10} >
                                        <p>Over <span>90+</span> stockists across India.</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={1} >
                                        <img src={ss} className='img-fluid my-4' />

                                    </Col>
                                    <Col md={10} >
                                        <p>Over  <span>6000+</span>clients, including veterinary hospitals, veterinary clinics, and state animal husbandry departments,
                                            trust our services.</p>
                                    </Col>
                                </Row>
                            </div>


                        </Col>
                        <Col md={6} xs={12} className="text-center">
                            <img src={gg} className='img-fluid google-map-images' />
                        </Col>
                    </Row>
                </Container>
            </section >
        </>
    );
};

export default MissionVisionSection;
