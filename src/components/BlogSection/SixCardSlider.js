import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import d1 from '../images/IMG (176).webp';
import d2 from '../images/IMG (79).webp';
import d3 from '../images/IMG (76).webp';
import { Dice3Icon } from "lucide-react";
import cc from '../images/PBT REMAIMING IMG (2).webp';
const SixCardSlider = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 1, // 1 rows
    // rows: 2, // 2 rows
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
    { id: 4, title: "Pee Training in Dogs", description: "It is fairly simple to house train dogs of any age. Initially, the most important thing is the quick response. If your dog starts to pee indoors, take it outside immediately.", image: d1 },
    { id: 5, title: "A Day With Dog", description: "Today we are more engrossed in our busy lives than ever and are giving less time to more important things like spending time with our dogs. Unfortunately, there", image: d2 },
    { id: 6, title: "The Importance of Immunization for Dogs and Cats", description: "Our veterinarian want every pet owner to know the importance of vaccinating your pet.", image: d3 },
  ];

  return (
    <div className="container mt-5 letest-articals-sections-blog">
      <h2 className="text-center">Latest Articles</h2>
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
      <img src={cc} alt="Welcome " className='right-side-half-circle-blogs' />

    </div>
  );
};

export default SixCardSlider;
