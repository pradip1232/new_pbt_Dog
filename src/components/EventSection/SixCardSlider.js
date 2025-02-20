import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ff from '../img/EVENT PAGE/People taking part of high protocol event.png';

const SixCardSlider = () => {
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // rows: 1, // 1 rows
        rows: 2, // 2 rows
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    rows: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    rows: 1,
                },
            },
        ],
    };

    // Sample data for cards
    const articles = [
        { id: 4, title: "VETopia 2023", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", image: ff },
        { id: 5, title: "VETopia 2024", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", image: ff },
        { id: 6, title: "VETopia 2023", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", image: ff },
        { id: 1, title: "Sava 2021", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", image: ff },
        { id: 2, title: "Sava 2021", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", image: ff },
        { id: 3, title: "PLRC 2024", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", image: ff },
    ];

    return (
        <div className="container mt-5 mb-5 letest-articals-sections-blog events-section-card">
            {/* <h2 className="text-center">Latest Articles</h2> */}
            <Slider {...settings}>
                {articles.map((article) => (
                    <div key={article.id} className="card-container">
                        <div className="card">
                            <img src={article.image} className="card-img-top" alt={article.title} />
                            <div className="card-body text-center">
                                {/* <span className="badge bg-primary">Blog</span> */}
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text">{article.description}</p>
                                <a href="blog-details" className="btn btn-primary mt-auto read-more-blogs-btn text-center">Read more</a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SixCardSlider;
