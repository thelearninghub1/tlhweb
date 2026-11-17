import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { createCareerAction, clearErrors } from "../../../actions/careerAction";
import { CAREER_SUBMIT_RESET } from "../../../constants/careerConstants";
import Loader from "../../layout/Loader/Loader";
import Metadata from "../../layout/Metadata/Metadata";
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaFileUpload } from "react-icons/fa";

const Career = () => {
  const dispatch = useDispatch();
  const { loading, error, success, message } = useSelector((state) => state.careerCareer);

  const [form, setForm] = useState({
    name: '',
    email: '',
    country: '',
    applyFor: '',
    message: ''
  });

  const [cv, setCv] = useState(null);
  const [certificates, setCertificates] = useState([]);
  const [sent, setSent] = useState(false);

  const cvInputRef = useRef();
  const certificatesInputRef = useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'cv') {
      setCv(files[0]);
    } else if (name === 'certificates') {
      setCertificates(Array.from(files));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (cv) formData.append('cv', cv);
    certificates.forEach(file => formData.append('certificates', file));

    dispatch(createCareerAction(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success(message);
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      dispatch({ type: CAREER_SUBMIT_RESET });

      setForm({ name: '', email: '', country: '', applyFor: '', message: '' });
      setCv(null);
      setCertificates([]);

      if (cvInputRef.current) cvInputRef.current.value = '';
      if (certificatesInputRef.current) certificatesInputRef.current.value = '';
    }
  }, [error, success, message, dispatch]);

  const inputClass =
    "w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-slate-800 placeholder-gray-400 outline-none transition-all focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100/50 text-sm";

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title="Career At TLH - The Learning Hub" />

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
            <div style={{ position: 'relative', background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', padding: '5rem 1rem 8rem 1rem', overflow: 'hidden' }}>
              
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.8 }} />
              
              <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', top: '20%', left: '10%', opacity: 0.15 }} className="text-white text-7xl hidden md:block">
                <FaBriefcase />
              </motion.div>
              <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', bottom: '30%', right: '10%', opacity: 0.15 }} className="text-white text-7xl hidden md:block">
                <FaGraduationCap />
              </motion.div>

              <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', textAlign: 'center', zIndex: 10 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ display: 'inline-block', padding: '0.5rem 1.25rem', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#e0e7ff', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '1.5rem', backdropFilter: 'blur(10px)' }}
                >
                  JOIN OUR TEAM
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
                >
                  Shape the Future <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    With Us
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{ marginTop: '1.5rem', fontSize: '1.125rem', color: '#94a3b8', maxWidth: '600px', margin: '1.5rem auto 0 auto', lineHeight: 1.6 }}
                >
                  We are always looking for passionate educators and innovators. 
                  Apply below to start your journey with The Learning Hub.
                </motion.p>
              </div>

              <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" style={{ display: 'block', width: '100%', height: 'auto' }}>
                  <path fill="#f8fafc" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                </svg>
              </div>
            </div>

            {/* ================= MAIN CONTENT ================= */}
            <div style={{ position: 'relative', maxWidth: '900px', margin: '-4rem auto 0 auto', padding: '0 1rem 4rem 1rem', zIndex: 20 }}>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                style={{ background: 'white', borderRadius: '1.5rem', padding: '2rem', boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)', border: '1px solid rgba(226, 232, 240, 0.8)' }}
                className="md:p-10"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Application Form</h2>

                <AnimatePresence>
                  {sent && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, mb: 0 }}
                      animate={{ opacity: 1, height: 'auto', mb: 24 }}
                      exit={{ opacity: 0, height: 0, mb: 0 }}
                      style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', color: '#047857', padding: '1rem', borderRadius: '0.75rem', fontSize: '0.875rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                      <span style={{ fontSize: '1.25rem' }}>✅</span> Application submitted successfully. We will review it soon!
                    </motion.div>
                  )}
                </AnimatePresence>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={handleSubmit}>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}>
                    <input
                      type="text"
                      name="applyFor"
                      placeholder="Position Applying For"
                      required
                      value={form.applyFor}
                      onChange={handleChange}
                      className={inputClass}
                    />
                    <input
                      type="text"
                      name="country"
                      placeholder="Country"
                      required
                      value={form.country}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <textarea
                    name="message"
                    placeholder="Additional Information / Cover Letter ..."
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={inputClass + " resize-none"}
                  />

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem', marginTop: '0.5rem' }}>
                    
                    {/* CV Upload */}
                    <div style={{ background: '#f8fafc', border: '2px dashed #cbd5e1', borderRadius: '1rem', padding: '1.5rem', textAlign: 'center', transition: 'all 0.2s', position: 'relative' }}>
                      <FaFileUpload style={{ fontSize: '2rem', color: '#6366f1', margin: '0 auto 0.5rem auto' }} />
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>
                        Upload Your CV (PDF, DOC)
                      </label>
                      <input
                        type="file"
                        name="cv"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        ref={cvInputRef}
                        required
                        style={{ display: 'block', width: '100%', fontSize: '0.875rem', color: '#64748b', cursor: 'pointer' }}
                      />
                      {cv && <p style={{ fontSize: '0.75rem', color: '#6366f1', marginTop: '0.5rem', fontWeight: 600 }}>✓ {cv.name}</p>}
                    </div>

                    {/* Certificates Upload */}
                    <div style={{ background: '#f8fafc', border: '2px dashed #cbd5e1', borderRadius: '1rem', padding: '1.5rem', textAlign: 'center', transition: 'all 0.2s', position: 'relative' }}>
                      <FaFileUpload style={{ fontSize: '2rem', color: '#d946ef', margin: '0 auto 0.5rem auto' }} />
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>
                        Certificates / Testimonials
                      </label>
                      <input
                        type="file"
                        name="certificates"
                        accept=".pdf,.jpg,.png"
                        multiple
                        onChange={handleFileChange}
                        ref={certificatesInputRef}
                        style={{ display: 'block', width: '100%', fontSize: '0.875rem', color: '#64748b', cursor: 'pointer' }}
                      />
                      {certificates.length > 0 && <p style={{ fontSize: '0.75rem', color: '#d946ef', marginTop: '0.5rem', fontWeight: 600 }}>✓ {certificates.length} file(s) selected</p>}
                    </div>

                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', color: 'white', fontWeight: 'bold', fontSize: '1.125rem', cursor: 'pointer', border: 'none', background: 'linear-gradient(to right, #4f46e5, #db2777)', boxShadow: '0 10px 20px -5px rgba(79, 70, 229, 0.4)', marginTop: '1rem' }}
                    className="hover:shadow-lg transition-all"
                  >
                    Submit Application
                  </motion.button>
                </form>
              </motion.div>

            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Career;