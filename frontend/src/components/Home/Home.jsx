import React, { useState, useEffect, Fragment, useRef } from "react";
import ClientCard from '../About/ClientCard';
import PartnerCard from '../Admission/PartnerCard';
import { useDispatch, useSelector } from 'react-redux';
import { allStudentAction, clearErrors } from "../../actions/studentAction";
import { allFeedbackAction } from "../../actions/feedbackActions";
import { allCardAction } from "../../actions/cardActions";
import { toast } from 'react-toastify';
import { allPartnerAction } from "../../actions/techActions";
import Loader from "../layout/Loader/Loader";
import Metadata from "../layout/Metadata/Metadata";
import { Link, useNavigate } from "react-router-dom";
import { allTeacherAction } from "../../actions/teacherActions";
import TeacherCard from "../About/Teachers/TeacherCard";
import { allFeatureAction } from '../../actions/affilationAction';
import { HomeSEO } from "../seo";
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaGraduationCap, FaGlobe } from 'react-icons/fa';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, feedbacks: allStudentFeedbacks } = useSelector((state) => state.allStudent);
  const { error: FeedError, feedbacks: allFeedbacks } = useSelector((state) => state.allFeedbacks);
  const { error: cardError, cards } = useSelector((state) => state.allCards);
  const { error: partnerError, partners } = useSelector((state) => state.allPartners);
  const { error: teamError, teachers } = useSelector((state) => state.allTeachers);
  const { error: featureError, afiliations } = useSelector((state) => state.allAffiliation);

  // Refs
  const teacherScrollRef = useRef();
  const partnerScrollRef = useRef();
  const insightScrollRef = useRef();
  const scrollingCardsRef = useRef();

  // Hover states
  const [isTeacherHovering, setIsTeacherHovering] = useState(false);
  const [isPartnerHovering, setIsPartnerHovering] = useState(false);
  const [isInsightHovering, setIsInsightHovering] = useState(false);
  const [isScrollingHovering, setIsScrollingHovering] = useState(false);
  const [feedbackIndex, setFeedbackIndex] = useState(0);

  // Feedback auto change
  useEffect(() => {
    const interval = setInterval(() => {
      setFeedbackIndex((prevIndex) =>
        allFeedbacks && allFeedbacks.length > 0 ? (prevIndex + 1) % allFeedbacks.length : 0
      );
    }, 5000);
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
            container.scrollBy({ left: 2, behavior: 'smooth' });
            const atEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth - 2;
            if (atEnd) {
              clearInterval(intervalId);
              setTimeout(() => {
                container.scrollTo({ left: 0, behavior: 'smooth' });
                setTimeout(startScroll, 1000);
              }, 2000);
            }
          }
        }, 20);
      };

      startScroll();
      return () => clearInterval(intervalId);
    }, [isHovering, ref]);
  };

  useAutoScroll(teacherScrollRef, isTeacherHovering);
  useAutoScroll(partnerScrollRef, isPartnerHovering);
  useAutoScroll(insightScrollRef, isInsightHovering);
  useAutoScroll(scrollingCardsRef, isScrollingHovering);

  const scrollLeft = (ref) => ref.current?.scrollBy({ left: -320, behavior: 'smooth' });
  const scrollRight = (ref) => ref.current?.scrollBy({ left: 320, behavior: 'smooth' });

  const featured = [
    { id: 1, title: "No Physical Barriers", description: "Learn from anywhere with fully online classes — quality education delivered right to your home.", icon: "🌍" },
    { id: 2, title: "Modern STEAM Curriculum", description: "Cutting-edge syllabus integrating Science, Technology, Engineering, Arts, and Mathematics to equip students for the future.", icon: "🚀" },
    { id: 3, title: "Continuous Assessment", description: "Structured evaluations to monitor student growth, ensuring steady academic improvement at every stage.", icon: "📈" },
    { id: 4, title: "Parent-Teacher Collaboration", description: "Parents stay informed through regular updates, progress tracking, and direct communication with instructors.", icon: "🤝" }
  ];

  useEffect(() => {
    if (error) { toast.error(error); dispatch(clearErrors()); }
    if (FeedError) { toast.error(FeedError); dispatch(clearErrors()); }
    if (teamError) { toast.error(teamError); dispatch(clearErrors()); }
    if (cardError) { toast.error(cardError); dispatch(clearErrors()); }
    if (partnerError) { toast.error(partnerError); dispatch(clearErrors()); }
    if (featureError) { toast.error(featureError); dispatch(clearErrors()); }
    
    dispatch(allCardAction());
    dispatch(allTeacherAction());
    dispatch(allPartnerAction());
    dispatch(allStudentAction());
    dispatch(allFeedbackAction());
    dispatch(allFeatureAction());
  }, [error, dispatch, FeedError, cardError, teamError, partnerError, featureError]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title={`The Learning Hub`} />
          <HomeSEO />

          <div style={{ minHeight: '100vh', background: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
            
            {/* ================= HERO SECTION ================= */}
            <div style={{ position: 'relative', background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', padding: '8rem 1rem 10rem 1rem', overflow: 'hidden' }}>
              
              {/* Animated Background Orbs */}
              <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', top: '-10%', left: '-10%', width: '600px', height: '600px', background: 'rgba(99, 102, 241, 0.2)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />
              <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '700px', height: '700px', background: 'rgba(236, 72, 153, 0.2)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />

              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.8 }} />

              {/* Floating Icons */}
              <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', top: '20%', left: '10%', opacity: 0.1 }} className="text-white hidden md:block"><FaGraduationCap size={120} /></motion.div>
              <motion.div animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', bottom: '20%', right: '10%', opacity: 0.1 }} className="text-white hidden md:block"><FaGlobe size={120} /></motion.div>

              {/* Hero Content */}
              <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto', textAlign: 'center', zIndex: 10 }}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ display: 'inline-block', padding: '0.5rem 1.5rem', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#e0e7ff', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '2px', marginBottom: '2rem', backdropFilter: 'blur(10px)' }}>
                  ENROLLMENT OPEN FOR 2026-27
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                  Shaping the <br />
                  <span style={{ background: 'linear-gradient(to right, #818cf8, #c084fc, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Future of Learning</span>
                </motion.h1>

                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} style={{ fontSize: '1.2rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto 3rem auto', lineHeight: 1.6 }}>
                  Join a global community of learners. Access certified online schooling, personalized tutoring, and immersive STEAM programs from anywhere in the world.
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => navigate('/apply-now')} style={{ padding: '1rem 2.5rem', borderRadius: '50px', background: 'linear-gradient(to right, #4f46e5, #db2777)', color: 'white', fontWeight: 'bold', fontSize: '1.1rem', border: 'none', cursor: 'pointer', boxShadow: '0 10px 30px -5px rgba(79, 70, 229, 0.6)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    Apply Now <FaArrowRight />
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => document.getElementById('programs-section').scrollIntoView({ behavior: 'smooth' })} style={{ padding: '1rem 2.5rem', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', color: 'white', fontWeight: 'bold', fontSize: '1.1rem', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', backdropFilter: 'blur(10px)' }}>
                    Explore Programs
                  </motion.button>
                </motion.div>
              </div>

              {/* SVG Wave */}
              <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0, zIndex: 10 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" style={{ display: 'block', width: '100%', height: 'auto' }}>
                  <path fill="#f8fafc" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                </svg>
              </div>
            </div>

            {/* ================= MAIN CONTENT ================= */}
            <div style={{ position: 'relative', maxWidth: '1400px', margin: '-4rem auto 0 auto', padding: '0 1.5rem 5rem 1.5rem', zIndex: 20 }}>
              
              {/* WHY CHOOSE US */}
              <section style={{ marginBottom: '6rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Why The Learning Hub?</h2>
                  <p className="text-slate-500">Discover what makes us different.</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                  {featured.map((feature, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)' }} style={{ background: 'white', padding: '2rem', borderRadius: '1.5rem', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                      <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{feature.icon}</div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.75rem' }}>{feature.title}</h3>
                      <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: '0.95rem', margin: 0 }}>{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* PROGRAMS SECTION */}
              <div id="programs-section" style={{ marginBottom: '6rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Explore Our Programs</h2>
                  <p className="text-slate-500">Tailored educational paths for every learner</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                  {afiliations && afiliations.slice(0, 4).map((feature, i) => (
                    <motion.div 
                      key={feature._id} 
                      initial={{ opacity: 0, y: 20 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      viewport={{ once: true }} 
                      whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)' }} 
                      style={{ background: 'white', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}
                    >
                      <div style={{ height: '240px', overflow: 'hidden' }}>
                        <img src={feature.avatar.url} alt={feature.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} className="hover:scale-105" />
                      </div>
                      <div style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1rem' }}>{feature.title}</h3>
                        <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.5rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{feature.description}</p>
                        <Link to="/apply-now" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#4f46e5', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}>Enquire Now <FaArrowRight size={14} /></Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* TESTIMONIALS & STATS */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <h2 className="text-3xl font-bold text-slate-900 mb-8">What Parents Say</h2>
                  <div style={{ position: 'relative', background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', padding: '3rem', borderRadius: '1.5rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '10px', right: '20px', fontSize: '120px', color: 'rgba(255,255,255,0.05)', fontFamily: 'serif', lineHeight: 1 }}>"</div>
                    <AnimatePresence mode="wait">
                      {allFeedbacks && allFeedbacks.length > 0 && (
                        <motion.div key={feedbackIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} style={{ position: 'relative', zIndex: 10 }}>
                          <p style={{ fontSize: '1.15rem', fontStyle: 'italic', color: '#f8fafc', lineHeight: 1.8, marginBottom: '2rem' }}>"{allFeedbacks[feedbackIndex].description}"</p>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(to bottom right, #6366f1, #d946ef)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white', fontSize: '1.25rem' }}>{allFeedbacks[feedbackIndex].name.charAt(0)}</div>
                            <div>
                              <h4 style={{ fontWeight: 'bold', color: 'white', margin: 0, fontSize: '1.1rem' }}>{allFeedbacks[feedbackIndex].name}</h4>
                              <p style={{ color: '#a5b4fc', fontSize: '0.9rem', margin: 0 }}>{allFeedbacks[feedbackIndex].title}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                    {cards && cards.map((card) => (<ClientCard card={card} key={card._id} />))}
                  </div>
                  <div style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)', border: '4px solid white', background: '#0f172a' }}>
                    <iframe width="100%" height="250" src="https://www.youtube.com/embed/q8NjbC4uGW4?si=IXLXpGdfxXw6Tfa4" title="YouTube video player" style={{ border: 0, display: 'block' }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  </div>
                </motion.div>
              </div>

              {/* SCHOOL INSIGHTS */}
              <div style={{ marginBottom: '6rem' }}>
                <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">School Insights</h2>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <button onClick={() => scrollLeft(insightScrollRef)} style={{ position: 'absolute', left: '-15px', zIndex: 10, width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.9)', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#4f46e5', backdropFilter: 'blur(8px)', transition: 'all 0.2s' }}>◀</button>
                  <div ref={insightScrollRef} onMouseEnter={() => setIsInsightHovering(true)} onMouseLeave={() => setIsInsightHovering(false)} style={{ display: 'flex', gap: '1.5rem', overflowX: 'auto', padding: '1.5rem 0.5rem', scrollBehavior: 'smooth', msOverflowStyle: 'none', scrollbarWidth: 'none' }} className="hide-scrollbar">
                    {allStudentFeedbacks && allStudentFeedbacks.map((vid) => (
                      <iframe key={vid._id} src={vid.ytLink} title="Student Insight" style={{ width: '350px', height: '220px', borderRadius: '1rem', border: '4px solid white', boxShadow: '0 10px 20px -5px rgba(0,0,0,0.1)', flexShrink: 0 }} allowFullScreen></iframe>
                    ))}
                  </div>
                  <button onClick={() => scrollRight(insightScrollRef)} style={{ position: 'absolute', right: '-15px', zIndex: 10, width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.9)', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#4f46e5', backdropFilter: 'blur(8px)', transition: 'all 0.2s' }}>▶</button>
                </div>
              </div>

              {/* EXPERIENCED TEAM */}
              <div style={{ marginBottom: '6rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Experienced Team</h2>
                  <p className="text-slate-500">Meet the experts guiding your child's journey.</p>
                </div>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <button onClick={() => scrollLeft(teacherScrollRef)} style={{ position: 'absolute', left: '-15px', zIndex: 10, width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.9)', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#4f46e5', backdropFilter: 'blur(8px)', transition: 'all 0.2s' }}>◀</button>
                  <div ref={teacherScrollRef} onMouseEnter={() => setIsTeacherHovering(true)} onMouseLeave={() => setIsTeacherHovering(false)} style={{ display: 'flex', gap: '2rem', overflowX: 'auto', padding: '1.5rem 0.5rem', scrollBehavior: 'smooth', msOverflowStyle: 'none', scrollbarWidth: 'none' }} className="hide-scrollbar">
                    {teachers && teachers.map((member) => (
                      <div key={member._id} style={{ minWidth: '300px', flexShrink: 0 }}>
                        <TeacherCard member={member} />
                      </div>
                    ))}
                  </div>
                  <button onClick={() => scrollRight(teacherScrollRef)} style={{ position: 'absolute', right: '-15px', zIndex: 10, width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.9)', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#4f46e5', backdropFilter: 'blur(8px)', transition: 'all 0.2s' }}>▶</button>
                </div>
              </div>

              {/* TECHNOLOGY PARTNERS */}
              <div style={{ marginBottom: '6rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Technology Partners</h2>
                  <p className="text-slate-500">Collaborating with world-class tech providers.</p>
                </div>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <button onClick={() => scrollLeft(partnerScrollRef)} style={{ position: 'absolute', left: '-15px', zIndex: 10, width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.9)', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#4f46e5', backdropFilter: 'blur(8px)', transition: 'all 0.2s' }}>◀</button>
                  <div ref={partnerScrollRef} onMouseEnter={() => setIsPartnerHovering(true)} onMouseLeave={() => setIsPartnerHovering(false)} style={{ display: 'flex', gap: '2rem', overflowX: 'auto', padding: '1.5rem 0.5rem', scrollBehavior: 'smooth', msOverflowStyle: 'none', scrollbarWidth: 'none' }} className="hide-scrollbar">
                    {partners && partners.map((member) => (
                      <div key={member._id} style={{ minWidth: '280px', height: '160px', flexShrink: 0, background: 'white', borderRadius: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px -5px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9', padding: '1.5rem', transition: 'transform 0.3s' }}>
                        <PartnerCard member={member} />
                      </div>
                    ))}
                  </div>
                  <button onClick={() => scrollRight(partnerScrollRef)} style={{ position: 'absolute', right: '-15px', zIndex: 10, width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.9)', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#4f46e5', backdropFilter: 'blur(8px)', transition: 'all 0.2s' }}>▶</button>
                </div>
              </div>

            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;