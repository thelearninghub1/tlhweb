import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { allInstructionalAction, clearErrors } from "../../../actions/affilationAction";
import Loader from "../../layout/Loader/Loader";
import Metadata from "../../layout/Metadata/Metadata";
import { motion } from 'framer-motion';
import { FaChalkboardTeacher } from 'react-icons/fa';

const Instrumental = () => {
  const dispatch = useDispatch();
  const { loading, error: detailsError, afiliations } = useSelector((state) => state.allAffiliation);

  useEffect(() => {
    if (detailsError) {
      toast.error(detailsError);
      dispatch(clearErrors());
    }
    dispatch(allInstructionalAction());
  }, [dispatch, detailsError]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title={`Instructional Methods - The Learning Hub`} />

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

              {/* Unique Icon for this page */}
              <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', top: '20%', right: '10%', opacity: 0.1 }} className="text-white text-9xl hidden md:block">
                <FaChalkboardTeacher />
              </motion.div>

              <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', textAlign: 'center', zIndex: 10 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ display: 'inline-block', padding: '0.5rem 1.25rem', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#e0e7ff', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '1.5rem', backdropFilter: 'blur(10px)' }}
                >
                  HOW WE TEACH
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
                >
                  Instructional <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    Methods
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{ marginTop: '1.5rem', fontSize: '1.125rem', color: '#cbd5e1', maxWidth: '600px', margin: '1.5rem auto 0 auto', lineHeight: 1.6 }}
                >
                  Discover the innovative teaching strategies we use to inspire curiosity and academic excellence.
                </motion.p>
              </div>

              <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0, zIndex: 10 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" style={{ display: 'block', width: '100%', height: 'auto' }}>
                  <path fill="#f8fafc" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                </svg>
              </div>
            </div>

            {/* ================= MAIN CONTENT ================= */}
            {/* FIX: Changed maxWidth from 1000px to 1400px to remove the outer white space */}
            <div style={{ position: 'relative', maxWidth: '1400px', margin: '-4rem auto 0 auto', padding: '0 2rem 5rem 2rem', zIndex: 20 }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                {afiliations && afiliations.map((service, index) => {
                  const isEven = index % 2 === 0;

                  return (
                    <motion.div
                      key={service._id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      style={{
                        display: 'flex',
                        flexDirection: isEven ? 'row' : 'row-reverse',
                        flexWrap: 'wrap',
                        gap: '3rem',
                        alignItems: 'center',
                        background: 'white',
                        borderRadius: '2rem',
                        padding: '2rem',
                        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.08)',
                        border: '1px solid #f1f5f9'
                      }}
                    >
                      {/* Image Side */}
                      <div style={{ flex: '1 1 300px', width: '100%' }}>
                        {/* FIX: Added background and padding, and changed objectFit to 'contain' so the full image shows */}
                        <div style={{ 
                          borderRadius: '1.5rem', 
                          overflow: 'hidden', 
                          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.15)',
                          position: 'relative',
                          background: '#f8fafc', 
                          padding: '1rem'
                        }}>
                          <img 
                            src={service.avatar.url} 
                            alt={service.title} 
                            style={{ width: '100%', height: '300px', objectFit: 'contain', display: 'block' }} 
                          />
                          {/* Floating Icon Accent */}
                          <div style={{ 
                            position: 'absolute', bottom: '1rem', left: '1rem', 
                            background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)',
                            width: '48px', height: '48px', borderRadius: '50%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: '#4f46e5', fontSize: '1.25rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                          }}>
                            {index + 1}
                          </div>
                        </div>
                      </div>

                      {/* Text Side */}
                      <div style={{ flex: '1 1 300px' }}>
                        <div style={{ display: 'inline-block', padding: '0.25rem 1rem', borderRadius: '50px', background: '#e0e7ff', color: '#4f46e5', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
                          Method {index + 1}
                        </div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1rem', lineHeight: 1.2 }}>
                          {service.title}
                        </h2>
                        <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.8, margin: 0 }}>
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Instrumental;