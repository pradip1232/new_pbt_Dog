import React from 'react'

import '../components/css/prouct.css';



import ff from '../components/img/PRODUCT PAGE/our product slider img 2.png';
import fd from '../components/img/PRODUCT PAGE/Group 276.png';
import fs from '../components/img/PRODUCT PAGE/Group 277.png';
import ft from '../components/img/PRODUCT PAGE/Group 278.png';
import { Button, Card, CardBody, CardImg, CardTitle, Container, Row } from 'react-bootstrap';
import ProductFilterPage from '../components/OurProductPages/ProductFilterPage';


const Products = () => {
  return (
    <>
      <section className="our-product-section-cont">
        <img
          src={ff}
          className="img-fluid w-100 position-relative our-product-images"
          alt="Our Products"
        />
        <div className="our-product-section-cont-text">
          <Container className="container-text-card-product">
            {/* Section Title */}
            <Row className="our-product-section-text-row">
              <div className="col-md-12 col-lg-12 text-center">
                <h2>Our Products</h2>
                <hr className="our-product-hr" />
              </div>
            </Row>

            {/* Cards Section */}
            <Row className="our-product-section-cards">
              <div className="col-12 col-md-4 col-xs-12 col-lg-4 d-flex justify-content-center">
                <Card className="product-card">
                  <CardImg src={fd} alt="Orion Division" className="img-fluid" />
                  <CardBody>
                    <Button>ORION DIVISION</Button>
                    <CardTitle>Biological & Diagnostics</CardTitle>
                  </CardBody>
                </Card>
              </div>

              <div className="col-12 col-md-4 col-xs-12 col-lg-4 d-flex justify-content-center">
                <Card className="product-card">
                  <CardImg src={fs} alt="Regal Division" className="img-fluid" />
                  <CardBody>
                    <Button>REGAL DIVISION</Button>
                    <CardTitle>Innovative Therapeutic Solutions</CardTitle>
                  </CardBody>
                </Card>
              </div>

              <div className="col-12 col-md-4 col-xs-12 col-lg-4 d-flex justify-content-center">
                <Card className="product-card">
                  <CardImg src={ft} alt="Iris Division" className="img-fluid" />
                  <CardBody>
                    <Button>IRIS DIVISION</Button>
                    <CardTitle>Global Nutraceuticals</CardTitle>
                  </CardBody>
                </Card>
              </div>
            </Row>
          </Container>
        </div>
      </section>



      <ProductFilterPage />



    </>
  )
}

export default Products
