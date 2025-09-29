import React, { useState, useEffect, Fragment, useRef } from "react";
import './Home.css';
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

  // Refs
  const teacherScrollRef = useRef();
  const partnerScrollRef = useRef();
  const insightScrollRef = useRef();

  // Hover states
  const [isTeacherHovering, setIsTeacherHovering] = useState(false);
  const [isPartnerHovering, setIsPartnerHovering] = useState(false);
  const [isInsightHovering, setIsInsightHovering] = useState(false);

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

  // Auto scroll utility
  const useAutoScroll = (ref, isHovering) => {
    useEffect(() => {
      const container = ref.current;
      let intervalId;

      const startScroll = () => {
        intervalId = setInterval(() => {
          if (!isHovering && container) {
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
    }, [isHovering, ref]);
  };

  // Attach auto scroll
  useAutoScroll(teacherScrollRef, isTeacherHovering);
  useAutoScroll(partnerScrollRef, isPartnerHovering);
  useAutoScroll(insightScrollRef, isInsightHovering);

  // Manual scroll
  const scrollLeft = (ref) => ref.current?.scrollBy({ left: -300, behavior: 'smooth' });
  const scrollRight = (ref) => ref.current?.scrollBy({ left: 300, behavior: 'smooth' });

  const featured = [
    { id: 1, title: "No Physical Barriers", description: " Learn from anywhere with fully online classes — quality education delivered right to your home." },
    { id: 2, title: "Modern STEAM Curriculum", description: "Cutting-edge syllabus integrating Science, Technology, Engineering, Arts, and Mathematics to equip students for the future." },
    { id: 3, title: "Continuous Assessment", description: "Structured evaluations to monitor student growth, ensuring steady academic improvement at every stage." },
    { id: 4, title: "Parent-Teacher Collaboration", description: "Parents stay informed through regular updates, progress tracking, and direct communication with instructors." }
  ];

  useEffect(() => {
    AOS.init();
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
            {/* Hero Section */}
            <section className="hero">
              <video autoPlay loop muted playsInline className="background-video">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </section>

            <div className="homesMainContainer">
              {/* Enrollment + STEAM Section */}
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

              {/* School Insights */}
              <div className='thirdMidContainer'>
                <h1 className="title" data-aos="fade-down">School Insights</h1>
                <div className="teacher-carousel-wrapper">
                  <button onClick={() => scrollLeft(insightScrollRef)}>◀</button>
                  <div
                    className="teacher-carousel"
                    ref={insightScrollRef}
                    onMouseEnter={() => setIsInsightHovering(true)}
                    onMouseLeave={() => setIsInsightHovering(false)}
                  >
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
                  <button onClick={() => scrollRight(insightScrollRef)}>▶</button>
                </div>
              </div>

              {/* Testimonials */}
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

              {/* Experienced Team */}
              <div className="thirdMidContainer">
                <h1 className="title">Experienced Team</h1>
                <div className="teacher-carousel-wrapper">
                  <button onClick={() => scrollLeft(teacherScrollRef)}>◀</button>
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
                  <button onClick={() => scrollRight(teacherScrollRef)}>▶</button>
                </div>
              </div>

              {/* Technology Partners */}
              <div className='thirdMidContainer'>
                <h1 className="title" data-aos="fade-down">Technology Partners</h1>
                <div className="teacher-carousel-wrapper">
                  <button onClick={() => scrollLeft(partnerScrollRef)}>◀</button>
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
                  <button onClick={() => scrollRight(partnerScrollRef)}>▶</button>
                </div>
              </div>

              {/* Why The Learning Hub */}
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
