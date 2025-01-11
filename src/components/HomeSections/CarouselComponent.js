import { Carousel, Col, Container, Row } from 'react-bootstrap';
import dog from '../img/homepage (2).webp';
import pp from '../img/product page (8).webp';
import gg from '../img/Group 285.png';
import '../css/CarouselComponent.css';

function CarouselComponent() {
    const slides = [
        {
            id: 1,
            image: dog,
            title: 'Pioneering Healthcare Innovation',
            description: 'As a leader in the Indian healthcare industry, PANAV BIO TECH is dedicated to pushing the boundaries of medical science.',
        },
        {
            id: 2,
            image: pp,
            title: 'Advancing Wellness Solutions',
            description: 'We deliver groundbreaking health solutions, ensuring quality and innovation for a healthier tomorrow.',
        },
        {
            id: 3,
            image: gg,
            title: 'Shaping the Future of Healthcare',
            description: 'With cutting-edge technology, we strive to create a lasting impact in the global health landscape.',
        },
    ];

    return (
        <Carousel interval={3000} fade={true} pause="hover" indicators={true}>
            {slides.map((slide) => (
                <Carousel.Item key={slide.id} className="carousel-item">
                    {/* Background Image */}
                    <div className="carousel-images-home">
                        <img src={slide.image} alt={`Slide ${slide.id}`} className="img-fluid w-100" />
                    </div>

                    {/* Caption */}
                    <Carousel.Caption className="text-hero-slider-home">
                        <Container className='text-area-home-heading'>
                            <Row>
                                <Col md={6} className='text-left p-0'>
                                    <h2 className="fw-bold">{slide.title}</h2>
                                    <p>{slide.description}</p>
                                </Col>
                            </Row>
                        </Container>
                        <hr className="hr-home-hero-slider" />
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CarouselComponent;
