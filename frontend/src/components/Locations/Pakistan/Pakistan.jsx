import React, { Fragment, useState, useEffect, useRef } from 'react';
import Select from "react-select";
import countries from "world-countries";
import ClientCard from '../../About/ClientCard';
import PartnerCard from '../../Admission/PartnerCard';
import { useDispatch, useSelector } from 'react-redux';
import { allStudentAction, clearErrors } from "../../../actions/studentAction";
import Loader from '../../layout/Loader/Loader';
import { toast } from 'react-toastify';
import { allFeedbackAction } from "../../../actions/feedbackActions";
import { allCardAction } from "../../../actions/cardActions";
import { allPartnerAction } from "../../../actions/techActions";
import { allFeatureAction } from '../../../actions/affilationAction';
import { createCallBackAction } from '../../../actions/contactUsAction';
import { CONTACT_US_RESET } from '../../../constants/contactUsContants';
import Metadata from '../../layout/Metadata/Metadata';
import { useNavigate } from 'react-router-dom';
import { matchSorter } from "match-sorter";
import { motion, AnimatePresence } from 'framer-motion';
import { AdmissionsSEO, RegionalSEO } from '../../seo';

// Format countries for dropdown
const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: `${country.name.common} (${country.cca2})`,
  flag: `https://flagcdn.com/w40/${country.cca2.toLowerCase()}.png`,
}));

