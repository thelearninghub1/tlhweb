import React, { Fragment, useState, useEffect, useRef } from 'react';
import ClientCard from './ClientCard.jsx';
import { allFeedbackAction, clearErrors } from "../../actions/feedbackActions";
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../layout/Loader/Loader.jsx';
import { allCardAction } from "../../actions/cardActions";
import { toast } from 'react-toastify';
import video from '../../assets/aboutUs.mp4';
import Metadata from '../layout/Metadata/Metadata.jsx';
import TeacherCard from './Teachers/TeacherCard.jsx';
import { allTeacherAction } from '../../actions/teacherActions.js';
import { motion, AnimatePresence } from 'framer-motion';

const AboutUs = () => {
  const dispatch = useDispatch();

  const { loading, error: FeedError, feedbacks: allFeedbacks } = useSelector((state) => state.allFeedbacks);
  const { error: cardError, cards } = useSelector((state) => state.allCards);
  const { error, teachers } = useSelector((state) => state.allTeachers);

  const teacherScrollRef = useRef();
  const [isHovering, setIsHovering] = useState(false);
  const [feedbackIndex, setFeedbackIndex] = useState(0);

  useEffect(() => {
    if (FeedError) { toast.error(FeedError); dispatch(clearErrors()); }
    if (cardError) { toast.error(cardError); dispatch(clearErrors()); }
    if (error) { toast.error(error); dispatch(clearErrors()); }

    dispatch(allTeacherAction());
    dispatch(allFeedbackAction());
    dispatch(allCardAction());
  }, [dispatch, FeedError, error, cardError]);

  // Feedback Auto-Rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setFeedbackIndex((prevIndex) =>
        allFeedbacks && allFeedbacks.length > 0 ? (prevIndex + 1) % allFeedbacks.length : 0
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [allFeedbacks]);

  // Auto-scroll teacher carousel
  useEffect(() => {
    const container = teacherScrollRef.current;
    let intervalId;
    const startScroll = () => {
      intervalId = setInterval(() => {
        if (!isHovering && container) {
          container.scrollBy({ left: 2, behavior: 'smooth' });
          const atEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth - 2;
          if (atEnd) {
            clearInterval(intervalId);
            setTimeout(() => {
              container.scrollTo({ left: 0, behavior: 'smooth' });
              setTimeout(() => { startScroll(); }, 1000);
            }, 2000);
          }
        }
      }, 20);
    };
    startScroll();
    return () => clearInterval(intervalId);
  }, [isHovering]);

  const scrollLeft = () => teacherScrollRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
  const scrollRight = () => teacherScrollRef.current?.scrollBy({ left: 320, behavior: 'smooth' });

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title={`About Us - The Learning Hub`} />
          
          <div style={{ minHeight: '100vh', background: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
            
            {/* ================= BACKGROUND ANIMATED ORBS ================= */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} 
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', background: 'rgba(99, 102, 241, 0.15)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} 
            />
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }} 
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              style={{ position: 'absolute', bottom: '10%', right: '-10%', width: '600px', height: '600px', background: 'rgba(236, 72, 153, 0.15)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} 
            />

            {/* ================= HERO BANNER ================= */}
            <div style={{ position: 'relative', background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', padding: '6rem 1rem 8rem 1rem', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.8 }} />

              <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', textAlign: 'center', zIndex: 10 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ display: 'inline-block', padding: '0.5rem 1.25rem', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#e0e7ff', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '1.5rem', backdropFilter: 'blur(10px)' }}
                >
                  DISCOVER OUR STORY
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
                >
                  Who Are <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    We?
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{ marginTop: '1.5rem', fontSize: '1.125rem', color: '#cbd5e1', maxWidth: '600px', margin: '1.5rem auto 0 auto', lineHeight: 1.6 }}
                >
                  Bridging the gap between traditional education and future-ready skills for students across the globe.
                </motion.p>
              </div>

              <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0, zIndex: 10 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" style={{ display: 'block', width: '100%', height: 'auto' }}>
                  <path fill="#f8fafc" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                </svg>
              </div>
            </div>

            {/* ================= MAIN CONTENT ================= */}
            <div style={{ position: 'relative', maxWidth: '1200px', margin: '-4rem auto 0 auto', padding: '0 1rem 5rem 1rem', zIndex: 20 }}>
              
              {/* SECTION 1: WHO WE ARE & VIDEO */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1.5rem' }}>Our Story</h2>
                  <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                    <strong>The Learning Hub (TLH)</strong> is an international ed-tech platform committed to transforming how students learn and grow in today’s world. TLH bridges the gap between traditional education and future-ready skills.
                  </p>
                  <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, margin: 0 }}>
                    With a presence across the <strong>MENA region and South Asia</strong>, TLH delivers engaging, tech-enabled learning to students in the <strong>UAE, Saudi Arabia, Qatar, Bahrain, Pakistan, India, Bangladesh, and beyond.</strong> Through certified online schooling, personalized tutoring, and immersive STEAM-based programs, TLH provides learners with the tools to succeed in a fast-changing, digital world.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} style={{ perspective: 1000 }}>
                  <motion.div whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}
                    style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', border: '8px solid white', background: '#0f172a', position: 'relative' }}>
                    <video src={video} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </motion.div>
                </motion.div>
              </div>

              {/* SECTION 2: MISSION & VISION CARDS */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'white', padding: '3rem 2rem', borderRadius: '1.5rem', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9', textAlign: 'center' }}>
                  <div style={{ width: '60px', height: '60px', background: '#e0e7ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', fontSize: '1.5rem' }}>🎯</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1rem' }}>Our Mission</h3>
                  <p style={{ color: '#475569', lineHeight: 1.7, margin: 0 }}>To make modern, meaningful education accessible to every learner, anywhere in the world, through innovative teaching, technology-driven programs, and personalized support that nurtures curiosity, creativity, and lifelong confidence.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ background: 'white', padding: '3rem 2rem', borderRadius: '1.5rem', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9', textAlign: 'center' }}>
                  <div style={{ width: '60px', height: '60px', background: '#fce7f3', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', fontSize: '1.5rem' }}>👁️</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1rem' }}>Our Vision</h3>
                  <p style={{ color: '#475569', lineHeight: 1.7, margin: 0 }}>To be a global leader in online education by shaping future-ready learners equipped with 21st-century skills, scientific thinking, and a passion for innovation.</p>
                </motion.div>
              </div>

              {/* SECTION 3: CORE VALUES */}
              <div style={{ marginBottom: '6rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', textAlign: 'center', marginBottom: '3rem' }}>Our Core Values</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                  {[
                    { title: "Innovation", desc: "Constantly evolving to offer forward-thinking, relevant, and tech-driven learning experiences.", icon: "💡" },
                    { title: "Integrity", desc: "Building trust through transparency, accountability, and ethical education practices.", icon: "🤝" },
                    { title: "Inclusivity", desc: "Ensuring every learner has equal access to quality education, regardless of background or location.", icon: "🌍" },
                    { title: "Empowerment", desc: "Equipping students with the tools, skills, and confidence they need to succeed in the real world.", icon: "🚀" },
                    { title: "Collaboration", desc: "Working together with educators, families, and partners to create a strong and supportive learning community.", icon: "🧩" }
                  ].map((value, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }} style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ fontSize: '1.5rem' }}>{value.icon}</div>
                      <div>
                        <h4 style={{ fontWeight: 'bold', color: '#0f172a', fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>{value.title}</h4>
                        <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>{value.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* SECTION 4: YOUTUBE & TESTIMONIALS */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)', border: '4px solid white', background: '#0f172a' }}>
                  <iframe width="100%" height="315" src="https://www.youtube.com/embed/q8NjbC4uGW4?si=IXLXpGdfxXw6Tfa4" title="YouTube video player" style={{ border: 0, display: 'block' }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '2rem' }}>What People Say</h2>
                  <div style={{ position: 'relative', minHeight: '200px', background: '#f8fafc', padding: '2rem', borderRadius: '1.5rem', border: '1px solid #e2e8f0' }}>
                    <AnimatePresence mode="wait">
                      {allFeedbacks && allFeedbacks.length > 0 && (
                        <motion.div
                          key={feedbackIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5 }}
                        >
                          <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#334155', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                            "{allFeedbacks[feedbackIndex].description}"
                          </p>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#e0e7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#4f46e5' }}>
                              {allFeedbacks[feedbackIndex].name.charAt(0)}
                            </div>
                            <div>
                              <h4 style={{ fontWeight: 'bold', color: '#0f172a', margin: 0 }}>{allFeedbacks[feedbackIndex].name}</h4>
                              <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0 }}>{allFeedbacks[feedbackIndex].title}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>

              {/* SECTION 5: TEACHERS CAROUSEL */}
              <div>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  <p style={{ color: '#6366f1', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Our Team Members</p>
                  <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>Experienced Team</h2>
                </div>

                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <button onClick={scrollLeft} style={{ position: 'absolute', left: -20, zIndex: 10, width: '48px', height: '48px', borderRadius: '50%', background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }} className="hover:bg-indigo-50">
                    ◀
                  </button>

                  <div 
                    ref={teacherScrollRef} 
                    onMouseEnter={() => setIsHovering(true)} 
                    onMouseLeave={() => setIsHovering(false)} 
                    style={{ display: 'flex', gap: '2rem', overflowX: 'auto', padding: '1rem 0', scrollBehavior: 'smooth', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                    className="hide-scrollbar"
                  >
                    {teachers && teachers.map((member) => (
                      <div key={member._id} style={{ minWidth: '300px', flexShrink: 0 }}>
                        <TeacherCard member={member} />
                      </div>
                    ))}
                  </div>

                  <button onClick={scrollRight} style={{ position: 'absolute', right: -20, zIndex: 10, width: '48px', height: '48px', borderRadius: '50%', background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }} className="hover:bg-indigo-50">
                    ▶
                  </button>
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