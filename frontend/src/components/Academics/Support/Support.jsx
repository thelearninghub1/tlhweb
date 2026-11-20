import React, { Fragment, useEffect } from 'react';
import SupportCard from './SupportCard.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { allSupportAction, clearErrors } from '../../../actions/affilationAction';
import Loader from '../../layout/Loader/Loader.jsx';
import Metadata from '../../layout/Metadata/Metadata.jsx';
import { motion } from 'framer-motion';
import { FaUserGraduate } from 'react-icons/fa';

const Support = () => {
  const dispatch = useDispatch();
  const { loading, error, afiliations } = useSelector((state) => state.allAffiliation);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(allSupportAction());
  }, [error, dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title={`Academic Support - The Learning Hub`} />

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
              
              {/* Unique Floating Icon */}
              <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', top: '20%', right: '10%', opacity: 0.1 }} className="text-white text-9xl hidden md:block">
                <FaUserGraduate />
              </motion.div>

              <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', textAlign: 'center', zIndex: 10 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ display: 'inline-block', padding: '0.5rem 1.25rem', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#e0e7ff', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '1.5rem', backdropFilter: 'blur(10px)' }}
                >
                  GUIDING EVERY STEP
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
                >
                  Academic <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    Support
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{ marginTop: '1.5rem', fontSize: '1.125rem', color: '#cbd5e1', maxWidth: '600px', margin: '1.5rem auto 0 auto', lineHeight: 1.6 }}
                >
                  Comprehensive support services designed to help every student achieve their full potential.
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
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {afiliations && afiliations.map((partner, index) => (
                  <SupportCard key={index} partner={partner} index={index} />
                ))}
              </div>

            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Support;