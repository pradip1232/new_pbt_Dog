// ProductSlider.js
import React from "react";
import Slider from "react-slick";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import first from '../img/HOMEPAGE/webp/Acepron Injcetion 1.webp';
import '../css/ProductSlider.css';

import f1 from '../images/IMG (48).webp';
import f2 from '../images/IMG (49).webp';
import f3 from '../images/IMG (50).webp';
import f4 from '../images/IMG (47).webp';








import img1 from '../images/IMG (138).webp';
import img2 from '../images/IMG (121).webp';
import img3 from '../images/IMG (126).webp';
import img4 from '../images/IMG (148).webp';
import img5 from '../images/IMG (136).webp';


const ProductSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
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
        { id: 1, name: "Niakoat 250/500mg", icon: f1, image: img1 },
        { id: 2, name: "Ipettizer", icon: f2, image: img2 },
        { id: 3, name: "Maropitine Injection", icon: f3, image: img3 },
        { id: 4, name: "PBT Wound Sheild Powder", icon: f4, image: img4 },
        { id: 5, name: "Navole Suspension", icon: f1, image: img5 },
    ];

    return (
        <Container className="mt-5 product-slider-home">
            <h2 className="text-center mb-4">NEW LAUNCH</h2>
            <Slider {...settings}>
                {products.map((product) => (
                    <div key={product.id}>
                        <Card className="product-card">
                            <Card.Header >

                                <Card.Img variant="top" src={product.image} />
                            </Card.Header>
                            {/* <div className="product-icon">{product.icon}</div> */}
                            <Card.Body>
                                <img src={product.icon} alt={product.name} className="product-icon" />
                                <Card.Title className="card-title">{product.name}</Card.Title>
                                {/* <Card.Text className="card-text">
                                    Lorem ipsum is simply dummy text
                                </Card.Text> */}
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Slider>
        </Container>
    );
};

export default ProductSlider;
