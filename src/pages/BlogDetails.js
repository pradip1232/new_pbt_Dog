import React from 'react'




import ff from '../components/img/our company (21).webp';
import { Container, Row } from 'react-bootstrap';

import fff from '../components/images/IMG (120).webp';
import ff2 from '../components/images/IMG (161).webp';
import ff3 from '../components/images/IMG (175).webp';


const BlogDetails = () => {
    return (
        <>

            <Container fluid className='p-0'>
                <img src={ff} className='img-fluid' />
                <div className='blue-bg-blog-details'>
                    <h1 className='text-white'>Pee Training in Dogs</h1>
                </div>
                <Container className='text-center container-p-details-blogs'>
                    <Row className='mt-5 justify-content-center'>
                        <div className="col-md-10 col-sm-10 col-10">
                            <p>
                                It is fairly simple to house train dogs of any age. Initially, the most important thing is the quick response. If your dog starts to pee indoors, take it outside immediately. Eventually, your dog will learn to wait.
                            </p>

                        </div>
                    </Row>
                </Container>
                <hr />
            </Container>



            <Container className='blog-details-content-text-blog-details'>
                <Row className="mt-5">
                    <div className="col-md-6  col-sm-12 col-10">
                        <div className='first-content-text-blog-details'>

                            <h2 className="text-left">1. Build a routine</h2>
                            <p className="text-left">Having a daily routine is important for dogs of any age but its initially important for younger dogs as their bladders are small. In addition to this, its also important to let your dog out first thing in the morning, during or after playtime, after he/she has eaten a meal or drank a lot of water.</p>
                        </div>
                        <div className='second-content-text-blog-details'>

                            <h2 className="text-left">2.  Let your dog have a fixed bathroom spot</h2>
                            <p className="text-left">Whether you take your dog for a walk or let them outside on their own in a fenced-in-enclosure, your dog needs to have a routine spot where he urinates.

                                Stay outside with the dog when you take it to go to the bathroom. When you stay outside you can make sure your dog relieves itself and doesn’t play or do something else. You can also praise it after going to the bathroom which can train the dog much better.</p>
                        </div>

                    </div>
                    <div className="col-md-6  col-sm-12 col-10">
                        {/* img here  */}
                        <img src={fff} />
                    </div>
                </Row>
            </Container>
            {/* 2222222222 */}
            <Container className='blog-details-content-text-blog-details'>
                <Row className="mt-5">
                    <div className="col-md-6  col-sm-12 col-10">
                        {/* img here  */}
                        <img src={ff2} />
                    </div>
                    <div className="col-md-6  col-sm-12 col-10">
                        <div className='first-content-text-blog-details'>

                            <h2 className="text-left">3.  Reward good behaviour</h2>
                            <p className="text-left">Use verbal commands with your dog’s chosen bathroom spot or with any spot. Use a single command for this behaviour and over a while your dog will recognize it and recall the associated act with urinating. Praise them when they urinate on their usual spot. </p> </div>
                        <div className='second-content-text-blog-details'>

                            <h2 className="text-left">4.  Use hand gestures</h2>
                            <p className="text-left">You can use hand gestures to teach your dog. You can also command using hands. Once the dog understands it and urinates, praise him and show them love and affection. You can also use treats for your dogs. </p>    </div>

                    </div>

                </Row>
            </Container>

            {/* 3333333333 */}
            <Container className='blog-details-content-text-blog-details'>
                <Row className="mt-5">
                    <div className="col-md-6  col-sm-12 col-10">
                        <div className='first-content-text-blog-details'>

                            <h2 className="text-left">5.  Water Schedule</h2>
                            <p className="text-left">Pick up your dog’s water dish about two and a half hours before bedtime to reduce the likelihood that they’ll need to relieve themselves during the night. Most dogs can sleep for approximately 7-8 hours without needing a bathroom break. If your puppy does wake up in the night, don’t make a big deal of it otherwise they will think it is time to play and won’t want to go back to sleep.
                                <br />
                                Training your dog is an easy job. But if your dog relieves himself in the house, do not scold them. They may get scared of you and will try to find places in the house where you won’t be able to find out. </p></div>
                      

                    </div>
                    <div className="col-md-6  col-sm-12 col-10">
                        {/* img here  */}
                        <img src={ff3} />
                    </div>
                </Row>
            </Container>

        </>
    )
}

export default BlogDetails
