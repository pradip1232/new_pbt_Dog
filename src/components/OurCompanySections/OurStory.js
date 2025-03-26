import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import cc from '../images/PBT REMAIMING IMG (2).webp';
import rr from '../images/IMG (32).webp';

import mm from '../images/IMG (212).webp';
const OurStory = () => {
    return (

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

                                <Button variant="primary">View Video</Button>
                            </Col>

                        </Row>

                    </Col>
                </Row>
            </Container>

            <img src={cc} className='right-side-half-circle-company' />

        </section>
    );
}

export default OurStory;
