import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const UnlockingSlider = () => {


    const cardData = [
        {
            image: '/path-to-dog.jpg',
            title: 'Blog',
            subtitle: 'Unlocking the hidden potential of the biological blueprint',
            description:
                'Through genetics and precision analytics, scientists aim to transform the future of animal care by enabling healthier and more productive herds.',
        },
        {
            image: '/path-to-horse.jpg',
            title: 'Blog',
            subtitle: 'Unlocking the hidden potential of the biological blueprint',
            description:
                'Through genetics and precision analytics, scientists aim to transform the future of animal care by enabling healthier and more productive herds.',
        },
        {
            image: '/path-to-cat.jpg',
            title: 'Blog',
            subtitle: 'Unlocking the hidden potential of the biological blueprint',
            description:
                'Through genetics and precision analytics, scientists aim to transform the future of animal care by enabling healthier and more productive herds.',
        },
        {
            image: '/path-to-more.jpg',
            title: 'Blog',
            subtitle: 'Unlocking the hidden potential of the biological blueprint',
            description:
                'Through genetics and precision analytics, scientists aim to transform the future of animal care by enabling healthier and more productive herds.',
        },
    ];

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
        mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
    };


    return (
        <>
            <Container className='unlockng-container-home'>
                <Row>
                    <Col xs={12} md={12} lg={12}>

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
                                        <Card>
                                            <Card.Img variant="top" src={card.image} alt={card.title} />
                                            <Card.Body>
                                                <Card.Title>{card.title}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">{card.subtitle}</Card.Subtitle>
                                                <Card.Text>{card.description}</Card.Text>
                                                <Button variant="primary">Read more</Button>
                                            </Card.Body>
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
