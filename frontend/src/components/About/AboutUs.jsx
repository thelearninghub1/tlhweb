
import React, { Fragment, useState, useEffect, useRef } from 'react';
import './AboutUs.css';
import { IoLogoYoutube } from "react-icons/io";
import { Dialog, DialogContent } from '@mui/material';
import ClientCard from './ClientCard.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { allFeedbackAction, clearErrors } from "../../actions/feedbackActions";
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../layout/Loader/Loader.jsx';
import { allCardAction } from "../../actions/cardActions";
import { toast } from 'react-toastify';
import video from '../../assets/aboutUs.mp4';
import Metadata from '../layout/Metadata/Metadata.jsx';
import TeacherCard from './Teachers/TeacherCard.jsx';
import { allTeacherAction } from '../../actions/teacherActions.js';

const AboutUs = () => {
  const dispatch = useDispatch();

  const { loading, error: FeedError, feedbacks: allFeedbacks } = useSelector((state) => state.allFeedbacks);
  const { error: cardError, cards } = useSelector((state) => state.allCards);
  const { error, teachers } = useSelector((state) => state.allTeachers);

  const teacherScrollRef = useRef();
  const [isHovering, setIsHovering] = useState(false);


  useEffect(() => {
    AOS.init();

    if (FeedError) {
      toast.error(FeedError);
      dispatch(clearErrors());
    }
    if (cardError) {
      toast.error(cardError);
      dispatch(clearErrors());
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(allTeacherAction());
    dispatch(allFeedbackAction());
    dispatch(allCardAction());
  }, [dispatch, FeedError, error, cardError]);

  const [feedbackIndex, setFeedbackIndex] = useState(0);
  /// Feedback
   useEffect(() => {
    const interval = setInterval(() => {
      setFeedbackIndex((prevIndex) =>
        allFeedbacks && allFeedbacks.length > 0 ? (prevIndex + 1) % allFeedbacks.length : 0
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [allFeedbacks]);


  // Auto-scroll teacher carousel
useEffect(() => {
  const container = teacherScrollRef.current;
  let intervalId;

  const startScroll = () => {
    intervalId = setInterval(() => {
      if (!isHovering && container) {
        container.scrollBy({ left: 6, behavior: 'smooth' });

        const atEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth - 1;

        if (atEnd) {
          clearInterval(intervalId); // Stop scrolling

          setTimeout(() => {
            container.scrollTo({ left: 0, behavior: 'auto' }); // Instantly jump to start

            // Wait for the scroll to actually reset
            setTimeout(() => {
              startScroll(); // ✅ Start next loop
            }, 500); // slight pause after reset to prevent skipping
          }, 1000); // wait at end before reset
        }
      }
    }, 20);
  };

  startScroll();

  return () => clearInterval(intervalId);
}, [isHovering]);


  const scrollLeft = () => {
    teacherScrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    teacherScrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title={`About Us - The Learning Hub`} />
          <div className="aboutUsContainer">
            <div className="topAffiliationContainer">
              <div className="video-background">
                <video src={video} autoPlay loop muted playsInline />
              </div>
            </div>

            <div className="aboutUsMainContainer">
              <div className="firstMidContainer">
                <div className="introduction-container" data-aos="fade-down">
                  <h1 className="title" data-aos="fade-down">Who Are We</h1>
                  <p className="affiliation-intro" data-aos="fade-down">
                    <strong>The Learning Hub (TLH)</strong> is an international ed-tech platform committed to transforming how students learn and grow in today’s world. TLH bridges the gap between traditional education and future-ready skills.
                  </p>

                  <p className="affiliation-intro" data-aos="fade-down">
                    With a presence across the <strong>MENA region and South Asia</strong>, TLH delivers engaging, tech-enabled learning to students in the <strong>UAE, Saudi Arabia, Qatar, Bahrain, Pakistan, India, Bangladesh, and beyond.</strong> Through certified online schooling, personalized tutoring, and immersive STEAM-based programs, TLH provides learners with the tools to succeed in a fast-changing, digital world.
                  </p>

                  <h1 className="title" data-aos="fade-down">Our Mission</h1>
                  <p className="affiliation-intro" data-aos="fade-down">
                    To make modern, meaningful education accessible to every learner, anywhere in the world, through innovative teaching, technology-driven programs, and personalized support that nurtures curiosity, creativity, and lifelong confidence.
                  </p>

                  <h1 className="title" data-aos="fade-down">Our Vision</h1>
                  <p className="affiliation-intro" data-aos="fade-down">
                    To be a global leader in online education by shaping future-ready learners equipped with 21st-century skills, scientific thinking, and a passion for innovation.
                  </p>

                  <h1 className="title" data-aos="fade-down">Our Core Values</h1>
                  <ul className="affiliation-list">
                    <li data-aos="fade-down"><strong>Innovation</strong> – Constantly evolving to offer forward-thinking, relevant, and tech-driven learning experiences.</li>
                    <li data-aos="fade-down"><strong>Integrity</strong> – Building trust through transparency, accountability, and ethical education practices.</li>
                    <li data-aos="fade-down"><strong>Inclusivity</strong> – Ensuring every learner has equal access to quality education, regardless of background or location.</li>
                    <li data-aos="fade-down"><strong>Empowerment</strong> – Equipping students with the tools, skills, and confidence they need to succeed in the real world.</li>
                    <li data-aos="fade-down"><strong>Collaboration</strong> – Working together with educators, families, and partners to create a strong and supportive learning community.</li>
                  </ul>
                </div>
              </div>

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
                        className={` carouselFeedContainer carousel-slide ${i === feedbackIndex ? 'active' : ''}`}
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
                  <h1 className='title'>Experienced Team</h1>
                  <h3>Teamwork is the ability to work together toward a common vision. The ability is to directly involve the individual accomplishments toward  organizational objectives. It is the fuel that allows common people to attain uncommon results.</h3>
                </div>

               <div className="teacher-carousel-wrapper">
  <button onClick={scrollLeft}>◀</button>
  <div
    className="teacher-carousel"
    ref={teacherScrollRef}
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}
  >
    {teachers && teachers.map((member) => (
      <TeacherCard member={member} key={member._id} />
    ))}
  </div>
  <button onClick={scrollRight}>▶</button>
</div>

              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default AboutUs;
