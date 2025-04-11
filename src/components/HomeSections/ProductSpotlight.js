// ProductSpotlight.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import firstImage from "../img/HOMEPAGE/webp/Group 281.webp"; // Replace with your image paths
import '../css/ProductSpotlight.css';

import f1 from '../images/product spotllight 1.webp';
import f3 from '../images/product spotllight 1-1.webp';
import f2 from '../images/product spotllight 1-2.webp';

const ProductSpotlight = () => {
    return (
        <Container fluid className="product-spotlight mt-5">
            <Container>
                <Row className="align-items-center product-spotlight-row">
                    {/* Left Column - Products */}
                    <Col xs={12} md={6} className="product-section">
                        <div className="product-images">
                            <img src={firstImage} alt="Product 1" className="product-img" />

                        </div>
                        <div className="product-description">
                            <img src={f1} alt="Product 1" className="product-img-product-spotlight-1" />
                            <img src={f3} alt="Product 3" className="product-img-product-spotlight-3" />
                            <img src={f2} alt="Product 2" className="product-img-product-spotight-2" />

                            {/* <h5>Dog</h5>
                            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p> */}
                        </div>
                    </Col>

                    {/* Right Column - Spotlight */}
                    <Col xs={12} md={6} className="spotlight-section text-white d-flex align-items-center ">
                        <div>
                            <h2 className="spotlight-title">PRODUCT SPOTLIGHT</h2>
                            <p className="spotlight-descriptionn mt-3">
                                Introducing our latest innovations in veterinary
                                care—designed to support the health and well-being of animals while empowering veterinarians with trusted solutions. Explore the spotlight on products that make a difference!
                            </p>
                            <Button variant="light mt-4">See more</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default ProductSpotlight;
