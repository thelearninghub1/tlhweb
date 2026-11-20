import React, { Fragment, useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import SubjectCard from './SubjectCard.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { allProjectsAction, clearErrors } from '../../actions/subjectActions';
import { toast } from 'react-toastify';
import Loader from '../layout/Loader/Loader.jsx';
import Metadata from '../layout/Metadata/Metadata.jsx';
import { motion } from 'framer-motion';
import { FaBookOpen } from 'react-icons/fa';

const Subject = () => {
  const dispatch = useDispatch();
  const { loading, error, subjects, resultPerPage, subjectsCount } = useSelector((state) => state.allSub);

  const [currentPage, setCurrentPage] = useState(1);
  const [grade, setGrade] = useState('');

  const categories = [
    'Foundation Stage 1', 'Foundation Stage 2', 'Foundation Stage 3',
    'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6',
    'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11',
  ];

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (grade) {
      dispatch(allProjectsAction(currentPage, grade));
    }
  }, [error, dispatch, currentPage, grade]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title={`Subject Summary - The Learning Hub`} />

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
              
              <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', top: '20%', left: '10%', opacity: 0.1 }} className="text-white text-9xl hidden md:block">
                <FaBookOpen />
              </motion.div>

              <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', textAlign: 'center', zIndex: 10 }}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ display: 'inline-block', padding: '0.5rem 1.25rem', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#e0e7ff', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '1.5rem', backdropFilter: 'blur(10px)' }}>
                  CURRICULUM OVERVIEW
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
                  Subject <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Summary</span>
                </motion.h1>

                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} style={{ marginTop: '1.5rem', fontSize: '1.125rem', color: '#cbd5e1', maxWidth: '600px', margin: '1.5rem auto 0 auto', lineHeight: 1.6 }}>
                  Select a grade level below to explore the comprehensive curriculum and subjects offered.
                </motion.p>
              </div>

              <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0, zIndex: 10 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" style={{ display: 'block', width: '100%', height: 'auto' }}>
                  <path fill="#f8fafc" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                </svg>
              </div>
            </div>

            {/* ================= MAIN CONTENT ================= */}
            <div style={{ position: 'relative', maxWidth: '1400px', margin: '-4rem auto 0 auto', padding: '0 1.5rem 5rem 1.5rem', zIndex: 20 }}>
              
              {/* Filter Buttons */}
              <div style={{ 
                display: 'flex', 
                overflowX: 'auto', 
                gap: '0.75rem', 
                paddingBottom: '1rem', 
                scrollbarWidth: 'none',
                marginBottom: '3rem',
                background: 'white',
                padding: '1.5rem',
                borderRadius: '1.5rem',
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
                border: '1px solid #f1f5f9'
              }} className="hide-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setGrade(cat);
                      setCurrentPage(1);
                    }}
                    style={{
                      padding: '0.75rem 1.5rem',
                      borderRadius: '50px',
                      whiteSpace: 'nowrap',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      border: 'none',
                      transition: 'all 0.2s',
                      background: grade === cat ? 'linear-gradient(to right, #4f46e5, #db2777)' : '#f1f5f9',
                      color: grade === cat ? 'white' : '#64748b',
                      boxShadow: grade === cat ? '0 4px 6px -1px rgba(79, 70, 229, 0.4)' : 'none'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Subjects Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
                {grade && subjects && subjects.length > 0 ? (
                  subjects.map((subject) => (
                    <SubjectCard subject={subject} key={subject._id} />
                  ))
                ) : !grade ? (
                  <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 0', color: '#64748b' }}>
                    <h3 className="text-xl font-semibold">Please select a grade to view subjects.</h3>
                  </div>
                ) : (
                  <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 0', color: '#64748b' }}>
                    <h3 className="text-xl font-semibold">No subjects found for this grade.</h3>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {grade && subjects && subjects.length > 0 && subjectsCount > resultPerPage && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Pagination
                    activePage={currentPage}
                    onChange={(e) => setCurrentPage(e)}
                    itemsCountPerPage={resultPerPage}
                    totalItemsCount={subjectsCount}
                    nextPageText={'Next'}
                    firstPageText={'1st'}
                    lastPageText={'Last'}
                    prevPageText={'Prev'}
                    itemClass="pagination-item"
                    linkClass="pagination-link"
                    activeClass="pagination-active"
                    activeLinkClass="pagination-active-link"
                  />
                </div>
              )}

            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Subject;