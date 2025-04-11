import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/BlogSlider.css'; // Import any custom styles here
import { Autoplay } from 'swiper/modules';

import cc from '../images/PBT REMAIMING IMG (2).webp';


import ss from '../images/IMG (192).webp';
const BlogSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
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
      title: 'Birendra Kumar ',
      shortDes: 'Pet Owner Owner',
      description:
        '1.	My vet has recommended Panav Biotech for my dog’s vaccinations and medicines. Even I trust their products as it shown very good results in recovery. I always recommended all Furry companion parents to try their vaccines & medicines for ',
      image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
    },
    {
      title: 'Preeti Jethamalani',
      shortDes: 'Veterinarian',
      description:
        '2.	I Love to treat animals and that’s the reason I entered into this field to spend as much time possible with these amazing creatures. To Take of their health, I do trust and recommended Panav Biotech',
      image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
    },
    {
      title: 'Dr. Gautam Anand ',
      shortDes: 'M.V.Sc, Surgical Specialist Anand Pet’s Clinic  (New Delhi)',
      description:
        '	Panav biotech has taken this novel initiative to bring world class nutraceuticals from one of the top Italian company Candioli Pharma. It helps us to provide best quality Nutraceuticals for chronic diseases like Arthritis , CKD and hepatitis to our pet patients',
      image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
    },
    {
      title: 'Dr. Kshitij B. Bane ',
      shortDes: 'Dr Banes Pet clinic Veterinary Physican B.V.Sc & AH., M.V.Sc, Andheri East Mumbai.',
      description:
        '	High Regards to the products marketed by Panav Biotech & Candioli Pharma Bolovia, Poochrex & Pooch Nome. I have personally used these products and i am highly satisfied with quality and resulted oriented products. Thanks Panav Biotech',
      image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
    },
    {
      title: 'Dr. Milind Mhatre M.V.Sc (Medicine) ',
      shortDes: 'COMPLETE PET CARE CLINIC Pune.',
      description:
        'I have been using products from Candioli Pharma and Panav Biotech from several years and i am very much satisfied & happy with result of their range of products.Especially Renal P & Renal N have been very impressive in results also the vaccine Vencomax 11 & Vencomax 8 are found to be very effective.',
      image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
    },
    {
      title: 'Dr. Vaibhav Jamma  ',
      shortDes: "Vaibhav's pet clinic, Kalyan, Thane",
      description:
        'Long term usage of Hexia  in chronic pain is a far better option and usage of Hexia with Confis Ultra give the super imposed result for betterment of pets health loooking forward to more safe systemic products from Panav Biotech.',
      image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
    },
  ];

  return (
    <section className='testimonial-sections-home-sections'>
      <img src={cc} alt="left side image " className="left-side-half-circle circle-img-sliderunlockong" />
      <div className="container testimonial-sections-home">
  <Slider {...settings}>
    {blogPosts.map((post, index) => (
      <div key={index} className="h-100">
        <div className="card testimonial-card h-100 d-flex flex-column">
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

          <div className="star-blog-section-home mx-4 d-flex mb-2">
            <img src={ss} alt="star" />
            <img src={ss} alt="star" />
            <img src={ss} alt="star" />
            <img src={ss} alt="star" />
          </div>

          <div className="card-body flex-grow-1">
            <p className="card-text">{post.description}</p>
          </div>

          <div className="card-footer text-left mt-auto">
            <a href="#" className="btn btn-primaryy">
              Read More...
            </a>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>

      <img src={cc} className='right-side-half-circle circle-img-sliderunlockong-right' />
    </section>


  );
};

export default BlogSlider;
