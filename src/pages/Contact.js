import React from 'react'
import '../components/css/contact.css';
import ff from '../components/img/contact img 1.png';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';


import cc from '../components/images/Phone icon pbt.webp';
import lo from '../components/images/IMG (56).webp';
import ww from '../components/images/IMG (57).webp';


const Contact = () => {
  return (
    <>
      <section className='contact-section-hero-cont'>
        <img src={ff} className='img-fluid w-100' />
        <div className='contact-hero-text'>
          <h1 className='text-white'>Contact us</h1>
          <hr className='contact-hr-line' />
        </div>
      </section>




      <section className="join-our-team-section py-5">
        <Container>
          <Row>
            {/* Job Listings Section */}
            <Col lg={6} md={12} className="mb-4">
              <Card className="job-card mb-3">
                <Card.Body>
                  <small className="text-muted">Full Time / Part Time</small>
                  <h5 className="mt-2">MARKETING ADVISOR</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the   printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                  <Button variant="primary">Apply Now</Button>
                </Card.Body>
              </Card>

              <Card className="job-card">
                <Card.Body>
                  <small className="text-muted">Full Time</small>
                  <h5 className="mt-2">SUPERVISOR</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                  <Button variant="primary">Apply Now</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Form Section */}
            <Col lg={6} md={12}>
              <h3 className="text-centerr">JOIN OUR TEAM</h3>
              <div className="form-background p-4 text-whitee">
                <Form>
                  <Form.Group className="mb-3" controlId="fullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your full name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="mobileNumber">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter your mobile number" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Write your message here" />
                  </Form.Group>

                  <Button variant="light" type="submit" className="w-100">
                    Send Application
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="get-in-touch-section py-5">
        <Container>
          <Row className="align-items-center">
            {/* Contact Details */}
            <Col lg={5} xs={12} md={5} className="mb-4 get-tehc-colmn-contact ">
              <h2 className="text-primaryy">Get In Touch</h2>
              <p className='textparagrap1-contact'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s.
              </p>
              <ul className="list-unstyled contact-details">
                <li>
                  <Row>
                    <Col md={2} className="p-0">
                      {/* <i className="bi bi-telephone-fill text-primary"></i> */}
                      <img src={cc} />
                    </Col>
                    <Col md={10} className="p-0">
                      <p>011-47563428, Customer care - 1800 572 1434</p>
                    </Col>
                  </Row>
                </li>
                <li>
                  <Row>
                    <Col xs={1} md={2} className="p-0">
                      {/* <i className="bi bi-geo-alt-fill text-primary"></i> */}
                      <img src={ww} />

                    </Col>
                    <Col xs={8} className="p-0">
                      <p>70, Rama Road, B-6, Najafgarh Road Industrial Area, New Delhi, Delhi 110015</p>
                    </Col>
                  </Row>
                </li>
                <li>
                  <Row>
                    <Col md={2} className="p-0">
                      {/* <i className="bi bi-clock-fill text-primary"></i> */}
                      <img src={lo} />

                    </Col>
                    <Col md={10} className="p-0">
                      <p>
                        Open from 10am - 6:30pm <br />
                        Monday to Saturday - Open <br />
                        Sunday - Closed
                      </p>
                    </Col>
                  </Row>
                </li>
              </ul>
              <Row className="follow-contact-icon align-items-center">
                <Col md={4} className='justify-content-end text-end colmn-folow-icon'>
                  <h5 className="mt-4">Follow Us</h5>
                </Col>
                <Col md={8} className=''>
                  <div className="social-icons d-flex">
                    <a href="#" className="me-3">
                      <i className="bi bi-facebook text-primary"></i>
                    </a>
                    <a href="#" className="me-3">
                      <i className="bi bi-instagram text-primary"></i>
                    </a>
                    <a href="#" className="me-3">
                      <i className="bi bi-twitter text-primary"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-telegram text-primary"></i>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>

            {/* Map Section */}
            <Col lg={7} xs={12} md={7}>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.892303489748!2d77.15212317595974!3d28.655998279054555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03c4f1d61f85%3A0x2a4d236cb0c2f028!2sRama%20Road%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1695834160623!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='google-contact-sectionss'>
        <Container>
          <Row className='justify-content-center text-center'>
            <Col lg={12} md={12}>
              <h2>GOOGLE MY BUSINESS PAGE</h2>
              <Button>View more</Button>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  )
}

export default Contact
