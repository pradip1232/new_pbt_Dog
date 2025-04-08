import React, { useState } from 'react'
import '../components/css/contact.css';
import ff from '../components/img/contact img 1.png';
import { Container, Row, Col, Card, Button, Form, Modal, ProgressBar } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import cc from '../components/images/Phone icon pbt.webp';
import lo from '../components/images/IMG (56).webp';
import ww from '../components/images/IMG (57).webp';
import ccc from '../components/images/PBT REMAIMING IMG (2).webp';

const Contact = () => {
  const [show, setShow] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [phoneValid, setPhoneValid] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    resume: null
  });

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setUploadProgress(0);
    setPhoneValid(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      resume: null
    });
  };

  // 📞 Live validation for phone input
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // remove non-digits
    setPhoneValid(value.length === 10);
    setFormData({ ...formData, phone: value });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'resume') {
      const file = files[0];
      if (file && file.type !== 'application/pdf') {
        toast.error('❌ Only PDF files are allowed.');
        return;
      }
      setFormData({ ...formData, resume: file });
    } else if (name !== 'phone') {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phoneValid) {
      toast.error('📞 Phone number must be exactly 10 digits.');
      return;
    }

    if (!formData.name || !formData.email || !formData.resume) {
      toast.warning('⚠️ Please fill all required fields and upload a PDF resume.');
      return;
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('message', formData.message);
    data.append('resume', formData.resume);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost/pbt/apply-job.php');

    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) {
        const percent = Math.round((e.loaded / e.total) * 100);
        setUploadProgress(percent);
      }
    };

    xhr.onload = () => {
      const result = JSON.parse(xhr.responseText);
      if (xhr.status === 200 && result.success) {
        toast.success('✅ Application submitted successfully!');
        handleClose();
      } else {
        toast.error('❌ Submission failed.');
      }
    };

    xhr.onerror = () => {
      toast.error('❌ Upload failed. Try again.');
    };

    xhr.send(data);
  };






  const validateForm = () => {
    const { name, email, phone } = formData;

    if (!name.trim() || !email.trim() || !phone.trim()) {
      toast.error('Please fill in all required fields.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email.');
      return false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error('Please enter a valid 10-digit phone number.');
      return false;
    }

    return true;
  };

  const handleChangeform = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmitform = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch('http://localhost/pbt/join-team.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      console.error(err);
      toast.error('Server error. Please try again later.');
    }
  };







  return (
    <>
      <section className='contact-section-hero-cont'>
        {/* <img src={ff} className='img-fluid w-100' /> */}
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
                  <Button variant="primary" onClick={handleShow}>Apply Now</Button>
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
                  <Button variant="primary" onClick={handleShow}>Apply Now</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Form Section */}
            <Col lg={6} md={12}>
              <h3 className="text-centerr">JOIN OUR TEAM</h3>
              <div className="form-background p-4 text-white">
                <Form onSubmit={handleSubmitform}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChangeform} required />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChangeform} required />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" name="phone" placeholder="Enter your mobile number" value={formData.phone} onChange={handleChangeform} required />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" name="message" rows={3} placeholder="Write your message here" value={formData.message} onChange={handleChangeform} />
                  </Form.Group>

                  <Button variant="light" type="submit" className="w-100">
                    Send Application
                  </Button>
                </Form>
              </div>
            </Col>

          </Row>
        </Container>


        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Apply Now</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit} encType="multipart/form-data">
            <Modal.Body>
              <Row>
                <Col lg={6} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name  *</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                  </Form.Group>

                </Col>
                <Col md={6} lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone *</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      isInvalid={!phoneValid}
                      maxLength={10}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid 10-digit phone number.
                    </Form.Control.Feedback>
                  </Form.Group>

                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Email *</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
              </Form.Group>


              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} value={formData.message} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Resume (PDF only) *</Form.Label>
                <Form.Control type="file" name="resume" accept=".pdf" onChange={handleChange} required />
                {uploadProgress > 0 && (
                  <ProgressBar now={uploadProgress} label={`${uploadProgress}%`} className="mt-2" />
                )}
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Cancel</Button>
              <Button variant="primary" type="submit">Submit Application</Button>
            </Modal.Footer>
          </Form>
        </Modal>


        <ToastContainer position="top-right" autoClose={3000} theme="colored" />

      </section>





      <section className="get-in-touch-section py-5">
        <img src={ccc} alt="Welcome " className='left-side-half-circle-get-in-touch-section' />
        <Container fluid>
          <Row className="align-items-center">
            {/* Contact Details */}
            <Col lg={6} xs={12} md={6} className="mb-4 get-tehc-colmn-contact ">
              <h2 className="text-primaryy">Get In Touch</h2>
              <p className='textparagrap1-contact'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s.
              </p>
              <ul className="list-unstyled contact-details">
                <li>
                  <Row>
                    <Col md={1} className="p-0">
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
                    <Col xs={1} md={1} className="p-0">
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
                    <Col md={1} className="p-0">
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
            <Col lg={6} xs={12} md={6}>
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
