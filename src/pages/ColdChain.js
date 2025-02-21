import React from 'react'
import '../components/css/chaincold.css';
import { Col, Container, Row } from 'react-bootstrap';




import f1 from '../components/images/IMG (133).webp';
import f2 from '../components/images/IMG (178).webp';
import f3 from '../components/images/IMG (93).webp';




import t1 from '../components/images/IMG (164).webp';
import t2 from '../components/images/IMG (167).webp';
import t3 from '../components/images/IMG (18).webp';




import s1 from '../components/images/IMG (10).webp';
import s2 from '../components/images/IMG (11).webp';
import s3 from '../components/images/IMG (12).webp';
import s4 from '../components/images/IMG (13).webp';
import s5 from '../components/images/IMG (14).webp';
import s6 from '../components/images/IMG (15).webp';



import i1 from '../components/images/IMG (22).webp';
import i2 from '../components/images/IMG (23).webp';
import i3 from '../components/images/IMG (24).webp';
import i4 from '../components/images/IMG (25).webp';
import i5 from '../components/images/IMG (26).webp';


import gg from '../components/images/3 (2) 1.png';

import bg from '../components/images/png2.png';


const ColdChain = () => {

    const items = [
        { img: s1, text: "Air Cargo" },
        { img: s2, text: "Distributor" },
        { img: s3, text: "Pet Hospital Or Clinics" },
        { img: s4, text: "Licensed Veterinary Doctors" },
        { img: s5, text: "Animal Husbandry Department" },
        { img: s6, text: "Headquarters Warehouse" },
    ];

    return (
        <>
            <section className="coldchain-section-mgt">

                <div className="cold-chain-section-page">
                    <div className="overlay">
                        <Container className="text-container text-center">
                            <h2 className="title">COLD CHAIN MANAGEMENT</h2>
                            <p className="description">
                                Cold chain management is a critical process in pharmaceutical
                                companies to ensure the integrity, efficacy, and safety of
                                temperature-sensitive products. It involves maintaining a
                                consistent temperature-controlled environment throughout the supply
                                chain, from manufacturing and storage to transportation and
                                delivery.
                            </p>
                            <hr className='hr-line-cc-mgt' />
                        </Container>
                    </div>
                </div>
            </section>


            <div className="our-ficility-and-ccmgt">
                <Container>
                    {/* Title and Description */}
                    <Row className="text-center">
                        <Col>
                            <h2 className="title">OUR FACILITIES & COLD CHAIN MANAGEMENT</h2>
                            <p className="description">
                                Vaccines are sensitive biological products that are stored in cold chambers within WHO recommended
                                temperature range to assure quality. Vaccines exposed to temperature outside the recommended
                                range can have reduced potency and protection.
                            </p>
                            <p className="description">
                                Contingency plan for dealing with power cuts. The recommended temperature to store vaccine is 2-8
                                degree Celsius and is facilitated 24 hours backups.
                            </p>
                        </Col>
                    </Row>

                    {/* Image Section */}
                    <Row className="image-section">
                        <Col xs={12} md={4}>
                            <img src={f1} alt="Facility 1" className="facility-image" />
                        </Col>
                        <Col xs={12} md={4}>
                            <img src={f3} alt="Facility 2" className="facility-image" />
                        </Col>
                        <Col xs={12} md={4}>
                            <img src={f2} alt="Facility 3" className="facility-image" />
                        </Col>
                    </Row>

                    {/* Footer Text */}
                    <Row>
                        <Col>
                            <p className="para-footer-ccmgt">Cold Room Facility for Storage of Veterinary Biologicals</p>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-text"></div>
            </div>



            <div className="transport-ccmst-section">
                <Container fluid>
                    <Row className='align-items-center'>
                        <Col md={8} xs={12} className='align-items-center'>
                            <Row className="align-items-centerr justify-content-center mt-4">
                                {/* Transport Section */}
                                <Col xs={12} md={4} className="text-left text-md-left transport-section">
                                    <img src={t1} alt="Transport" className="section-image" />
                                    <h3 className="section-title">TRANSPORT</h3>
                                    <p className="section-description">
                                        We use refer vehicles to transport our products. These vehicles are specially designed for transportation
                                        of temperature-sensitive products.
                                    </p>
                                    <ul className="section-list mx-3">
                                        <li> 24x7 Visibility</li>
                                        <li> Fastest transit time</li>
                                        <li> Backup power provided in case of emergencies.</li>
                                    </ul>
                                </Col>

                                {/* USB Temperature Data Loggers Section */}
                                <Col xs={12} md={4} className="text-center text-md-left usb-logger-section">
                                    <img src={t2} alt="USB Logger" className="section-image" />
                                    <h3 className="section-title">USB TEMPERATURE DATA-LOGGERS</h3>
                                    <p className="section-description">
                                        Data loggers play a very important role in monitoring and recording the temperature of vaccines
                                        during transportation for safeguarding patients and vaccine potency.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4} xs={12}>
                            <img src={gg} className='genrator-img' />
                        </Col>
                    </Row>

                </Container>
            </div>






            <section className="our-supply-ccmgt-section-page py-5">
                <Container>
                    {/* Features Section */}
                    <Row className="text-center justify-content-center align-items-center mb-4">
                        <Col xs={6} md={2} className="our-supply-ccmgt-section-page-feature">
                            {/* <FaClipboardCheck size={40} className="text-primary mb-2" /> */}
                            <img src={i1} alt="Feature 1" className="feature-image" />
                            <p>Accuracy ±05</p>
                        </Col>
                        <Col xs={6} md={2} className="our-supply-ccmgt-section-page-feature">
                            {/* <FaUpload size={40} className="text-primary mb-2" /> */}
                            <img src={i2} alt="Feature 2" className="feature-image" />
                            <p>Upload Data Automatically</p>
                        </Col>
                        <Col xs={6} md={2} className="our-supply-ccmgt-section-page-feature">
                            {/* <FaFileExport size={40} className="text-primary mb-2" /> */}
                            <img src={i3} alt="Feature 3" className="feature-image" />
                            <p>Large Capacity Recording</p>
                        </Col>
                        <Col xs={6} md={2} className="our-supply-ccmgt-section-page-feature">
                            {/* <FaFileExport size={40} className="text-primary mb-2" /> */}
                            <img src={i4} alt="Feature 4" className="feature-image" />
                            <p>Export To Word/Excel/PDF</p>
                        </Col>
                        <Col xs={6} md={2} className="our-supply-ccmgt-section-page-feature">
                            {/* <FaThermometerHalf size={40} className="text-primary mb-2" /> */}
                            <img src={i5} alt="Feature 5" className="feature-image" />
                            <p>USB Temperature Data Logger</p>
                        </Col>
                    </Row>

                    {/* Description Section */}
                    <Row className="text-center">
                        <Col md={12}>
                            <h2 className="fw-bold text-primaryyy">OUR SUPPLY CHAIN MANAGEMENT</h2>
                            <p className="text-mutedd">
                                Supply chain management is a complex and highly regulated process that ensures the seamless
                                flow of products from manufacturing to the distributor and Registered Veterinarian. It involves
                                production, storage, and distribution of medicines and animal healthcare products while adhering
                                to stringent quality standards and regulatory compliance.
                            </p>
                            <p className="text-mutedd">
                                Efficient supply chain management ensures timely availability of critical drugs, minimizes
                                wastage of resources, and reduces costs. It leverages advanced technologies like real-time
                                tracking, data analytics, and automation to optimize processes and ensure transparency.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>







            <section className="snakshape-ccmgt-section-page-feature">
                <div className="snakeshape-ccmgt-container">
                    <div className="snakeshape-ccmgt-wave">
                        <img src={bg} alt="Background" />
                    </div>
                    <div className="snakeshape-ccmgt-items-elmnt">
                        <div className="snakeshape-ccmgt-item" style={{ left: "11%", top: "49%" }}>
                            <div className="snakeshape-ccmgt-circle">
                                <img src={s1} alt="Air Cargo" />
                            </div>
                            {/* <p className="snakeshape-ccmgt-text">Air Cargo</p> */}
                        </div>

                        <div className="snakeshape-ccmgt-item" style={{ left: "42%", top: "47%" }}>
                            <div className="snakeshape-ccmgt-circle">
                                <img src={s2} alt="Distributor" />
                            </div>
                            {/* <p className="snakeshape-ccmgt-text">Distributor</p> */}
                        </div>

                        <div className="snakeshape-ccmgt-item" style={{ left: "58%", top: "53%" }}>
                            <div className="snakeshape-ccmgt-circle">
                                <img src={s3} alt="Pet Hospital Or Clinics" />
                            </div>
                            {/* <p className="snakeshape-ccmgt-text">Pet Hospital Or Clinics</p> */}
                        </div>

                        <div className="snakeshape-ccmgt-item" style={{ left: "26%", top: "51%" }}>
                            <div className="snakeshape-ccmgt-circle">
                                <img src={s4} alt="Licensed Veterinary Doctors" />
                            </div>
                            {/* <p className="snakeshape-ccmgt-text">Licensed Veterinary Doctors</p> */}
                        </div>

                        <div className="snakeshape-ccmgt-item" style={{ left: "74%", top: "48%" }}>
                            <div className="snakeshape-ccmgt-circle">
                                <img src={s5} alt="Animal Husbandry Department" />
                            </div>
                            {/* <p className="snakeshape-ccmgt-text">Animal Husbandry Department</p> */}
                        </div>

                        <div className="snakeshape-ccmgt-item" style={{ left: "89%", top: "48%" }}>
                            <div className="snakeshape-ccmgt-circle">
                                <img src={s6} alt="Headquarters Warehouse" />
                            </div>
                            {/* <p className="snakeshape-ccmgt-text">Headquarters Warehouse</p> */}
                        </div>
                    </div>
                    <div className="snakeshape-ccmgt-items-elmnt">
                        <div className="snakeshape-ccmgt-item" style={{ left: "11%", top: "103%" }}>
                            {/* <div className="snakeshape-ccmgt-circle">
                                <img src={s1} alt="Air Cargo" />
                            </div> */}
                            <p className="snakeshape-ccmgt-text">Air Cargo</p>
                        </div>

                        <div className="snakeshape-ccmgt-item" style={{ left: "42%", top: "103%" }}>
                            {/* <div className="snakeshape-ccmgt-circle">
                                <img src={s2} alt="Distributor" />
                            </div> */}
                            <p className="snakeshape-ccmgt-text">Distributor</p>
                        </div>

                        <div className="snakeshape-ccmgt-item" style={{ left: "58%", top: "103%" }}>
                            {/* <div className="snakeshape-ccmgt-circle">
                                <img src={s3} alt="Pet Hospital Or Clinics" />
                            </div> */}
                            <p className="snakeshape-ccmgt-text">Pet Hospital Or Clinics</p>
                        </div>

                        <div className="snakeshape-ccmgt-item" style={{ left: "26%", top: "103%" }}>
                            {/* <div className="snakeshape-ccmgt-circle">
                                <img src={s4} alt="Licensed Veterinary Doctors" />
                            </div> */}
                            <p className="snakeshape-ccmgt-text">Licensed Veterinary Doctors</p>
                        </div>

                        <div className="snakeshape-ccmgt-item" style={{ left: "74%", top: "103%" }}>
                            {/* <div className="snakeshape-ccmgt-circle">
                                <img src={s5} alt="Animal Husbandry Department" />
                            </div> */}
                            <p className="snakeshape-ccmgt-text">Animal Husbandry Department</p>
                        </div>

                        <div className="snakeshape-ccmgt-item" style={{ left: "89%", top: "103%" }}>
                            {/* <div className="snakeshape-ccmgt-circle">
                                <img src={s6} alt="Headquarters Warehouse" />
                            </div> */}
                            <p className="snakeshape-ccmgt-text">Headquarters Warehouse</p>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default ColdChain
