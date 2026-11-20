import React, { Fragment, useEffect } from 'react';
import { allCalenderAction, clearErrors } from '../../../actions/calenderAction';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Loader from '../../layout/Loader/Loader';
import Metadata from '../../layout/Metadata/Metadata';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

const Calendar = () => {
  const dispatch = useDispatch();
  const { loading, error, calenders } = useSelector((state) => state.allCalenders);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(allCalenderAction());
  }, [error, dispatch]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title="School Calendar - The Learning Hub" />

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

              {/* Unique Icon for Calendar Page */}
              <motion.div animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', top: '20%', left: '10%', opacity: 0.1 }} className="text-white text-9xl hidden md:block">
                <FaCalendarAlt />
              </motion.div>

              <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', textAlign: 'center', zIndex: 10 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ display: 'inline-block', padding: '0.5rem 1.25rem', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#e0e7ff', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '1.5rem', backdropFilter: 'blur(10px)' }}
                >
                  STAY UP TO DATE
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
                >
                  School <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    Calendar
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{ marginTop: '1.5rem', fontSize: '1.125rem', color: '#cbd5e1', maxWidth: '600px', margin: '1.5rem auto 0 auto', lineHeight: 1.6 }}
                >
                  Keep track of all important dates, events, exams, and holidays for the academic year.
                </motion.p>
              </div>

              <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0, zIndex: 10 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" style={{ display: 'block', width: '100%', height: 'auto' }}>
                  <path fill="#f8fafc" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                </svg>
              </div>
            </div>

            {/* ================= MAIN CONTENT ================= */}
            {/* Added back the left/right padding here so the card doesn't touch the screen edge, and set maxWidth to 1400px */}
            <div style={{ position: 'relative', maxWidth: '1400px', margin: '-4rem auto 0 auto', padding: '0 1.5rem 5rem 1.5rem', zIndex: 20 }}>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ 
                  background: 'white', 
                  borderRadius: '1.5rem', 
                  padding: '3rem', 
                  boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)', 
                  border: '1px solid #e2e8f0',
                  width: '100%',          /* Changed from maxWidth: '900px' */
                  margin: '0 auto'
                }}
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center border-b pb-4">Important Dates</h2>

                {calenders && calenders.length > 0 ? (
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                  >
                    {calenders.map((item, index) => (
                      <motion.div 
                        key={item._id}
                        variants={itemVariants}
                        whileHover={{ scale: 1.01, backgroundColor: '#f8fafc' }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '2rem',
                          padding: '1.5rem',
                          borderRadius: '1rem',
                          border: '1px solid #f1f5f9',
                          transition: 'background-color 0.2s'
                        }}
                      >
                        {/* Date Badge */}
                        <div style={{ 
                          minWidth: '120px', 
                          background: '#e0e7ff', 
                          color: '#4f46e5', 
                          fontWeight: 'bold', 
                          padding: '0.75rem 1rem', 
                          borderRadius: '0.75rem', 
                          textAlign: 'center',
                          fontSize: '1.05rem'
                        }}>
                          {item.date}
                        </div>

                        {/* Details Text */}
                        <div style={{ flex: 1, fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                          {item.details}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '3rem 0', color: '#64748b' }}>
                    <p>No events scheduled at the moment. Please check back later.</p>
                  </div>
                )}
              </motion.div>

            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Calendar;