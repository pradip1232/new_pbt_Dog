// MissionVisionSection.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import '../css/MissionVisionSection.css'; // Optional custom CSS
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import missionImage from '../images/IMG (173).webp'; // Example right-side image

import visionImage from '../images/IMG (226).webp';
import gg from '../images/IMG (207).webp';
import ss from '../images/IMG (228).webp';
import ff from '../images/IMG (210).webp';

import vv from '../images/scientific background 2 1.png';
import mm from '../images/scientific background 2 2.png';


import cc from '../images/PBT REMAIMING IMG (2).webp';

const states = [
    { name: "Srinagar", top: "14%", left: "32%" },
    { name: "Amritsar", top: "20%", left: "29%" },
    { name: "Chandigarh", top: "24%", left: "32%" },
    { name: "Ludhiana", top: "21%", left: "32%" },
    { name: "Delhi NCR", top: "30%", left: "28%" },
    { name: "Agra", top: "38%", left: "39%" },
    { name: "Jaipur", top: "35%", left: "20%" },
    { name: "Lucknow", top: "40%", left: "44%" },
    { name: "Siliguri", top: "36%", left: "65%" },
    { name: "Guwahati", top: "39%", left: "78%" },
    { name: "Dimapur", top: "46%", left: "80%" },
    { name: "Shillong", top: "47%", left: "76%" },
    { name: "Ahemadabad", top: "51%", left: "12%" },
    { name: "Bhubaneswar", top: "56%", left: "59%" },
    { name: "Bhopal", top: "48%", left: "32%" },
    { name: "Indore", top: "40%", left: "25%" },
    // { name: "Mumbai", top: "60%", left: "89%" },
    { name: "Pune", top: "67%", left: "21%" },
    { name: "Hyderabad", top: "74%", left: "36%" },
    { name: "Chennai", top: "70%", left: "44%" },
    { name: "Kolkata", top: "60%", left: "53%" },
    { name: "Goa", top: "75%", left: "22%" },
    { name: "Bangalore", top: "87%", left: "36%" },
    // { name: "Chennai", top: "60%", left: "89%" },
    { name: "Coachin", top: "42%", left: "82%" },
    { name: "Maharashtra", top: "62%", left: "24%" },
    { name: "Karnataka", top: "80%", left: "35%" },
    { name: "West Bengal", top: "50%", left: "65%" },
];
const MissionVisionSection = () => {
    const [hoverState, setHoverState] = useState(null);
    const [position, setPosition] = useState({ top: 0, left: 0 });

    const showStateName = (event, name) => {
        setHoverState(name);
        setPosition({ top: event.clientY, left: event.clientX + 10 });
    };

    const hideStateName = () => {
        setHoverState(null);
    };



    const [ref, inView] = useInView({ triggerOnce: false });

    // Animation variants for each column
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: delay => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: delay,
            },
        }),
    };



    return (
        <>
            <Container fluid className="mission-vision-section ">
                <Row className="align-items-center">
                    {/* Cards Section */}
                    <Col lg={12} md={12} className="justify-content-end" ref={ref}>
                        <Row className="mx-5">
                            <h2 className="text-left mb-4">OUR MISSION | OUR VISION</h2>

                            {/* Vision Card */}
                            <Col md={4} xs={12} className="vision-card-company">
                                <motion.div
                                    variants={variants}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    custom={0}
                                >
                                    <Card className="mission-vision-card shadow">
                                        <div className="icon-container">
                                            <img src={vv} className="img-fluid icon-style" />
                                        </div>
                                        <div className="divider">
                                            <Card.Title className="text-center">Vision</Card.Title>
                                        </div>
                                        <Card.Body>
                                            <Card.Text className="text-center">
                                                Our vision is to transform the landscape of animal healthcare by pioneering innovative and effective pharmaceutical solutions. We are committed to enhancing the quality of life for pets through continuous research, development, and delivery of high-quality, safe, and effective medications.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Col>

                            {/* Center Image */}
                            <Col md={4} className="d-flex justify-content-center">
                                <motion.div
                                    variants={variants}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    custom={0.4}
                                >
                                    <img src={missionImage} alt="Mission Vision" className="right-side-image" />
                                </motion.div>
                            </Col>

                            {/* Mission Card */}
                            <Col md={4} xs={12} className="mb-44444 mission-card-company">
                                <motion.div
                                    variants={variants}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    custom={0.8}
                                >
                                    <Card className="mission-vision-card shadow">
                                        <div className="icon-container">
                                            <img src={mm} className="img-fluid icon-style" />
                                        </div>
                                        <div className="divider">
                                            <Card.Title className="text-center">Mission</Card.Title>
                                        </div>
                                        <Card.Body>
                                            <Card.Text className="text-center">
                                                To enhance the health and well-being of animals by providing innovative, high-quality, and sustainable veterinary pharmaceutical solutions. We are committed to partnering with veterinarians, livestock farmers, and pet owners to ensure a healthier animal future and a safer food chain for society.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Col>
                        </Row>
                    </Col>

                    {/* Right-Side Image Section */}
                    {/* <Col lg={4} md={12} className="image-container justify-content-center ">
                        <img src={missionImage} alt="Mission Vision" fluid className="right-side-image" />
                    </Col> */}
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
                                    <hr className='trust-hr-line flex-groww-1' />
                                    <img src={ff} className='dog-plus-img ' />
                                </div>
                                <h3 className="mb-0 ms-3">that Veterinarian vested upon us</h3>


                            </div>

                        </Col>
                    </Row>
                </Container>
            </section >
            <section className='overview-g-map-section-company'>
                <img src={cc} alt="Welcome " className='left-side-half-circle-india-map' />
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
                        <Col md={6} xs={12} className="text-center india-map-container-colmn">
                            <div className="map-container">

                                <img src={gg} className='img-fluid google-map-images india-map' />
                                {states.map((state, index) => (
                                    <div key={index}>
                                        <div
                                            className="state-marker"
                                            style={{ top: state.top, left: state.left }}
                                            onMouseOver={(e) => showStateName(e, state.name)}
                                            onMouseOut={hideStateName}
                                        ></div>
                                        {hoverState === state.name && (
                                            <div
                                                className="state-name"
                                                style={{
                                                    position: 'absolute',
                                                    top: state.top,
                                                    left: `calc(${state.left} + 20px)`,
                                                    backgroundColor: 'white',
                                                    color: 'black',
                                                    fontSize: '14px',
                                                    fontWeight: '400',
                                                    padding: '5px 10px',
                                                    borderRadius: '4px',
                                                    zIndex: 100
                                                }}
                                            >
                                                {state.name}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
                <img src={cc} className='right-side-half-circle-india-map' />
            </section >
        </>
    );
};

export default MissionVisionSection;
