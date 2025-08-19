import React, { useState, useEffect, Fragment, useRef } from "react";
import './Home.css';
import { IoLogoYoutube } from "react-icons/io";
import { Dialog, DialogContent } from '@mui/material';
import ClientCard from '../About/ClientCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import video from '../../assets/video.mp4';
import PartnerCard from '../Admission/PartnerCard';
import { useDispatch, useSelector } from 'react-redux';
import { allStudentAction, clearErrors } from "../../actions/studentAction";
import { allFeedbackAction } from "../../actions/feedbackActions";
import { allCardAction } from "../../actions/cardActions";
import { toast } from 'react-toastify';
import { allPartnerAction } from "../../actions/techActions";
import Loader from "../layout/Loader/Loader";
import Metadata from "../layout/Metadata/Metadata";
import { Link } from "react-router-dom";
import { allTeacherAction } from "../../actions/teacherActions";
import TeacherCard from "../About/Teachers/TeacherCard";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, feedbacks: allStudentFeedbacks } = useSelector((state) => state.allStudent);
  const { error: FeedError, feedbacks: allFeedbacks } = useSelector((state) => state.allFeedbacks);
  const { error: cardError, cards } = useSelector((state) => state.allCards);
  const { error: partnerError, partners } = useSelector((state) => state.allPartners);
  const { error: teamError, teachers } = useSelector((state) => state.allTeachers);

  // Separate refs and hover states
  const teacherScrollRef = useRef();
  const partnerScrollRef = useRef();
  const [isTeacherHovering, setIsTeacherHovering] = useState(false);
  const [isPartnerHovering, setIsPartnerHovering] = useState(false);

  const [feedbackIndex, setFeedbackIndex] = useState(0);

  // Feedback auto change
  useEffect(() => {
    const interval = setInterval(() => {
      setFeedbackIndex((prevIndex) =>
        allFeedbacks && allFeedbacks.length > 0 ? (prevIndex + 1) % allFeedbacks.length : 0
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [allFeedbacks]);

  // Teacher auto scroll
  useEffect(() => {
    const container = teacherScrollRef.current;
    let intervalId;

    const startScroll = () => {
      intervalId = setInterval(() => {
        if (!isTeacherHovering && container) {
          container.scrollBy({ left: 6, behavior: 'smooth' });
          const atEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth - 1;
          if (atEnd) {
            clearInterval(intervalId);
            setTimeout(() => {
              container.scrollTo({ left: 0, behavior: 'auto' });
              setTimeout(startScroll, 500);
            }, 1000);
          }
        }
      }, 20);
    };

    startScroll();
    return () => clearInterval(intervalId);
  }, [isTeacherHovering]);

  // Partner auto scroll
  useEffect(() => {
                                          AOS.init()
    
    const container = partnerScrollRef.current;
    let intervalId;

    const startScroll = () => {
      intervalId = setInterval(() => {
        if (!isPartnerHovering && container) {
          container.scrollBy({ left: 6, behavior: 'smooth' });
          const atEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth - 1;
          if (atEnd) {
            clearInterval(intervalId);
            setTimeout(() => {
              container.scrollTo({ left: 0, behavior: 'auto' });
              setTimeout(startScroll, 500);
            }, 1000);
          }
        }
      }, 20);
    };

    startScroll();
    return () => clearInterval(intervalId);
  }, [isPartnerHovering]);

  // Manual scroll
  const scrollTeacherLeft = () => teacherScrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  const scrollTeacherRight = () => teacherScrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });

  const scrollPartnerLeft = () => partnerScrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  const scrollPartnerRight = () => partnerScrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });

  const featured = [
    { id: 1, title: "No Physical Barriers", description: " Learn from anywhere with fully online classes — quality education delivered right to your home." },
    { id: 2, title: "Modern STEAM Curriculum", description: "Cutting-edge syllabus integrating Science, Technology, Engineering, Arts, and Mathematics to equip students for the future." },
    { id: 3, title: "Continuous Assessment", description: "Structured evaluations to monitor student growth, ensuring steady academic improvement at every stage." },
    { id: 4, title: "Parent-Teacher Collaboration", description: "Parents stay informed through regular updates, progress tracking, and direct communication with instructors." }
  ];




  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (FeedError) {
      toast.error(FeedError);
      dispatch(clearErrors());
    }
    if (teamError) {
      toast.error(teamError);
      dispatch(clearErrors());
    }
    if (cardError) {
      toast.error(cardError);
      dispatch(clearErrors());
    }
    if (partnerError) {
      toast.error(partnerError);
      dispatch(clearErrors());
    }
    dispatch(allCardAction());
    dispatch(allTeacherAction());
    dispatch(allPartnerAction());
    dispatch(allStudentAction());
    dispatch(allFeedbackAction());
  }, [error, dispatch, FeedError, cardError, teamError, partnerError]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title={`The Learning Hub`} />

          <div className="servicesDetailsContainer">
         <section className="hero">
  <video
    autoPlay
    loop 
    muted
    playsInline
    className="background-video"
  >
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</section>
            <div className="homesMainContainer">
              <div className="learn-portal-container">
                <section className="learn-enrollment" data-aos="fade-down">
                  <button className="learn-enroll-btn">
                    ENROLL YOUR CHILD FOR SESSION 2025-26 AND BECOME PART OF THE LEARNING HUB.
                  </button>
                </section>

                <section className="learn-content-section" data-aos="fade-down">
                  <div className="learn-text-content">
                    <h2 className="title">Quality STEAM Online Ed-Tech at TLH:</h2>
                    <div className="affiliation-intro learn-description">
                      <ul>
                        <li>Accessible to all types of learners across the globe.</li>
                        <li>Live virtual classrooms for interactive e-learning experiences.</li>
                        <li>Comprehensive Learning Management System (LMS) support:</li>
                        <ul>
                          <li>Access study packs and learning materials remotely.</li>
                          <li>Submit assignments easily through the platform.</li>
                          <li>Participate in class discussions and collaborative activities.</li>
                          <li>Track academic progress in an organized and efficient manner.</li>
                        </ul>
                      </ul>
                    </div>
                    <Link to={`/apply-now`} className="learn-apply-btn brotb">APPLY NOW</Link>
                  </div>
                  <div className="learn-image-container">
                    <iframe
    src="https://youtube.com/embed/MqJJiP_x1IE"
    title="YouTube video player"
    className="responsive-iframe"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
                  </div>
                </section>
              </div>

              <section className="happy-students-section">
                <h2 className="title" data-aos="fade-down">School Insights</h2>
                <div className="video-container" data-aos="fade-down">
                  {allStudentFeedbacks && allStudentFeedbacks.map((video) => (
                    <iframe
                      key={video._id}
                      className="student-video"
                      src={video.ytLink}
                      title={video._id}
                      allowFullScreen
                    ></iframe>
                  ))}
                </div>
              </section>

              <div className="secondMidContainer">
                <div className="secondMidContainer1">
                      <iframe
                        width="520"
                        height="315"
                        src="https://www.youtube.com/embed/q8NjbC4uGW4?si=IXLXpGdfxXw6Tfa4"
                        title="YouTube video player"
                        style={{ border: 0 }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className='iframeTag'
                      ></iframe>
                </div>

                <div className="secondMidContainer2">
                  <div className="custom-carousel">
                    {allFeedbacks && allFeedbacks.map((feedback, i) => (
                      <div
                        key={feedback._id}
                        className={`carouselFeedContainer carousel-slide ${i === feedbackIndex ? 'active' : ''}`}
                      >
                        <i>{feedback.description}</i>
                        <b>{feedback.name}</b>
                        <p>{feedback.title}</p>
                      </div>
                    ))}
                  </div>
                  <div className="client-card-container">
                    {cards && cards.map((card) => (
                      <ClientCard card={card} key={card._id} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="thirdMidContainer">
                <div>
                  <p>Our team members</p>
                  <h1 className="title">Experienced Team</h1>
                  <h3>Teamwork is the ability to work together toward a common vision. The ability is to directly involve the individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results.</h3>
                </div>

                <div className="teacher-carousel-wrapper">
                  <button onClick={scrollTeacherLeft}>◀</button>
                  <div
                    className="teacher-carousel"
                    ref={teacherScrollRef}
                    onMouseEnter={() => setIsTeacherHovering(true)}
                    onMouseLeave={() => setIsTeacherHovering(false)}
                  >
                    {teachers && teachers.map((member) => (
                      <TeacherCard member={member} key={member._id} />
                    ))}
                  </div>
                  <button onClick={scrollTeacherRight}>▶</button>
                </div>
              </div>

              <div className='thirdMidContainer'>
                <div>
                  <p data-aos="fade-down">Our team Partners</p>
                  <h1 className="title" data-aos="fade-down">Technology Partners</h1>
                  <h3 data-aos="fade-down">Teamwork is the ability to work together toward a common vision. The ability is to directly involve the individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results.</h3>
                </div>

                <div className="teacher-carousel-wrapper">
                  <button onClick={scrollPartnerLeft}>◀</button>
                  <div
                    className="teacher-carousel"
                    ref={partnerScrollRef}
                    onMouseEnter={() => setIsPartnerHovering(true)}
                    onMouseLeave={() => setIsPartnerHovering(false)}
                  >
                    {partners && partners.map((member) => (
                      <PartnerCard member={member} key={member._id} />
                    ))}
                  </div>
                  <button onClick={scrollPartnerRight}>▶</button>
                </div>
              </div>

              <section className="why-choose-section" data-aos="fade-down">
                <h1 className="title chooseContainer">Why The Learning Hub ?</h1>
                <div className="why-choose-grid">
                  {featured.map((feature) => (
                    <div key={feature.id} className="why-choose-card">
                      <h3 className="feature-title">{feature.title}</h3>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
