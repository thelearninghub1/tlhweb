import React, { Fragment, useEffect, useState } from 'react';
import { CiMail } from "react-icons/ci";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { createPartnerContactUsAction, clearErrors } from '../../actions/contactUsAction';
import { CONTACT_US_RESET } from '../../constants/contactUsContants';
import { toast } from 'react-toastify';
import Loader from '../layout/Loader/Loader';
import Metadata from '../layout/Metadata/Metadata';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContactPartnerWithUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [sent, setSent] = useState(false);

  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.createContactUs);

  const contactSubmitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("country", country);
    myForm.set("message", message);
    myForm.set("companyName", companyName);
    
    dispatch(createPartnerContactUsAction(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      toast.success("Message Sent Successfully");
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      dispatch({ type: CONTACT_US_RESET });
      setName(""); setEmail(""); setCountry(""); setCompanyName(""); setMessage("");
    }
  }, [success, error, dispatch]);

  const inputClass =
    "w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-slate-800 placeholder-gray-400 outline-none transition-all focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100/50 text-sm";

  const infoCards = [
    {
      icon: <IoLogoWhatsapp />,
      title: "WhatsApp Us",
      subtitle: "Reach out to us for more details",
      extra: "+971 55 292 0583",
      gradient: "from-emerald-400 to-green-600",
      shadow: "shadow-emerald-200",
    },
    {
      icon: <CiMail />,
      title: "Contact Us",
      subtitle: "Reach out to us for more details",
      extra: "+92 345 3324826",
      extra2: "support@thelearninghubedu.com",
      gradient: "from-indigo-400 to-purple-600",
      shadow: "shadow-indigo-200",
    },
    {
      icon: <FaRegClock />,
      title: "Partner with Us",
      subtitle: "Reach out to us for more details",
      extra: null,
      link: { to: "/contact-us", label: "Let's innovate together" },
      gradient: "from-pink-400 to-rose-600",
      shadow: "shadow-pink-200",
    },
  ];

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title="Partner With Us - The Learning Hub" />

          <div style={{ minHeight: '100vh', background: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
            
            {/* ================= BACKGROUND ANIMATED ORBS ================= */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} 
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: 'absolute', top: '-10%', right: '-10%', width: '500px', height: '500px', background: 'rgba(168, 85, 247, 0.15)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} 
            />
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }} 
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              style={{ position: 'absolute', bottom: '10%', left: '-10%', width: '600px', height: '600px', background: 'rgba(99, 102, 241, 0.15)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} 
            />

            {/* ================= HERO BANNER ================= */}
            <div style={{ position: 'relative', background: 'linear-gradient(135deg, #1e1b4b 0%, #4c1d95 100%)', padding: '5rem 1rem 8rem 1rem', overflow: 'hidden' }}>
              
              {/* Grid Pattern Overlay */}
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.8 }} />
              
              {/* Floating Icon Decor */}
              <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', top: '20%', left: '15%', opacity: 0.15 }} className="text-white text-7xl hidden md:block">
                <FaRegClock />
              </motion.div>
              <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', bottom: '30%', right: '15%', opacity: 0.15 }} className="text-white text-7xl hidden md:block">
                <CiMail />
              </motion.div>

              {/* Banner Content */}
              <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', textAlign: 'center', zIndex: 10 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ display: 'inline-block', padding: '0.5rem 1.25rem', borderRadius: '50px', background: 'rgba(168, 85, 247, 0.2)', border: '1px solid rgba(216, 180, 254, 0.3)', color: '#f3e8ff', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '1.5rem', backdropFilter: 'blur(10px)' }}
                >
                  BECOME A TLH PARTNER TODAY
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
                >
                  Let's Build the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400">
                    Future Together
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{ marginTop: '1.5rem', fontSize: '1.125rem', color: '#e9d5ff', maxWidth: '600px', margin: '1.5rem auto 0 auto', lineHeight: 1.6 }}
                >
                  Together, let's expand access to quality STEAM education worldwide. 
                  Fill out the form below to start a conversation.
                </motion.p>
              </div>

              {/* Animated SVG Wave */}
              <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" style={{ display: 'block', width: '100%', height: 'auto' }}>
                  <path fill="#f8fafc" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                </svg>
              </div>
            </div>

            {/* ================= MAIN CONTENT (FORM + CARDS) ================= */}
            <div style={{ position: 'relative', maxWidth: '1152px', margin: '-4rem auto 0 auto', padding: '0 1rem 4rem 1rem', zIndex: 20 }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
                
                {/* --- FORM CARD --- */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  style={{ background: 'white', borderRadius: '1.5rem', padding: '2rem', boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)', border: '1px solid rgba(226, 232, 240, 0.8)', display: 'flex', flexDirection: 'column' }}
                  className="md:p-10"
                >
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">Apply for Partnership</h2>

                  <AnimatePresence>
                    {sent && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, mb: 0 }}
                        animate={{ opacity: 1, height: 'auto', mb: 16 }}
                        exit={{ opacity: 0, height: 0, mb: 0 }}
                        style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', color: '#047857', padding: '1rem', borderRadius: '0.75rem', fontSize: '0.875rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                      >
                        <span style={{ fontSize: '1.25rem' }}>✅</span> Application sent successfully. We'll reply soon!
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }} onSubmit={contactSubmitHandler}>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={inputClass}
                      />
                      <input
                        type="email"
                        placeholder="Business Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputClass}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                      <input
                        type="text"
                        placeholder="Company Name"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className={inputClass}
                      />
                      <input
                        type="text"
                        placeholder="Country"
                        required
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className={inputClass}
                      />
                    </div>

                    <textarea
                      placeholder="Tell us about your company and how you'd like to partner..."
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={inputClass + " resize-none"}
                      style={{ flex: 1, minHeight: '150px' }}
                    />

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', color: 'white', fontWeight: 'bold', fontSize: '1.125rem', cursor: 'pointer', border: 'none', background: 'linear-gradient(to right, #7c3aed, #db2777)', boxShadow: '0 10px 20px -5px rgba(124, 58, 237, 0.4)' }}
                      className="hover:shadow-lg transition-all mt-auto"
                    >
                      Send Application
                    </motion.button>
                  </form>
                </motion.div>

                {/* --- INFO CARDS --- */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', flex: 1 }}>
                  {infoCards.map((card, index) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      style={{ background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', borderRadius: '1.25rem', padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'center', boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.08)', border: '1px solid rgba(255, 255, 255, 0.5)', cursor: 'default', flex: 1 }}
                    >
                      <div style={{ flexShrink: 0, width: '3.5rem', height: '3.5rem', borderRadius: '1rem', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem' }} className={`bg-gradient-to-br ${card.gradient} ${card.shadow} shadow-lg`}>
                        {card.icon}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h3 style={{ fontWeight: 'bold', color: '#0f172a', fontSize: '1.125rem', margin: 0 }}>{card.title}</h3>
                        <p style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.25rem', margin: 0 }}>{card.subtitle}</p>
                        
                        {card.extra && (
                          <p style={{ marginTop: '0.5rem', color: '#7c3aed', fontWeight: 700, fontSize: '1rem', wordBreak: 'break-all', margin: 0 }}>
                            {card.extra}
                          </p>
                        )}
                        {card.extra2 && (
                          <p style={{ color: '#475569', fontSize: '0.875rem', wordBreak: 'break-all', marginTop: '0.25rem', margin: 0 }}>{card.extra2}</p>
                        )}
                        
                        {card.link && (
                          <Link
                            to={card.link.to}
                            style={{ marginTop: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem', fontWeight: 600, color: '#db2777', textDecoration: 'none' }}
                            className="hover:text-pink-700 transition-colors"
                          >
                            {card.link.label} 
                            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ContactPartnerWithUs;