import React from 'react';
import '../css/WelcomeSection.css'; // Custom CSS for styling
import { Col, Container, Row } from 'react-bootstrap';



import fff from '../images/IMG (67).webp';
import sd from '../images/IMG (68).webp';
import dsds from '../images/IMG (69).webp';
import cdcd from '../images/IMG (70).webp';
import cvcv from '../images/IMG (71).webp';
import dfdf from '../images/IMG (72).webp';



import cc from '../images/PBT REMAIMING IMG (2).webp';


import dog from '../img/HOMEPAGE/homepage (21).png';
function WelcomeSection() {

    const products = [
        { name: 'Vaccines', icon: fff },
        { name: 'Hyperimmune serums', icon: sd },
        { name: 'Endocrinology', icon: dsds },
        { name: 'Medicines', icon: cdcd },
        { name: 'Diagnostic Kits', icon: cvcv },
        { name: 'Supplements', icon: dfdf },
    ];

    return (
        <>
            <section className='welcome-dog-section'>
                <img src={cc} alt="Welcome " className='left-side-half-circle' />

                <Container>
                    <Row className="d-flex align-items-center justify-content-center mb-5 position-relative welcome-section">
                        {/* Left Content and Text */}
                        <Col lg={10} md={12} className="d-flex align-items-center home-welcome-row content-section">
                            <Row>
                                <Col md={5} className="welcome-home-heading text-left">
                                    <h1 className="fw-boldd">WELCOME TO</h1>
                                    <h2 className="fw-boldd">PANAV BIO-TECH</h2>
                                </Col>
                                <Col md={6} className="position-relative text-content-container">
                                    <div className="text-content">
                                        <p className="text-justify">
                                            <b> Panav Biotech </b>: Enhancing Animal Health, Enriching Lives Our corporate philosophy is to create awareness about the significance of animal health products in their lives and provide the animal kingdom with high-quality products at accessible prices to improve their quality of life.
                                            <br /> <br />
                                            Our values, including integrity, excellence, loyalty, trust, and appreciation, distinguish Panav Biotech as a prominent entity in the veterinary industry.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            {/* Dog Image Positioned Outside */}
                        </Col>
                    </Row>
                    <img src={dog} className='img-fluid dog_img-home2' />
                </Container>
            </section>

            <img src={cc} className='right-side-half-circle' />

            <Container fluidd className="welcome-section-container my-5">


                <Row className="text-center my-5">
                    <h2 className="mb-4 home-our-product">OUR PRODUCTS</h2>
                    {products.map((product, index) => (
                        <Col key={index} sm={12} md={4} lg={2} className="mb-4">
                            <div className="product-circle shadow-sm mx-auto">
                                <img src={product.icon} className="product-icon-home" />
                            </div>
                            <p className="mt-2 home-product-name">{product.name}</p>
                        </Col>
                    ))}
                </Row>

            </Container>
        </>
    );
}

export default WelcomeSection;
