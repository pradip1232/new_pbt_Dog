import React from 'react';
import mm from '../img/OUR COMPANY/our company (7).png';
import { Button, Col, Container, Row } from 'react-bootstrap';
import cc from '../images/IMG (31).webp';
import rr from '../images/IMG (32).webp';

const OurStory = () => {
    return (

        <section className='our-story-section-page'>
            <img src={cc} alt="Welcome " className='left-side-half-circle-ourStory' />

            <Container className='our-story text-left'>
                <Row>
                    <Col md={5} className='d-flex justify-content-end'>
                        <img src={mm} alt="Our Company" className="img-fluid" />
                    </Col>
                    <Col md={7} className='d-flex flex-column justify-content-center text-left'>
                        <h1>Our Story</h1>
                        <p>Panav Bio-tech was established in 2006 with the objective of animal health care and today it is one of the dominant company of healthcare products in India.
                            We are allied with global market leading companies who are having WGMP facilities to manufacture exceptional innovative quality research products for animal health care market worldwide.
                            With portfolio of biopreparations especially vaccines against the menacing diseases, curative solutions to specific pathologies and pioneering nutraceuticals products for the robustness and well-being of animals.
                            Panav Bio-tech is a registered company with Government of India for the import of veterinary biologicals , therapeutic solutions and innovative nutraceuticals. We are also trained in doing liasoning for obtaining licenses from different departments of GOI, like DADF,CDSCO etc.</p>
                        <Row>
                            <Col md={4}>

                                <Button variant="primary">View Video</Button>
                            </Col>

                        </Row>

                    </Col>
                </Row>
            </Container>

            <img src={rr} className='right-side-half-circle' />

        </section>
    );
}

export default OurStory;
