import React, { Fragment, useEffect, useRef, useState } from "react";
import { allExtraAction, clearErrors } from "../../../actions/affilationAction";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { allStudentAction } from "../../../actions/studentAction";
import Loader from "../../layout/Loader/Loader";
import Metadata from "../../layout/Metadata/Metadata";
import { motion } from 'framer-motion';

const Activities = () => {
  const dispatch = useDispatch();
  const { error: detailsError, afiliations } = useSelector((state) => state.allAffiliation);
  const { loading, error, feedbacks: allStudentFeedbacks } = useSelector((state) => state.allStudent);

  const insightScrollRef = useRef();
  const [isInsightHovering, setIsInsightHovering] = useState(false);

  // Reusable auto-scroll hook
  const useAutoScroll = (ref, isHovering) => {
    useEffect(() => {
      const container = ref.current;
      let intervalId;

      const startScroll = () => {
        intervalId = setInterval(() => {
          if (!isHovering && container) {
            container.scrollBy({ left: 2, behavior: "smooth" });
            const atEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth - 2;
            if (atEnd) {
              clearInterval(intervalId);
              setTimeout(() => {
                container.scrollTo({ left: 0, behavior: "smooth" });
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

  useAutoScroll(insightScrollRef, isInsightHovering);

  const scrollLeft = (ref) => ref.current?.scrollBy({ left: -320, behavior: "smooth" });
  const scrollRight = (ref) => ref.current?.scrollBy({ left: 320, behavior: "smooth" });

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (detailsError) {
      toast.error(detailsError);
      dispatch(clearErrors());
    }
    dispatch(allStudentAction());
    dispatch(allExtraAction());
  }, [dispatch, error, detailsError]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title={`Extra Curricular Activities - The Learning Hub`} />

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
                  BEYOND THE CLASSROOM
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
                >
                  Extra Curricular <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    Activities
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{ marginTop: '1.5rem', fontSize: '1.125rem', color: '#cbd5e1', maxWidth: '600px', margin: '1.5rem auto 0 auto', lineHeight: 1.6 }}
                >
                  Discover a world of creativity, sports, and innovation that helps students grow beyond academics.
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
              
              {/* ACTIVITY CARDS (Magazine Grid) */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '6rem' }}>
                {afiliations && afiliations.map((service, index) => (
                  <motion.div
                    key={service._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    style={{
                      background: 'white',
                      borderRadius: '1.5rem',
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
                      border: '1px solid #f1f5f9',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {/* Image Container */}
                    <div style={{ height: '220px', overflow: 'hidden' }}>
                      <img 
                        src={service.avatar.url} 
                        alt={service.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                        className="hover:scale-105"
                      />
                    </div>
                    
                    {/* Text Content */}
                    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', margin: '0 0 0.75rem 0' }}>
                        {service.title}
                      </h2>
                      <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, margin: 0, flex: 1 }}>
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* SCHOOL INSIGHTS (Video Carousel) */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">School Insights</h2>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <button onClick={() => scrollLeft(insightScrollRef)} style={{ position: 'absolute', left: -20, zIndex: 10, width: '48px', height: '48px', borderRadius: '50%', background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }} className="hover:bg-indigo-50">
                    ◀
                  </button>
                  <div 
                    ref={insightScrollRef} 
                    onMouseEnter={() => setIsInsightHovering(true)} 
                    onMouseLeave={() => setIsInsightHovering(false)} 
                    style={{ display: 'flex', gap: '1.5rem', overflowX: 'auto', padding: '1rem 0', scrollBehavior: 'smooth', msOverflowStyle: 'none', scrollbarWidth: 'none' }} 
                    className="hide-scrollbar"
                  >
                    {allStudentFeedbacks && allStudentFeedbacks.map((vid) => (
                      <iframe 
                        key={vid._id} 
                        src={vid.ytLink} 
                        title="Student Insight" 
                        style={{ width: '350px', height: '220px', borderRadius: '1rem', border: '4px solid white', boxShadow: '0 10px 20px -5px rgba(0,0,0,0.1)', flexShrink: 0 }} 
                        allowFullScreen
                      ></iframe>
                    ))}
                  </div>
                  <button onClick={() => scrollRight(insightScrollRef)} style={{ position: 'absolute', right: -20, zIndex: 10, width: '48px', height: '48px', borderRadius: '50%', background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }} className="hover:bg-indigo-50">
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

export default Activities;