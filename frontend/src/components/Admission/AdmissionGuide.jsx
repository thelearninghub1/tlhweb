import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Metadata from '../layout/Metadata/Metadata';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const AdmissionGuide = () => {
  const steps = [
    { step: "01", title: "INQUIRY", desc: "Parent submit the admission application form, communicate briefly about the child's educational needs." },
    { step: "02", title: "DEMO", desc: "3 days trial demonstration is given to every child, to give an idea of the school environment." },
    { step: "03", title: "PLACEMENT TEST", desc: "Child takes admission assessment, after the test we will enroll every student in the class as per his/her caliber." },
    { step: "04", title: "ADMISSION", desc: "Submission of remaining admission documents and then applicant & parents attend discussion meeting with the school head." },
  ];

  const ageGroups = [
    { age: "3+", grade: "FS1" }, { age: "4+", grade: "FS2" }, { age: "5+", grade: "FS3" },
    { age: "6+", grade: "1" }, { age: "7+", grade: "2" }, { age: "8+", grade: "3" },
    { age: "9+", grade: "4" }, { age: "10+", grade: "5" }, { age: "11+", grade: "6" },
    { age: "12+", grade: "7" }, { age: "13+", grade: "8" }, { age: "14+", grade: "9" },
    { age: "15+", grade: "10" }, { age: "16+", grade: "11" }, { age: "17+", grade: "12" },
  ];

  return (
    <Fragment>
      <Metadata title="Admission Guide - The Learning Hub" />

      <div style={{ minHeight: '100vh', background: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
        
        {/* ================= BACKGROUND ANIMATED ORBS ================= */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', top: '10%', left: '-10%', width: '500px', height: '500px', background: 'rgba(99, 102, 241, 0.15)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} 
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ position: 'absolute', top: '40%', right: '-10%', width: '600px', height: '600px', background: 'rgba(236, 72, 153, 0.15)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} 
        />

        {/* ================= HERO BANNER ================= */}
        <div style={{ position: 'relative', background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', padding: '6rem 1rem 8rem 1rem', overflow: 'hidden' }}>
          
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.8 }} />
          
          <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', top: '20%', right: '10%', opacity: 0.1 }} className="text-white text-9xl hidden md:block">
            <FaGraduationCap />
          </motion.div>

          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', textAlign: 'center', zIndex: 10 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              style={{ display: 'inline-block', padding: '0.5rem 1.25rem', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#e0e7ff', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '1.5rem', backdropFilter: 'blur(10px)' }}>
              START YOUR JOURNEY
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
              Admission <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Guide
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              style={{ marginTop: '1.5rem', fontSize: '1.125rem', color: '#cbd5e1', maxWidth: '600px', margin: '1.5rem auto 0 auto', lineHeight: 1.6 }}>
              Everything you need to know about joining The Learning Hub. 
              Follow our simple 4-step procedure to get started.
            </motion.p>
          </div>

          <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0, zIndex: 10 }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" style={{ display: 'block', width: '100%', height: 'auto' }}>
              <path fill="#f8fafc" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
            </svg>
          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        {/* Increased width to 1400px and added side padding for a spacious premium look */}
        <div style={{ position: 'relative', maxWidth: '1400px', margin: '-4rem auto 0 auto', padding: '0 1.5rem 5rem 1.5rem', zIndex: 20 }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'stretch' }}>
            
            {/* --- LEFT SIDE: ADMISSION STEPS --- */}
            <div style={{ flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem', marginTop: 0 }}>The Admission Procedure</h2>
              
              {steps.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)' }}
                  style={{ background: 'white', borderRadius: '1.5rem', padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9', position: 'relative', overflow: 'hidden', flex: 1 }}
                >
                  <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '6px', background: 'linear-gradient(to bottom, #4f46e5, #db2777)' }} />
                  <div style={{ flexShrink: 0, width: '56px', height: '56px', borderRadius: '50%', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.25rem' }}>
                    {item.step}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', margin: '0 0 0.5rem 0' }}>{item.title}</h3>
                    <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* --- RIGHT SIDE: AGE CRITERIA & APPLY --- */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              style={{ 
                flex: '1 1 450px', 
                background: 'white', 
                borderRadius: '1.5rem', 
                padding: '2.5rem', 
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', 
                border: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1.5rem', textAlign: 'center', marginTop: 0 }}>Age Criteria</h2>
              
              <div style={{ flex: 1, overflowY: 'auto', borderRadius: '1rem', border: '1px solid #f1f5f9', maxHeight: '550px' }} className="custom-scrollbar">
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead style={{ position: 'sticky', top: 0, background: '#f8fafc', zIndex: 10 }}>
                    <tr>
                      <th style={{ padding: '1rem', fontSize: '1rem', fontWeight: 600, color: '#475569', borderBottom: '2px solid #e2e8f0' }}>Age (Years)</th>
                      <th style={{ padding: '1rem', fontSize: '1rem', fontWeight: 600, color: '#475569', borderBottom: '2px solid #e2e8f0' }}>Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ageGroups.map((item, index) => (
                      <tr key={index} style={{ borderBottom: '1px solid #f1f5f9', background: index % 2 === 0 ? 'white' : '#f8fafc', transition: 'background 0.2s' }} className="hover:bg-gray-50">
                        <td style={{ padding: '1rem', color: '#334155', fontWeight: 500 }}>{item.age}</td>
                        <td style={{ padding: '1rem', color: '#4f46e5', fontWeight: 600 }}>{item.grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <Link 
                  to={`/apply-now`} 
                  style={{ display: 'block', width: '100%', padding: '1rem', borderRadius: '1rem', color: 'white', fontWeight: 'bold', fontSize: '1.125rem', textAlign: 'center', background: 'linear-gradient(to right, #4f46e5, #db2777)', textDecoration: 'none', boxShadow: '0 10px 20px -5px rgba(79, 70, 229, 0.4)' }} 
                  className="hover:scale-105 transition-transform"
                >
                  Apply Now
                </Link>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </Fragment>
  );
};

export default AdmissionGuide;