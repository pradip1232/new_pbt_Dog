import React, { useEffect, useState } from 'react'
import '../components/css/events.css';

import { Button, Container, Modal } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import f1 from '../components/img/EVENT PAGE/event img 1 1.png';
import f11 from '../components/images/Image 1.JPG';
import f2 from '../components/img/EVENT PAGE/webinar 1.png';
import f3 from '../components/img/EVENT PAGE/digital publication 1.png';
import SixCardSlider from '../components/EventSection/SixCardSlider';

import cc from '../components/images/PBT REMAIMING IMG (2).webp';

import video from '../components/images/ri_video-fill.png';
import { PlayCircle } from 'lucide-react';

import vvv from '../components/images/events_vdd/Video for top .mp4';



const Events = () => {
  const [latestWebinar, setLatestWebinar] = useState(null);
  const [latestPublication, setLatestPublication] = useState(null);


  // Fetch the latest webinar on mount
  useEffect(() => {
    const fetchWebinar = async () => {
      try {
        const response = await fetch('http://localhost/pbt/get-webinar.php');
        const result = await response.json();

        if (result.success && result.data) {
          setLatestWebinar(result.data);
        } else {
          setLatestWebinar(null);
        }
      } catch (err) {
        console.error(err);
        toast.error('❌ Failed to fetch webinar info.');
      }
    };

    fetchWebinar();
  }, []);


  const handleJoinNow = async () => {
    if (latestWebinar && latestWebinar.link_url) {
      window.open(latestWebinar.link_url, '_blank');
    } else {
      toast.warning('🛑 No webinar is currently available. Please check back later.');
    }
  };







  // Fetch the latest publication on mount
  useEffect(() => {
    const fetchPublication = async () => {
      try {
        const response = await fetch('http://localhost/pbt/get-publication.php');
        const result = await response.json();

        if (result.success && result.data) {
          setLatestPublication(result.data);
        } else {
          setLatestPublication(null);
        }
      } catch (err) {
        console.error(err);
        toast.error('❌ Failed to fetch publication info.');
      }
    };

    fetchPublication();
  }, []);

  // Handle download or redirection
  const handleDownload = () => {
    if (latestPublication && latestPublication.link_url) {
      window.open(latestPublication.link_url, '_blank');
    } else {
      toast.warning('🛑 No publication is currently available. Please check back later.');
    }
  };








  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  return (
    <>
      <section className='events-section-container'>
        {/* <img src={ff} className='img-fluid w-100' /> */}
        <div className="container text-hero--events ">
          <div className="row justify-content-center text-center">
            <div className="col-md-12 text-center confrence-events-sections">
              <h1 className="text-center">CONFERENCE & EVENTS</h1>
              <hr className='events-hr-line' />
              <p className="text-center">Panav Biotech Organizing conferences and participate in events across india.</p>

            </div>
          </div>
        </div>
      </section>

      <section className='our-last-year-section-cont'>
        <img src={cc} alt="Welcome " className='left-side-half-circle-our-last-year-section' />
        <Container>
          <div className="row justify-content-center events-our-last-year-row">
            <div className="col-md-5 p-0">
              <img src={f11} className="img-fluid w-100" />
            </div>
            <div className="col-md-5 ourlast-year-section-evenst">
              <h2 className="text-centerr">Our Last Year Event</h2>
              <p>PANAV BIOTECH IN ASSOCIATION WITH PETS PRACTITIONERS ASSOCIATION OF MUMBAI (PPAM) ORGANIZED PANAV BIOTECH SYMPOSIUM 2023</p>
              <p>Panav Biotech and Candioli Pharma in association with PETS PRACTITIONERS ASSOCIATION OF MUMBAI (PPAM) Organized Panav Biotech Symposium 2023 on New Diagnosis and Management of Chronic Kidney Disease (CKD) & Chronic Pain. The event was held at the Radisson Blu Mumbai, and over 200 veterinarians attended the event.</p>
              {/* <img src={video} className="img-fluid w-100" /> */}
              <Button
                variant="light"
                onClick={handleShow}
                className="d-flex align-items-center justify-content-center border rounded p-0 float-right right-0 position-absulte"
                style={{
                  width: '31px',
                  height: '31px',
                  backgroundColor: 'white',
                  margin: "0 0 10px auto",


                }}
              >
                <i className="bi bi-play-fill" style={{ fontSize: '1.1rem' }}></i>
              </Button>
              {/* <PlayCircle size={50} /> */}
            </div>
          </div>
        </Container>
        <img src={cc} alt="Welcome " className='right-side-half-circle-our-last-year-section' />



        {/* modal for videos  */}
        <Modal show={show} onHide={handleClose} centered size="lg">
          <Modal.Body className="p-0">
            <div className="ratio ratio-16x9">
              <video
                width="100%"
                height="auto"
                autoPlay
                controls
                controlsList="nodownload fullscreen noremoteplayback noplaybackrate novolume"
                style={{
                  pointerEvents: 'auto',
                }}
              >
                <source src={vvv} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Modal.Body>
        </Modal>
      </section>


      <section>
        <SixCardSlider />
      </section>



      <section className='join-our-int-web-event-section'>
        <Container>
          <div className="row justify-content-center">
            <div className="col-md-6 join-our-int-colmn1">
              <h2>Join Our Interactive Webinars and Google Meet Sessions!</h2>
              <p>Stay ahead with real-time learning experiences, expert insights, and live Q&A sessions!</p>
              <Button onClick={handleJoinNow}>Join Now</Button>
              <small className="text-muted">
                Starting Date Time: {latestWebinar ? latestWebinar.datetime : 'Not Available'}
              </small>
            </div>
            <div className="col-md-6">
              <img src={f2} className='img-fluid w-100' />
            </div>
          </div>
        </Container>
      </section>

      <section className='digital-publications-events-section'>
        <Container>
          <div className="row justify-content-center">
            <div className="col-md-6 p-0">
              <img src={f3} className='img-flud w-100' />
            </div>
            <div className="col-md-6 digital-publications-events-colmn2">
              <h1>Digital Publication and Online Advertisement</h1>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <Button onClick={handleDownload}>
                Read More
              </Button>
              <small className="text-mutedd text-white">
                Starting Date Time: {latestPublication ? latestPublication.datetime : 'Not Available'}
              </small>
            </div>
          </div>
        </Container>
        <ToastContainer position="top-right" autoClose={3000} theme="colored" />

      </section>


    </>
  )
}

export default Events
