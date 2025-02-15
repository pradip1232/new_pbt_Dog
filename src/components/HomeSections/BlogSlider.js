import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/BlogSlider.css'; // Import any custom styles here
import { Autoplay } from 'swiper/modules';

const BlogSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,// Add this line
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet & medium devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const blogPosts = [
    {
      title: 'Unlocking',
      shortDes: 'hello',
      description:
        'Through genetics and precision analytics, scientists aim to transform the future of animal care by creating healthier and more productive herds.',
      image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
    },
    {
      title: 'Blog 2',
      shortDes: 'hello',
      description:
        'Through genetics and precision analytics, scientists aim to transform the future of animal care by creating healthier and more productive herds.',
      image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
    },
    {
      title: 'Blog 3',
      shortDes: 'hello',
      description:
        'Through genetics and precision analytics, scientists aim to transform the future of animal care by creating healthier and more productive herds.',
      image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
    },
  ];

  return (
    <div className="container testimonial-sections-home">
      <Slider {...settings}>
        {blogPosts.map((post, index) => (
          <div key={index} className="card testimonial-card">
            <div className="card-header d-flex align-items-center">
              <div className="name-first-letter-section">
                <div className="circle-first-letter">
                  <span>{post.title.charAt(0)}</span>
                </div>
              </div>
              <div className="text-content-section-name">
                <h4>{post.title}</h4>
                <p>{post.shortDes}</p>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">{post.description}</p>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn btn-primaryy">
                Read More
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>

  );
};

export default BlogSlider;
