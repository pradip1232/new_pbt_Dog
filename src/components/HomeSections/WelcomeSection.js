import React from 'react';
import '../css/WelcomeSection.css'; // Custom CSS for styling
import { Col, Container, Row } from 'react-bootstrap';



import f1 from '../images/IMG (67).webp';
import f2 from '../images/IMG (68).webp';
import f3 from '../images/IMG (69).webp';
import f4 from '../images/IMG (70).webp';
import f5 from '../images/IMG (71).webp';
import f6 from '../images/IMG (72).webp';






import dog from '../img/HOMEPAGE/homepage (21).png';
function WelcomeSection() {

    const products = [
        { name: 'Vaccines', icon: f1 },
        { name: 'Hyperimmune serums', icon: f2 },
        { name: 'Endocrinology', icon: f3 },
        { name: 'Medicines', icon: f4 },
        { name: 'Diagnostic Kits', icon: f5 },
        { name: 'Supplements', icon: f6 },
    ];

    return (
        <>
            <section className='welcome-dog-section'>
                <Container>
                    <Row className="d-flex align-items-center justify-content-center mb-5 position-relative welcome-section">
                        {/* Left Content and Text */}
                        <Col lg={10} md={12} className="d-flex align-items-center home-welcome-row content-section">
                            <Row>
                                <Col md={5} className="welcome-home-heading">
                                    <h1 className="fw-boldd">WELCOME TO</h1>
                                    <h2 className="fw-boldd">PANAV BIO-TECH</h2>
                                </Col>
                                <Col md={6} className="position-relative text-content-container">
                                    <div className="text-content">
                                        <p className="text-justify">
                                            The corporate ideology to construct consciousness regarding the relevance of vaccines in
                                            animals' life and serve the animal race with quality vaccines at economical prices to
                                            enhance their quality of life.
                                            <br />
                                            The ethics and beliefs such as virtuosity, eminence, fidelity, faith, and gratitude make
                                            Panav Biotech a company that stands out in the veterinary world. The innovations, service
                                            orientation, drive towards achieving success, and an attitude of being triumphant against
                                            all odds are at the heart of Panav Bio-tech.
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


            <Container fluid className="welcome-section-container my-5">


                {/* Products Section */}
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
