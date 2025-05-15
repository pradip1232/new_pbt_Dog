import React, { useState } from 'react'
import f from '../components/img/Group 285.png';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../components/css/research.css';
import mask from '../components/img/Mask group.png';
import mm from '../components/img/Modern abstract four elements infographic template 1.png';

import f1 from '../components/images/IMG (220).webp';


import i1 from '../components/images/icons 1 1-1.webp';
import i2 from '../components/images/icons 1 1-2.webp';
import i3 from '../components/images/icons 1 1-3.webp';
import i4 from '../components/images/icons 1 1.webp';
import { motion, AnimatePresence } from "framer-motion";


import { useInView } from "react-intersection-observer";





const Research = () => {
  const cardData = [
    {
      title: 'Integrated Innovation',
      description:
        'Create integrated solutions and ideas, developing new ways of producing and caring for animals, with less impact, simplicity and more efficiency.',
      icon: 'bi bi-lightbulb',
    },
    {
      title: 'Engage and Collaborate',
      description:
        'Thinking and acting more widely in the animal health space, involving, connecting and working in collaboration with our clients, partners, and community in a movement of transformation and evolution of the sector.',
      icon: 'bi bi-people',
    },
    {
      title: 'Building and Nourishing Relationships',
      description:
        'Establish open and transparent ways to inspire, invest, connect, collaborate, and do business/grow together.',
      icon: 'bi bi-people-fill',
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);



  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const iconVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };


  return (
    <>
      <section className='research-and-innovation-section-hero'>
        {/* <img src={f} className='img-fluid w-100' /> */}
        <Container className='research-and-innovation-heading-hero text-center'>
          <h1>Research and Innovation</h1>
          <hr />
        </Container>
      </section>




      <section className="hover-cards-section py-5">
        <Container>
          <Row className="g-4">
            {cardData.map((card, index) => (
              <Col key={index} md={4}>
                <Card className="hover-card text-center h-100">
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                      <div className="icon mb-3">
                        <i className={`${card.icon} text-primary`}></i>
                      </div>
                      <Card.Title className="mb-3">{card.title}</Card.Title>
                      <Card.Text>{card.description}</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>


      <section>
        <Container className="py-5" ref={ref}>
          <Row className="align-items-center">
            {/* Left Side - Background Image and Four Icons */}
            <Col md={6} className="text-center modran-image-colomn position-relative">
              <img src={mm} className="img-fluid w-100" alt="Background" />

              <Row className="four-cards-text-research d-flex align-items-center justify-content-center">
                {[{ img: i4, label: "PREDICT" },
                { img: i3, label: "DETECT" },
                { img: i1, label: "TREAT" },
                { img: i2, label: "PREVENT" }].map((item, i) => (
                  <Col xs={6} className="mb-3" key={i}>
                    <motion.div
                      className="care-box text-center"
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      custom={i}
                      variants={iconVariants}
                    >
                      <img src={item.img} alt={item.label} className="mb-2" />
                      <h5 className="fw-bold">{item.label}</h5>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </Col>

            {/* Right Side - Text Content */}
            <Col md={6} className="continum-colmn">
              <h2 className="text-primaryrr">Continuum of Care</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <Button variant="primary">Read More</Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='animal-section-research'>
        <Container>
          <Row>
            <Col md={6}>
              <h2>ANIMAL CARE AND WELFARE</h2>
              <p>
                Animal-based research remains critical in the discovery,
                evaluation and regulatory processes for the development
                and production of animal health products.
              </p><p>

                We are committed to ensuring that animal used in our research
                and medicine production are treated ethically and humanely.
              </p>
              <Button>Learn More</Button>
            </Col>
            <Col md={6}>
              <img src={mask} className='img-fluid w-100' />
            </Col>
          </Row>
        </Container>
      </section>

    </>
  )
}

export default Research
