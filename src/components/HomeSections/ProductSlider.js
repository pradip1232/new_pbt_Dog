// ProductSlider.js
import React from "react";
import Slider from "react-slick";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import first from '../img/HOMEPAGE/webp/Acepron Injcetion 1.webp';
import '../css/ProductSlider.css';
const ProductSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const products = [
        { id: 1, name: "Product 1", icon: "🚀", image: first },
        { id: 2, name: "Product 2", icon: "💊", image: first },
        { id: 3, name: "Product 3", icon: "🛒", image: first },
        { id: 4, name: "Product 4", icon: "🔬", image: first },
        { id: 5, name: "Product 5", icon: "⚗️", image: first },
    ];

    return (
        <Container className="mt-5 product-slider-home">
            <h2 className="text-center mb-4">NEW LAUNCH</h2>
            <Slider {...settings}>
                {products.map((product) => (
                    <div key={product.id}>
                        <Card className="product-card">
                            <Card.Img variant="top" src={product.image} />
                            <div className="product-icon">{product.icon}</div>
                            <Card.Body>
                                <Card.Title className="card-title">{product.name}</Card.Title>
                                <Card.Text className="card-text">
                                    Lorem ipsum is simply dummy text
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Slider>
        </Container>
    );
};

export default ProductSlider;
