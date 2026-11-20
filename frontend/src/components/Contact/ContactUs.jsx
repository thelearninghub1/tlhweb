import React, { Fragment, useEffect, useState } from 'react';
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createContactUsAction, clearErrors } from '../../actions/contactUsAction';
import { CONTACT_US_RESET } from '../../constants/contactUsContants';
import { toast } from 'react-toastify';
import Loader from '../layout/Loader/Loader';
import Metadata from '../layout/Metadata/Metadata';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ReCAPTCHA from "react-google-recaptcha";
import { motion, AnimatePresence } from 'framer-motion';

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);
  const [sent, setSent] = useState(false);

  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.createContactUs);

  const contactSubmitHandler = (e) => {
    e.preventDefault();
    if (!captchaToken) {
      toast.error("Please verify you are not a robot");
      return;
    }
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("country", country);
    myForm.set("message", message);
    myForm.set("phoneNo", phoneNo);
    myForm.set("captchaToken", captchaToken);
    dispatch(createContactUsAction(myForm));
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
      setName(""); setEmail(""); setCountry("");
      setMessage(""); setPhoneNo(""); setCaptchaToken(null);
    }
  }, [error, dispatch, success]);

  const inputClass =
    "w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-slate-800 placeholder-gray-400 outline-none transition-all focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100/50 text-sm";

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
      icon: <AiOutlinePhone />,
      title: "Call Us",
      subtitle: "Reach out to us for more details",
      extra: "+92 345 3324826",
      extra2: "support@thelearninghubedu.com",
      gradient: "from-indigo-400 to-purple-600",
      shadow: "shadow-indigo-200",
    },
    {
      icon: <FaRegClock />,
      title: "Working Hours",
      subtitle: "We are available to help",
      extra: "Mon - Fri: 9AM - 6PM",
      gradient: "from-blue-400 to-cyan-600",
      shadow: "shadow-blue-200",
    },
    {
      icon: <FaRegClock />,
      title: "Partner with Us",
      subtitle: "Reach out to us for more details",
      link: { to: "/partner-with-us", label: "Let's innovate together" },
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
          <Metadata title="Contact Us - The Learning Hub" />

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
              
              <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', top: '20%', left: '10%', opacity: 0.2 }} className="text-white text-6xl hidden md:block">
                <IoLogoWhatsapp />
              </motion.div>
              <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', bottom: '30%', right: '10%', opacity: 0.2 }} className="text-white text-6xl hidden md:block">
                <AiOutlinePhone />
              </motion.div>

              <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', textAlign: 'center', zIndex: 10 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#e0e7ff', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '1.5rem', backdropFilter: 'blur(10px)' }}
                >
                  WE'D LOVE TO HEAR FROM YOU
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
                >
                  Let's Start a <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    Conversation
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{ marginTop: '1.5rem', fontSize: '1.125rem', color: '#94a3b8', maxWidth: '600px', margin: '1.5rem auto 0 auto', lineHeight: 1.6 }}
                >
                  Have a question about our programs, admissions, or partnerships? 
                  Drop us a message and our team will get back to you within 24 hours.
                </motion.p>
              </div>

              <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" style={{ display: 'block', width: '100%', height: 'auto' }}>
                  <path fill="#f8fafc" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                </svg>
              </div>
            </div>

            {/* ================= MAIN CONTENT ================= */}
            {/* Increased maxWidth to 1400px and adjusted padding for a wider, more balanced look */}
            <div style={{ position: 'relative', maxWidth: '1400px', margin: '-4rem auto 0 auto', padding: '0 1.5rem 5rem 1.5rem', zIndex: 20 }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', alignItems: 'stretch' }}>
                
                {/* --- FORM CARD --- */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  style={{ background: 'white', borderRadius: '1.5rem', padding: '2.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)', border: '1px solid rgba(226, 232, 240, 0.8)', display: 'flex', flexDirection: 'column' }}
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>

                  <AnimatePresence>
                    {sent && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, mb: 0 }}
                        animate={{ opacity: 1, height: 'auto', mb: 16 }}
                        exit={{ opacity: 0, height: 0, mb: 0 }}
                        style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', color: '#047857', padding: '1rem', borderRadius: '0.75rem', fontSize: '0.875rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                      >
                        <span style={{ fontSize: '1.25rem' }}>✅</span> Message sent successfully. We'll reply soon!
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
                        placeholder="Email Address"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputClass}
                      />
                    </div>

                    <div style={{ width: '100%' }}>
                      <PhoneInput
                        country={'us'}
                        value={phoneNo}
                        onChange={(phone, countryData) => {
                          setPhoneNo("+" + phone);
                          setCountry(countryData.name);
                        }}
                        containerClass="!w-full"
                        inputClass="!w-full !bg-gray-50 !border-gray-200 !rounded-xl !py-6 !text-sm focus:!bg-white"
                        buttonClass="!bg-transparent !border-gray-200 !rounded-l-xl"
                        dropdownClass="!text-sm"
                        required
                      />
                    </div>

                    <textarea
                      placeholder="How can we help you?"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={inputClass + " resize-none"}
                      style={{ flex: 1, minHeight: '120px' }}
                    />

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', background: '#f8fafc', borderRadius: '0.75rem', padding: '1rem', border: '1px dashed #cbd5e1' }}>
                      <div style={{ transform: 'scale(0.9)', transformOrigin: 'center' }}>
                        <ReCAPTCHA
                          sitekey="6LdoZLsrAAAAALU5p1kReTjBOMfc7azIJBJo1FbV"
                          onChange={(token) => setCaptchaToken(token)}
                        />
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', color: 'white', fontWeight: 'bold', fontSize: '1.125rem', cursor: 'pointer', border: 'none', background: 'linear-gradient(to right, #4f46e5, #db2777)', boxShadow: '0 10px 20px -5px rgba(79, 70, 229, 0.4)' }}
                      className="hover:shadow-lg transition-all mt-auto"
                    >
                      Send Message
                    </motion.button>
                  </form>
                </motion.div>

                {/* --- INFO CARDS --- */}
                {/* Changed to a 2x2 grid layout for a better fill and less awkward gaps */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'stretch' }}>
                  {infoCards.map((card, index) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      style={{ background: 'white', borderRadius: '1.5rem', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.08)', border: '1px solid #f1f5f9', cursor: 'default' }}
                    >
                      <div style={{ width: '4rem', height: '4rem', borderRadius: '1rem', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '1.5rem' }} className={`bg-gradient-to-br ${card.gradient} ${card.shadow} shadow-lg`}>
                        {card.icon}
                      </div>
                      
                      <h3 style={{ fontWeight: 'bold', color: '#0f172a', fontSize: '1.25rem', marginBottom: '0.5rem' }}>{card.title}</h3>
                      <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1rem' }}>{card.subtitle}</p>
                      
                      {card.extra && (
                        <p style={{ color: '#4f46e5', fontWeight: 700, fontSize: '1.1rem', wordBreak: 'break-all', margin: 0 }}>
                          {card.extra}
                        </p>
                      )}
                      {card.extra2 && (
                        <p style={{ color: '#475569', fontSize: '0.9rem', wordBreak: 'break-all', marginTop: '0.5rem', margin: 0 }}>{card.extra2}</p>
                      )}
                      
                      {card.link && (
                        <Link
                          to={card.link.to}
                          style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 600, color: '#db2777', textDecoration: 'none' }}
                          className="hover:text-pink-700 transition-colors"
                        >
                          {card.link.label} 
                          <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                        </Link>
                      )}
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

export default ContactUs;