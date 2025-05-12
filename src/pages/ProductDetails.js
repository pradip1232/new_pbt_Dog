import React, { useState } from 'react'
import { Button, Card, Col, Collapse, Container, Row } from 'react-bootstrap'
import ace from '../components/img/PRODUCT PAGE/Acepron Injcetion 2.png';
import '../components/css/prooduct-details.css';
import { Minus, Plus } from 'lucide-react';










const sections = [
    "INDICATIONS",
    "COMPOSITION",
    "DOSAGE",
    "PACK SIZE",
    "PHARMACEUTICAL FORM",
];

const ProductDetails = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
    };






    return (
        <>
            <section className='product-details-section'>
                <Container>
                    <div className='product-details-content'>
                        <Row className="align-items-center">
                            <Col md={5} lg={5} xs={12} sm={11} className='text-end mb-4 mb-md-0'>
                                <img src={ace} alt="Acepron Injection" className='img-fluid product-details-img' />
                            </Col>
                            <Col md={6} lg={6} xs={12} sm={11}>
                                <h4 className='product-name'>Acepron</h4>
                                <p className='product-description'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    <br />
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <p className='product-price'>$ 10.99</p>
                                {/* <p className='product-quantity'></p> */}
                                <h6 className='products-tags'>Target Species: Cats, Dogs</h6>
                                <div className="d-flex flex-wrap gap-2 mt-3">
                                    <button className='btn btn-primary'>Technical Enquiry</button>
                                    <button className='btn btn-secondary'>Pack Insert</button>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </Container>

            </section>



            <section className='accordian-section-product-details'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="accordion-container">
                                {sections.map((section, index) => (
                                    <Card key={index} className="mb-2 border-0 shadow-sm">
                                        <Card.Header
                                            className="d-flex justify-content-between align-items-end p-3 bg-light"
                                            onClick={() => toggleSection(index)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <span className="fw-bold">{section}</span>
                                            <Button
                                                variant="link"
                                                className="text-dark p-0 border-0"
                                                style={{ marginLeft: "auto", position: "fixed" }} // Pushes icon to the right
                                            >
                                                {openSection === index ? <Minus size={16} /> : <Plus size={16} />}
                                            </Button>
                                        </Card.Header>
                                        <Collapse in={openSection === index}>
                                            <Card.Body>
                                                <p>This is the content for {section}.</p>
                                            </Card.Body>
                                        </Collapse>
                                    </Card>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ProductDetails
