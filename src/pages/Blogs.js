import React from 'react'
import '../components/css/blog.css';
import ff from '../components/img/BLOG PAGE/blog hero sldider 2.png';
import { Container, Row } from 'react-bootstrap';
import mask from '../components/img/BLOG PAGE/Mask group.png';
import Slider from "react-slick";
import SixCardSlider from '../components/BlogSection/SixCardSlider';
import NumberedSlider from '../components/BlogSection/NumberedSlider';


const Blogs = () => {

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 3 cards per row
    slidesToScroll: 1, // Smooth one-by-one scroll
    rows: 2, // 2 rows
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 2, // Show 1 card per row on smaller screens
          rows: 1,
        },
      },
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 3,
          rows: 2,
        },
      },
    ],
  };

  // Sample data for cards
  const articles = [
    {
      id: 1,
      title: "Unlocking the hidden potential of the biological blueprint",
      description:
        "Through genetics and precision analytics, scientists aim to transform the future of animal care.",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URLs
    },
    // Repeat for additional articles
    { id: 2, title: "Another Article", description: "Short description", image: "https://via.placeholder.com/300x200" },
    { id: 3, title: "Third Article", description: "Short description", image: "https://via.placeholder.com/300x200" },
    { id: 4, title: "Fourth Article", description: "Short description", image: "https://via.placeholder.com/300x200" },
    { id: 5, title: "Fifth Article", description: "Short description", image: "https://via.placeholder.com/300x200" },
    { id: 6, title: "Sixth Article", description: "Short description", image: "https://via.placeholder.com/300x200" },
  ];











  return (
    <>
      <section className='section-blogs-hero-container'>
        <img src={ff} className='img-fluid w-100' />
        <div className='blog-section-hero-imagesText'>
          <div className='blog-hero-images text-center'>
            <h2>Blogs</h2>
            <hr className='hr-blog-hero' />
          </div>
        </div>

      </section>



      <section className='blogs-girl-with-dog-section'>
        <Container>
          <Row>
            <div className="col-md-6 col-sm-12">
              <img src={mask} className='img-fluid w-100' />
            </div>
            <div className="col-md-6 col-sm-12 text-content-blogs2">
              <span>Advancing Veterinary Care: Knowledge Hub</span>
              {/* <h4>Your Trusted Source for Animal Healthcare Insights.</h4> */}
              <p>At PANAV BIOTECH, we are passionate about advancing animal health and wellness. This blog is your go-to destination for insights, updates, and expert knowledge in veterinary pharmaceuticals and animal care.
                <br />
                <br />
                Whether you’re a veterinarian, livestock farmer, pet owner, or industry professional, we’re here to inform you about the latest innovations, trends, and best practices in animal health. From cutting-edge research and product highlights to practical tips for improving animal care, we aim to support you every step of the way.
                <br />
                <br />
                Together, let’s build a healthier and more sustainable future for animals and those who care for them. Stay tuned, stay informed, and join us in our mission to make a difference.</p>
            </div>
          </Row>
        </Container>
      </section>







      <section>
        <SixCardSlider />
      </section>




      <section>
        <NumberedSlider />
      </section>



    </>
  )
}

export default Blogs