const Pakistan = () => {
  const programs = ["Online schooling", "One to One tutoring", "O/A levels tuitions", "Grade 9 and 10 Federal Board", "Coding", "Abacus Mathematics"];

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState(null);
  const [program, setProgram] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [WhatsAppNo, setWhatsAppNo] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [studentGrade, setStudentGrade] = useState("");
  const [feedbackIndex, setFeedbackIndex] = useState(0);

  const [isInsightHovering, setIsInsightHovering] = useState(false);
  const [isPartnerHovering, setIsPartnerHovering] = useState(false);

  const insightScrollRef = useRef();
  const partnerScrollRef = useRef();

  const dispatch = useDispatch();
  const { error: FormError, success } = useSelector((state) => state.createContactUs);
  const { loading, error, feedbacks: allStudentFeedbacks } = useSelector((state) => state.allStudent);
  const { error: FeedError, feedbacks: allFeedbacks } = useSelector((state) => state.allFeedbacks);
  const { error: cardError, cards } = useSelector((state) => state.allCards);
  const { error: partnerError, partners } = useSelector((state) => state.allPartners);
  const { error: featureError, afiliations } = useSelector((state) => state.allAffiliation);

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
  useAutoScroll(partnerScrollRef, isPartnerHovering);

  const scrollLeft = (ref) => ref.current?.scrollBy({ left: -320, behavior: "smooth" });
  const scrollRight = (ref) => ref.current?.scrollBy({ left: 320, behavior: "smooth" });

  useEffect(() => {
    const interval = setInterval(() => {
      setFeedbackIndex((prev) => allFeedbacks?.length ? (prev + 1) % allFeedbacks.length : 0);
    }, 5000);
    return () => clearInterval(interval);
  }, [allFeedbacks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("program", program);
    myForm.set("phoneNo", phoneNo);
    myForm.set("WhatsAppNo", WhatsAppNo);
    myForm.set("parentName", name);
    myForm.set("message", studentGrade);
    myForm.set("companyName", studentAge);
    myForm.set("country", country?.label ?? "");
    dispatch(createCallBackAction(myForm));
  };

  useEffect(() => {
    if (error || FeedError || cardError || partnerError || featureError || FormError) {
      toast.error(error || FeedError || cardError || partnerError || featureError || FormError);
      dispatch(clearErrors());
    }
    if (success) {
      toast.success(`Thank you. Our team will contact you soon!`);
      dispatch({ type: CONTACT_US_RESET });
      setName(""); setEmail(""); setCountry(null); setPhoneNo(""); setProgram(""); setWhatsAppNo("");
      setStudentName(""); setStudentAge(""); setStudentGrade("");
      navigate("/thank-you");
    }
    dispatch(allCardAction());
    dispatch(allFeatureAction());
    dispatch(allStudentAction());
    dispatch(allFeedbackAction());
    dispatch(allPartnerAction());
  }, [error, FormError, success, dispatch, FeedError, cardError, partnerError, featureError, navigate]);

  const inputClass = "w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-slate-800 placeholder-gray-400 outline-none transition-all focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100/50 text-sm";

  const featured = [
    { id: 1, title: "No Physical Barriers", description: "Learn from anywhere in Pakistan with fully online classes — quality education delivered right to your home.", icon: "🌍" },
    { id: 2, title: "Modern STEAM Curriculum", description: "Cutting-edge syllabus integrating Science, Technology, Engineering, Arts, and Mathematics to equip students for the future.", icon: "🚀" },
    { id: 3, title: "Continuous Assessment", description: "Structured evaluations to monitor student growth, ensuring steady academic improvement at every stage.", icon: "📈" },
    { id: 4, title: "Parent-Teacher Collaboration", description: "Parents stay informed through regular updates, progress tracking, and direct communication with instructors.", icon: "🤝" }
  ];

  // Pakistan flag colors
  const pkGreen = "#01411C";       // dark green
  const pkGreenMid = "#046A38";    // medium green
  const pkGreenLight = "#0B7A46";  // lighter green
  const pkWhite = "#FFFFFF";

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <AdmissionsSEO region="pakistan" />
          <RegionalSEO country="pakistan" city="Karachi" />
          <Metadata title="Pakistan - The Learning Hub" />

          <div style={{ minHeight: '100vh', background: '#f8fafc', position: 'relative', overflow: 'hidden' }}>

            {/* ================= BACKGROUND ANIMATED ORBS (PAKISTAN GREENS) ================= */}
            <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', background: 'rgba(4, 106, 56, 0.15)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />
            <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} style={{ position: 'absolute', bottom: '10%', right: '-10%', width: '600px', height: '600px', background: 'rgba(1, 65, 28, 0.15)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />

            {/* ================= HERO BANNER (PAKISTAN GREEN + WHITE) ================= */}
            <div style={{ position: 'relative', background: 'linear-gradient(135deg, #01411C 0%, #046A38 55%, #0B7A46 100%)', padding: '8rem 1rem 6rem 1rem', overflow: 'hidden' }}>
              {/* Subtle grid overlay */}
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.8 }} />

              {/* White diagonal glow band — Pakistan flag white stripe */}
              <motion.div
                animate={{ opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'absolute', top: 0, bottom: 0, left: '12%', width: '90px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.35), transparent)', transform: 'skewX(-12deg)', pointerEvents: 'none' }}
              />

              {/* Floating Pakistan Flags around the banner */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, (i % 2 === 0 ? 10 : -10), 0],
                    opacity: [0.15, 0.3, 0.15]
                  }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  style={{
                    position: 'absolute',
                    top: `${15 + (i * 12)}%`,
                    left: i < 3 ? `${5 + (i * 10)}%` : 'auto',
                    right: i >= 3 ? `${5 + ((i - 3) * 10)}%` : 'auto',
                    zIndex: 0,
                    pointerEvents: 'none'
                  }}
                >
                  <img
                    src="https://flagcdn.com/w160/pk.png"
                    alt="Pakistan Flag"
                    style={{
                      width: '80px',
                      borderRadius: '4px',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                      transform: 'perspective(500px) rotateY(-15deg)'
                    }}
                  />
                </motion.div>
              ))}

              <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', textAlign: 'center', zIndex: 10 }}>

                {/* MASSIVE PAKISTAN FLAG CENTERED */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}
                >
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: -20, background: 'linear-gradient(to right, #01411C, #046A38, #ffffff, #046A38)', filter: 'blur(40px)', opacity: 0.5, borderRadius: '50%' }} />
                    <img
                      src="https://flagcdn.com/w320/pk.png"
                      alt="Pakistan Flag"
                      style={{ width: '100%', maxWidth: '300px', borderRadius: '1rem', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '4px solid rgba(255,255,255,0.15)', position: 'relative', zIndex: 2 }}
                    />
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ display: 'inline-block', padding: '0.4rem 1rem', borderRadius: '50px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', color: '#d1fae5', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '1rem', backdropFilter: 'blur(10px)' }}>
                  GLOBAL LEARNING
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-6xl font-extrabold text-white tracking-tight" style={{ whiteSpace: 'nowrap' }}>
                  Learning in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-200 to-white">Pakistan</span>
                </motion.h1>

                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} style={{ marginTop: '1rem', fontSize: '1rem', color: '#d1fae5', maxWidth: '600px', margin: '1rem auto 0 auto', lineHeight: 1.6 }}>
                  Enroll your child for Session 2026-27 and become part of The Learning Hub community in Pakistan.
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

              {/* TOP SECTION: FORM & CONTENT */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'stretch', marginBottom: '6rem' }}>

                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column' }}>

                  {/* Heading in Pakistan Flag Colors (Green + White + Green) */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <img src="https://flagcdn.com/w80/pk.png" alt="Pakistan" width="40" style={{ borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
                    <h2 style={{
                      fontSize: '2.2rem',
                      fontWeight: 900,
                      margin: 0,
                      background: `linear-gradient(to right, ${pkGreen} 33%, ${pkGreenLight} 33% 66%, ${pkGreenMid} 66%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      letterSpacing: '-0.5px'
                    }}>
                      Learning That Inspires
                    </h2>
                  </div>

                  <p style={{ fontSize: '1.1rem', color: '#1e293b', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 600 }}>
                    At TLH, we believe that learning should feel like an adventure. It should spark curiosity and build confidence. That's why our programs are designed to be interactive, creative, and future-focused.
                  </p>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem' }}>We offer:</h3>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem', paddingLeft: 0, listStyle: 'none' }}>
                    {["Certified online schooling", "Personalized tutoring", "Live study support and exam preparation", "Hands-on STEAM programs"].map((item, i) => (
                      <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#d1fae5', color: '#046A38', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 'bold' }}>✓</div>
                        <span style={{ color: '#0f172a', fontWeight: 700, fontSize: '1.1rem' }}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ flex: 1, borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)', border: '6px solid white', background: '#0f172a', minHeight: '280px' }}>
                    <iframe src="https://youtube.com/embed/MqJJiP_x1IE" title="YouTube video player" style={{ width: '100%', height: '100%', border: 0, display: 'block' }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} style={{ flex: '1 1 400px', background: 'white', borderRadius: '1.5rem', padding: '2.5rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', border: '1px solid #e2e8f0' }}>
                  <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <img src="https://flagcdn.com/w40/pk.png" alt="Pakistan" width="24" style={{ borderRadius: '2px' }} />
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#046A38', letterSpacing: '1px' }}>PAKISTAN OFFICE</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">We are here to help</h3>
                    <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Speak with an Admission Counselor</p>
                  </div>

                  <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Parent Name *" required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
                    <input type="email" placeholder="Email *" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
                    <input type="tel" placeholder="Phone *" required value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} className={inputClass} />
                    <input type="text" placeholder="WhatsApp Number" value={WhatsAppNo} onChange={(e) => setWhatsAppNo(e.target.value)} className={inputClass} />

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <input type="text" placeholder="Student Name *" required value={studentName} onChange={(e) => setStudentName(e.target.value)} className={inputClass} />
                      <input type="text" placeholder="Student Age" value={studentAge} onChange={(e) => setStudentAge(e.target.value)} className={inputClass} />
                    </div>

                    <input type="text" placeholder="Student Grade" value={studentGrade} onChange={(e) => setStudentGrade(e.target.value)} className={inputClass} />

                    <select value={program} onChange={(e) => setProgram(e.target.value)} required className={inputClass}>
                      <option value="">-- Choose Program --</option>
                      {programs.map((prog, index) => (<option key={index} value={prog}>{prog}</option>))}
                    </select>

                    <Select
                      options={formattedCountries}
                      value={country}
                      onChange={(selectedOption) => setCountry(selectedOption)}
                      placeholder="Select Country"
                      isSearchable={true}
                      styles={{
                        control: (base) => ({ ...base, padding: '2px', borderRadius: '0.75rem', borderColor: '#e5e7eb', backgroundColor: '#f9fafb' }),
                        menu: (base) => ({ ...base, zIndex: 9999 })
                      }}
                      getOptionLabel={(e) => (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <img src={e.flag} alt="" width="20px" />
                          {e.label}
                        </div>
                      )}
                      getOptionValue={(e) => e.value}
                      filterOption={(option, rawInput) => {
                        const input = rawInput.toLowerCase();
                        const name = option.data.label.toLowerCase();
                        const code = option.data.value.toLowerCase();
                        return name.includes(input) || code.includes(input) || matchSorter([name], input).length > 0;
                      }}
                    />

                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', color: 'white', fontWeight: 'bold', fontSize: '1rem', background: `linear-gradient(to right, ${pkGreenMid}, ${pkGreen})`, border: 'none', cursor: 'pointer', marginTop: '0.5rem', boxShadow: '0 10px 20px -5px rgba(4, 106, 56, 0.4)' }}>
                      REQUEST A CALL BACK
                    </motion.button>
                  </form>
                </motion.div>
              </div>

              {/* SECTION: PROGRAMS */}
              <div style={{ marginBottom: '6rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  <h2 className="text-3xl font-bold text-slate-900">Explore Our Programs</h2>
                  <p style={{ color: '#64748b', marginTop: '0.5rem' }}>Tailored educational paths for every learner</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                  {afiliations && afiliations.map((feature) => (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)' }}
                      style={{ background: 'white', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}
                    >
                      <div style={{ height: '240px', overflow: 'hidden' }}>
                        <img src={feature.avatar.url} alt={feature.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} className="hover:scale-105" />
                      </div>
                      <div style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1rem' }}>{feature.title}</h3>
                        <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7 }}>{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* SECTION: SCHOOL INSIGHTS */}
              <div style={{ marginBottom: '6rem' }}>
                <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">School Insights</h2>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <button onClick={() => scrollLeft(insightScrollRef)} style={{ position: 'absolute', left: -20, zIndex: 10, width: '48px', height: '48px', borderRadius: '50%', background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }} className="hover:bg-emerald-50">◀</button>
                  <div ref={insightScrollRef} onMouseEnter={() => setIsInsightHovering(true)} onMouseLeave={() => setIsInsightHovering(false)} style={{ display: 'flex', gap: '1.5rem', overflowX: 'auto', padding: '1rem 0', scrollBehavior: 'smooth', msOverflowStyle: 'none', scrollbarWidth: 'none' }} className="hide-scrollbar">
                    {allStudentFeedbacks && allStudentFeedbacks.map((vid) => (
                      <iframe key={vid._id} src={vid.ytLink} title="Student Insight" style={{ width: '350px', height: '220px', borderRadius: '1rem', border: '4px solid white', boxShadow: '0 10px 20px -5px rgba(0,0,0,0.1)', flexShrink: 0 }} allowFullScreen></iframe>
                    ))}
                  </div>
                  <button onClick={() => scrollRight(insightScrollRef)} style={{ position: 'absolute', right: -20, zIndex: 10, width: '48px', height: '48px', borderRadius: '50%', background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }} className="hover:bg-emerald-50">▶</button>
                </div>
              </div>

              {/* SECTION: TESTIMONIALS */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <h2 className="text-3xl font-bold text-slate-900 mb-8">What Parents Say</h2>
                  <div style={{ position: 'relative', background: `linear-gradient(135deg, ${pkGreen} 0%, ${pkGreenMid} 100%)`, padding: '3rem', borderRadius: '1.5rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '10px', right: '20px', fontSize: '120px', color: 'rgba(255,255,255,0.06)', fontFamily: 'serif', lineHeight: 1 }}>"</div>
                    <AnimatePresence mode="wait">
                      {allFeedbacks && allFeedbacks.length > 0 && (
                        <motion.div key={feedbackIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} style={{ position: 'relative', zIndex: 10 }}>
                          <p style={{ fontSize: '1.15rem', fontStyle: 'italic', color: '#f0fdf4', lineHeight: 1.8, marginBottom: '2rem' }}>"{allFeedbacks[feedbackIndex].description}"</p>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(to bottom right, #34d399, #ffffff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: pkGreen, fontSize: '1.25rem' }}>{allFeedbacks[feedbackIndex].name.charAt(0)}</div>
                            <div>
                              <h4 style={{ fontWeight: 'bold', color: 'white', margin: 0, fontSize: '1.1rem' }}>{allFeedbacks[feedbackIndex].name}</h4>
                              <p style={{ color: '#a7f3d0', fontSize: '0.9rem', margin: 0 }}>{allFeedbacks[feedbackIndex].title}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                    {cards && cards.map((card) => (<ClientCard card={card} key={card._id} />))}
                  </div>
                  <div style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)', border: '4px solid white', background: '#0f172a' }}>
                    <iframe width="100%" height="250" src="https://www.youtube.com/embed/q8NjbC4uGW4?si=IXLXpGdfxXw6Tfa4" title="YouTube video player" style={{ border: 0, display: 'block' }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  </div>
                </motion.div>
              </div>

              {/* SECTION: PARTNERS */}
              <div style={{ marginBottom: '6rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  <h2 className="text-2xl font-bold text-slate-900">Our Technology Partners</h2>
                  <p style={{ color: '#64748b', marginTop: '0.5rem' }}>Collaborating with industry leaders to empower our students</p>
                </div>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <button onClick={() => scrollLeft(partnerScrollRef)} style={{ position: 'absolute', left: '-15px', zIndex: 10, width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.9)', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: pkGreenMid, backdropFilter: 'blur(8px)', transition: 'all 0.2s' }}>◀</button>
                  <div ref={partnerScrollRef} onMouseEnter={() => setIsPartnerHovering(true)} onMouseLeave={() => setIsPartnerHovering(false)} style={{ display: 'flex', gap: '2rem', overflowX: 'auto', padding: '1.5rem 0.5rem', scrollBehavior: 'smooth', msOverflowStyle: 'none', scrollbarWidth: 'none' }} className="hide-scrollbar">
                    {partners && partners.map((member) => (
                      <div key={member._id} style={{ width: '280px', height: '160px', flexShrink: 0, background: 'white', borderRadius: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px -5px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9', padding: '1.5rem', transition: 'transform 0.3s' }}>
                        <PartnerCard member={member} />
                      </div>
                    ))}
                  </div>
                  <button onClick={() => scrollRight(partnerScrollRef)} style={{ position: 'absolute', right: '-15px', zIndex: 10, width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.9)', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: pkGreenMid, backdropFilter: 'blur(8px)', transition: 'all 0.2s' }}>▶</button>
                </div>
              </div>

              {/* SECTION: WHY CHOOSE */}
              <section>
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Why The Learning Hub?</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                  {featured.map((feature) => (
                    <motion.div key={feature.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -5 }} style={{ background: 'white', padding: '2rem', borderRadius: '1.5rem', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                      <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{feature.icon}</div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.75rem' }}>{feature.title}</h3>
                      <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: '0.95rem', margin: 0 }}>{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Pakistan;