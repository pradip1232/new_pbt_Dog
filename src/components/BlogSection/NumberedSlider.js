import React from "react";
import Slider from "react-slick";
import ff from '../img/BLOG PAGE/blog img 1.png';

const NumberedSlider = () => {
    // Slick slider settings
    const settings = {
        dots: true,     
        infinite: true,     
        speed: 500,     
        slidesToShow: 4,    
        slidesToScroll: 1,  
        autoplay: true,     
        autoplaySpeed: 2000,    
        responsive: [
            {
                breakpoint: 768, // For mobile screens
                settings: {
                    slidesToShow: 1, // Show one slide at a time
                },
            },
            {
                breakpoint: 1024, // For tablet screens
                settings: {
                    slidesToShow: 2, // Show two slides at a time
                },
            },
        ],
    };

    // Array of steps (1 to 10)
    const steps = [
        { id: 1, title: "Define Blog Purpose and Target Audience", describe: "Our blog is dedicated to providing valuable insights, expert tips, and the latest updates tailored for pet owners, industry professionals. Designed to educate, engage, and inspire, it serves as a trusted resource for readers seeking practical knowledge and actionable solutions in Veterinary Pharmaceutical." },
        { id: 2, title: "Plan the Blog Content Strategy", describe: "Our blog is dedicated to providing valuable insights, expert tips, and the latest updates tailored for pet owners, industry professionals. Designed to educate, engage, and inspire, it serves as a trusted resource for readers seeking practical knowledge and actionable solutions in Veterinary Pharmaceutical." },
        { id: 3, title: "Write Engaging and Structured Blog Posts", describe: "Crafting blog posts that captivate readers requires a blend of creativity, clarity, and structure. By focusing on compelling headlines, well-organized sections, and relatable content, we ensure every post is informative and engaging." },
        { id: 4, title: "Optimize for SEO and Readability", describe: "Our approach combines smart SEO strategies with reader-friendly content to ensure maximum reach and engagement." },
        { id: 5, title: "Promote Your Blog Effectively", describe: "Our approach combines smart SEO strategies with reader-friendly content to ensure maximum reach and engagement." },
        { id: 6, title: "Analyze Blog Performance", describe: "Our approach combines smart SEO strategies with reader-friendly content to ensure maximum reach and engagement." },
        { id: 7, title: "Engage with Your Audience", describe: "Our approach combines smart SEO strategies with reader-friendly content to ensure maximum reach and engagement." },
        { id: 8, title: "Update Content Regularly", describe: "Our approach combines smart SEO strategies with reader-friendly content to ensure maximum reach and engagement." },
        { id: 9, title: "Expand Your Blog’s Reach", describe: "Our approach combines smart SEO strategies with reader-friendly content to ensure maximum reach and engagement." },
        // { id: 10, title: "Monetize Your Blog Strategically" },
    ];

    return (


        <section className="number-section-blog-pages">
            <div className="container number-container-slider">
                <h2 className="text-center step-main-heading">Some Easy Steps to Process</h2>
                <Slider {...settings}>
                    {steps.map((step, index) => (
                        <div key={step.id} className="step-wrapper">
                            {/* Add a horizontal line for every card except the last one */}
                            {index < steps.length && <div className="step-line"></div>}
                            <div className="card step-card text-center" >
                                <div className="card-header text-center">
                                    <div className="step-number">{`0${step.id}`}</div>
                                </div>
                                <div className="card-body">
                                    <h5 className="step-title">{step.title}</h5>
                                    <p className="step-description">{step.describe}</p>
                                </div>

                            </div>


                        </div>
                    ))}
                </Slider>
            </div>
        </section>

    );
};

export default NumberedSlider;
