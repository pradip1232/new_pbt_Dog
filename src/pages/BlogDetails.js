import React from 'react'




import ff from '../components/img/our company (21).webp';
import { Container, Row } from 'react-bootstrap';




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



            <Container>
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
                    </div>
                </Row>
            </Container>
            {/* 2222222222 */}
            <Container>
                <Row className="mt-5">
                    <div className="col-md-6  col-sm-12 col-10">
                        {/* img here  */}
                    </div>
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

                </Row>
            </Container>

            {/* 3333333333 */}
            <Container>
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
                    </div>
                </Row>
            </Container>

        </>
    )
}

export default BlogDetails
