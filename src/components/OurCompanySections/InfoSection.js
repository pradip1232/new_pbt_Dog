import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import '../css/InfoSection.css'; // Additional custom CSS if needed
import 'bootstrap/dist/css/bootstrap.min.css';
import mm from '../img/OUR COMPANY/our company (21).png';



import f1 from '../images/IMG (216).webp';
import f2 from '../images/IMG (217).webp';
import f3 from '../images/IMG (218).webp';
import f4 from '../images/IMG (208).webp';
import f5 from '../images/IMG (222).webp';

const InfoSection = () => {
  const infoData = [
    {
      id: 1,
      icon: "🐕‍🦺", // Replace with the actual icon
      title: "Market leadership in the Domestic Veterinary Sector",
    },
    {
      id: 2,
      icon: "📦", // Replace with the actual icon
      title: "Over 100+ Stockists Across India",
    },
    {
      id: 3,
      icon: "🏥", // Replace with the actual icon
      title: "Over 4,000 Client's encompassing Veterinary Hospitals and Veterinary Clinics",
    },
  ];










  const teamMembers = [
    {
      name: "MR. ASHOK KUMAR CHOPRA",
      position: "CHAIRMAN",
      description:
        "Our Esteemed Chairman, Mr. Ashok Kumar Chopra, has been instrumental in the company's success. With over three and a half decades of extensive experience in the field.\n\nMr. Chopra embodies the values of vision, integrity, and unwavering commitment to the advancement of animal healthcare.",
      image: f4,
    },
    {
      name: "DR. PUNEET CHOPRA",
      position: "MANAGING DIRECTOR",
      description:
        "Doctor of Business Administration (California Public University, USA). Over 23 years of demonstrated success in driving business growth and overseeing the veterinary industry.\n\nProven ability to ensure that the veterinary industry is fully integrated and strategically aligned to exceed profitability targets.",
      image: f4,
    },
  ];



  const authorities = [
    { name: "National Business Manager" },
    { name: "Sales Manager" },
    { name: "Commercial Manager" },
    { name: "HR Manager" },
  ];
  return (

    <>

      <section className="veterinary-section-company">
        <Container >
          <Row className="align-items-stretch text-center">
            <Col lg={4} md={6} sm={12} className="mb-4">
              <Card className="info-card h-100 d-flex flex-column">
                <div className="icon-circle">
                  {/* <i className="fas fa-user-md"></i> */}
                  <img src={f1} className='i-con-img' />
                </div>
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Text>
                    <strong>Market leadership</strong> in the <br />
                    <strong>Domestic Veterinary Sector</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} sm={12} className="mb-4">
              <Card className="info-card h-100 d-flex flex-column">
                <div className="icon-circle">
                  {/* <i className="fas fa-store"></i> */}
                  <img src={f2} className='i-con-img' />

                </div>
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Text>Over
                    <strong> 100+ Stockists</strong> Across India
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} sm={12} className="mb-4">
              <Card className="info-card h-100 d-flex flex-column">
                <div className="icon-circle">
                  {/* <i className="fas fa-clinic-medical"></i> */}
                  <img src={f3} className='i-con-img' />

                </div>
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Text>Over
                    <strong> 4,000 Clients</strong> encompassing <br />
                    Veterinary Hospitals and Clinics
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>



      <section className="team-section py-5">
        <Container>
          <h2 className="text-center ">OUR TEAM</h2>
          {teamMembers.map((member, index) => (
            <Row
              key={index}
              className="align-items-center mb-4"
            >
              <Col lg={10} md={11} sm={12} className="mx-auto">
                <Card className="team-card">
                  <Row className="align-items-center">
                    <Col md={8} sm={12}>
                      <Card.Body>
                        <div className="quote-icon">“</div>
                        <div className='teamcard-white-bg'>

                          <Card.Text className="mb-3">{member.description}</Card.Text>
                          <h5 className="member-name">{member.name}</h5>
                          <p className="member-position">({member.position})</p>
                        </div>
                      </Card.Body>
                    </Col>
                    <Col md={4} sm={12} className="text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="team-image"
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          ))}
        </Container>
      </section>


      <section className='senior-authorities-section'>
        <Container className="text-center my-5">
          <h2 className="fw-bold">SENIOR AUTHORITIES</h2>
          <Row className="justify-content-center">
            {authorities.map((authority, index) => (
              <Col
                key={index}
                xs={12}
                sm={6}
                md={3}
                className="d-flex flex-column align-items-center my-3"
              >
                <div
                  className="rounded-circle overflow-hidden border border-primary"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={f5}
                    alt={authority.name}
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <h5 className="mt-2 fw-bold">NAME</h5>
                <p className="text-primaryy">({authority.name})</p>
              </Col>
            ))}
          </Row>
        </Container>

      </section>


    </>
  );
};

export default InfoSection;
