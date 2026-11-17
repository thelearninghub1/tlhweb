import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { allAffiliationAction, clearErrors } from "../../../actions/affilationAction";
import Loader from "../../layout/Loader/Loader";
import Metadata from "../../layout/Metadata/Metadata";
import { motion } from 'framer-motion';

const Affiliation = () => {
  const dispatch = useDispatch();
  const { loading, error, afiliations } = useSelector((state) => state.allAffiliation);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(allAffiliationAction());
  }, [error, dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title="Affiliation & Accreditation - The Learning Hub" />

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

            {/* ================= HERO BANNER (No Video) ================= */}
            <div style={{ position: 'relative', background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', padding: '6rem 1rem 8rem 1rem', overflow: 'hidden' }}>
              
              {/* Grid Pattern Overlay */}
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.8 }} />

              {/* Banner Content */}
              <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', textAlign: 'center', zIndex: 10 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ display: 'inline-block', padding: '0.5rem 1.25rem', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#e0e7ff', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '1.5rem', backdropFilter: 'blur(10px)' }}
                >
                  GLOBALLY RECOGNIZED
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
                >
                  Affiliation & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    Accreditation
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{ marginTop: '1.5rem', fontSize: '1.125rem', color: '#cbd5e1', maxWidth: '600px', margin: '1.5rem auto 0 auto', lineHeight: 1.6 }}
                >
                  Ensuring academic integrity, nationwide recognition, and a future-ready education for every student.
                </motion.p>
              </div>

              {/* Animated SVG Wave */}
              <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0, zIndex: 10 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" style={{ display: 'block', width: '100%', height: 'auto' }}>
                  <path fill="#f8fafc" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                </svg>
              </div>
            </div>

            {/* ================= MAIN CONTENT ================= */}
            <div style={{ position: 'relative', maxWidth: '1000px', margin: '-4rem auto 0 auto', padding: '0 1rem 5rem 1rem', zIndex: 20 }}>
              
              {/* INTRODUCTION CARD */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                style={{ background: 'white', borderRadius: '1.5rem', padding: '2.5rem', boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)', border: '1px solid rgba(226, 232, 240, 0.8)', marginBottom: '3rem' }}
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-4">Our Accreditations</h2>
                
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  The Learning Hub is a certified educational institution recognized by the <strong style={{ color: '#0f172a' }}>Federal Board of Intermediate and Secondary Education (FBISE), Islamabad</strong>. Our programs are aligned with international standards and offer globally accepted certifications.
                </p>

                <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1e293b', marginBottom: '1rem' }}>
                  We are proudly affiliated with:
                </p>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem', paddingLeft: 0, listStyle: 'none' }}>
                  {[
                    { title: "FBISE Islamabad; Institution Code: 3124", desc: "Ensuring academic integrity and nationwide recognition." },
                    { title: "Private Cambridge Setup", desc: "Offering customized Cambridge programs for families seeking flexibility with global standards." },
                    { title: "The Education Consultancy (TEC)", desc: "Our academic partner committed to excellence in education across borders." },
                    { title: "EDAP School Management System", desc: "A digital platform to manage and streamline academic, administrative, and communication processes." }
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ flexShrink: 0, width: '1.5rem', height: '1.5rem', borderRadius: '50%', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', fontWeight: 'bold', marginTop: '0.15rem' }}>
                        ✓
                      </div>
                      <div>
                        <strong style={{ color: '#1e293b', display: 'block' }}>{item.title}</strong>
                        <span style={{ color: '#64748b', fontSize: '0.95rem' }}>{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>
                  All academic stages, from Nursery to SSC-II, follow a structured study map designed to meet curriculum standards and promote STEAM learning across all levels.
                </p>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.8, margin: 0 }}>
                  Our certifications, partnerships, and educational model ensure students receive a future-ready, credible, and globally accepted education.
                </p>
              </motion.div>

              {/* ROADMAPS / PROGRAMS SECTION */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {afiliations && afiliations.map((program, index) => (
                  <motion.div 
                    key={program._id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    style={{ 
                      background: 'white', 
                      borderRadius: '1.5rem', 
                      overflow: 'hidden', 
                      boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.05)', 
                      border: '1px solid rgba(226, 232, 240, 0.8)',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {/* Card Header */}
                    <div style={{ padding: '2rem 2rem 1rem 2rem', borderBottom: '1px solid #f1f5f9' }}>
                      <h2 className="text-2xl font-bold text-slate-800" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ display: 'inline-block', width: '8px', height: '24px', background: 'linear-gradient(to bottom, #4f46e5, #db2777)', borderRadius: '4px' }} />
                        {program.title}
                      </h2>
                      <p style={{ marginTop: '0.75rem', color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>
                        {program.description}
                      </p>
                    </div>

                    {/* Roadmap Image Container */}
                    <div style={{ padding: '2rem', background: '#f8fafc', display: 'flex', justifyContent: 'center' }}>
                      <img 
                        src={program.avatar.url} 
                        alt={`${program.title} Roadmap`} 
                        style={{ 
                          maxWidth: '100%', 
                          height: 'auto', 
                          borderRadius: '1rem', 
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                          objectFit: 'contain'
                        }} 
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Affiliation;