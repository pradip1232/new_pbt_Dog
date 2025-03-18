import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



import f1 from '../images/IMG (178).webp';
import f2 from '../images/IMG (123).webp';
import f3 from '../images/IMG (76).webp';



const UnlockingSlider = () => {
    const cardData = [
        {
            image: f1,
            title: 'Blog',
            subtitle: 'Pee Training in Dogs',
            description:
                'It is fairly simple to house train dogs of any age. Initially, the most important thing is the quick response. If your dog starts to pee indoors',
        },
        {
            image: f2,
            title: 'Blog',
            subtitle: 'A Day With Dog',
            description:
                'Today we are more engrossed in our busy lives than ever and are giving less time to more important things like spending time with our dogs.',
        },
        {
            image: f3,
            title: 'Blog',
            subtitle: 'The Importance of Immunization for Dogs and Cats',
            description:
                'Our veterinarian want every pet owner to know the importance of vaccinating your pet. Vaccinating your pet can also prevent the spread of diseases.',
        },
        // {
        //     image: '/path-to-more.jpg',
        //     title: 'Blog',
        //     subtitle: 'Unlocking the hidden potential of the biological blueprint',
        //     description:
        //         'Through genetics and precision analytics, scientists aim to transform the future of animal care by enabling healthier and more productive herds.',
        // },
    ];

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
        mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
    };


    return (
        <>
            <Container className="unlockng-container-home">
                <Row className="justify-content-center">
                    <Col xs={10} md={12} lg={12}>
                        <div className="card-slider">
                            <Carousel
                                responsive={responsive}
                                infinite
                                autoPlay
                                autoPlaySpeed={3000}
                                keyBoardControl
                                showDots
                                arrows={false}
                                className="custom-carousel"
                            >
                                {cardData.map((card, index) => (
                                    <div key={index} className="slider-item">
                                        <Card className="h-100 d-flex flex-column card-equal-height">
                                            <Card.Img variant="top" src={card.image} alt={card.title} className="card-img-top" />

                                            {/* Wrapper to ensure consistent height */}
                                            <div className="blog-card-home-body-footer d-flex flex-column flex-grow-1">
                                                <Card.Body className="d-flex flex-column flex-grow-1">
                                                    <Card.Title className="text-left">{card.title}</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">{card.subtitle}</Card.Subtitle>
                                                    <Card.Text className="flex-grow-1">{card.description}</Card.Text>
                                                </Card.Body>

                                                {/* Footer ensures button stays at the bottom */}
                                                <Card.Footer className="mt-auto">
                                                    <Button variant="primary" className=" readmore-bloging-home-btn">
                                                        Read more
                                                    </Button>
                                                </Card.Footer>
                                            </div>
                                        </Card>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default UnlockingSlider
