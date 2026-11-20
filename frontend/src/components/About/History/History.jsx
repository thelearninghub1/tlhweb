import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import video from '../../../assets/history.mp4';
import Metadata from '../../layout/Metadata/Metadata';
import { motion } from 'framer-motion';

const History = () => {
  const featured = [
    { id: 1, title: "No Physical Barriers", description: "Learn from anywhere with fully online classes — quality education delivered right to your home.", icon: "🌍" },
    { id: 2, title: "Modern STEAM Curriculum", description: "Cutting-edge syllabus integrating Science, Technology, Engineering, Arts, and Mathematics to equip students for the future.", icon: "🚀" },
    { id: 3, title: "Continuous Assessment", description: "Structured evaluations to monitor student growth, ensuring steady academic improvement at every stage.", icon: "📈" },
    { id: 4, title: "Parent-Teacher Collaboration", description: "Parents stay informed through regular updates, progress tracking, and direct communication with instructors.", icon: "🤝" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <Fragment>
      <Metadata title="Our History - The Learning Hub" />

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

          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', textAlign: 'center', zIndex: 10 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ display: 'inline-block', padding: '0.5rem 1.25rem', borderRadius: '50px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#e0e7ff', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '1.5rem', backdropFilter: 'blur(10px)' }}
            >
              OUR JOURNEY
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
            >
              A Global <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Movement
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{ marginTop: '1.5rem', fontSize: '1.125rem', color: '#cbd5e1', maxWidth: '600px', margin: '1.5rem auto 0 auto', lineHeight: 1.6 }}
            >
              A passion turned purpose. Discover how The Learning Hub grew from a small idea 
              into a globally recognized educational platform.
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
        {/* Increased maxWidth to 1400px and adjusted padding */}
        <div style={{ position: 'relative', maxWidth: '1400px', margin: '-4rem auto 0 auto', padding: '0 1.5rem 5rem 1.5rem', zIndex: 20 }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
            
            {/* Left Side: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* FIXED: Removed typo 'margintop' and used proper camelCase marginTop */}
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginTop: '1.5rem', marginBottom: '2rem' }}>
                A Passion Turned <span style={{ color: '#4f46e5' }}>Purpose</span>
              </h2>
              
              <div style={{ borderLeft: '4px solid #e0e7ff', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, margin: 0 }}>
                  <strong style={{ color: '#0f172a' }}>The Learning Hub (TLH)</strong> was founded in <strong style={{ color: '#0f172a' }}>2018</strong> by <strong style={{ color: '#0f172a' }}>Nida Iqbal Shah</strong>. 
                  An engineer by profession, a certified STEM teacher trainer, and a UK-licensed educator.
                </p>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, margin: 0 }}>
                  What began as a passion for meaningful, hands-on learning soon grew into a trusted platform 
                  serving students across the <strong style={{ color: '#0f172a' }}>MENA region and South Asia</strong>. We now reach families in the 
                  <strong style={{ color: '#0f172a' }}> UAE, Saudi Arabia, Qatar, Bahrain, Pakistan, India, Bangladesh,</strong> and beyond.
                </p>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, margin: 0 }}>
                  In the early days, TLH began by teaching science and technology on a small scale. 
                  A team of dedicated educators and engineers was brought together, all sharing the same vision. 
                  Together, they transformed a small idea into a powerful learning platform.
                </p>
              </div>
            </motion.div>

            {/* Right Side: Video Frame */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ perspective: 1000 }}
            >
              <motion.div
                whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ 
                  borderRadius: '1.5rem', 
                  overflow: 'hidden', 
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', 
                  border: '8px solid white',
                  background: '#0f172a',
                  position: 'relative'
                }}
              >
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                {/* Play indicator overlay (optional visual) */}
                <div style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 100px rgba(0,0,0,0.2)', pointerEvents: 'none' }} />
              </motion.div>
            </motion.div>

          </div>

          {/* Second Story Block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ background: 'white', borderRadius: '1.5rem', padding: '4rem 2rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)', border: '1px solid #f1f5f9', marginBottom: '6rem' }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '2rem', textAlign: 'center' }}>
              A Community of <span style={{ color: '#db2777' }}>Future-Ready Learners</span>
            </h2>
            
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                We are preparing students for a world led by innovation. A world where we need scientists, 
                engineers, coders, and creators. We believe every child can succeed at their own pace, 
                with the right guidance and tools.
              </p>
              <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.8, marginBottom: '2rem' }}>
                Today, <strong style={{ color: '#0f172a' }}>TLH is more than a school.</strong> It’s a growing community of learners, families, and 
                educators who believe in meaningful, modern education.
              </p>
              <p style={{ fontSize: '1.2rem', fontWeight: 600, color: '#4f46e5', marginBottom: '2.5rem' }}>
                Our story began with a single decision. Now, it’s a mission that reaches across borders 
                and into the future.
              </p>
              
              <Link to={'/apply-now'} style={{ display: 'inline-block', padding: '1rem 3rem', borderRadius: '0.75rem', color: 'white', fontWeight: 'bold', fontSize: '1.125rem', background: 'linear-gradient(to right, #4f46e5, #db2777)', textDecoration: 'none', boxShadow: '0 10px 20px -5px rgba(79, 70, 229, 0.4)' }} className="hover:scale-105 transition-transform">
                APPLY NOW
              </Link>
            </div>
          </motion.div>

          {/* Why Choose Section */}
          <section style={{ paddingTop: '2rem' }}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', textAlign: 'center', marginBottom: '3rem' }}
            >
              Why The Learning Hub?
            </motion.h2>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}
            >
              {featured.map((feature) => (
                <motion.div 
                  key={feature.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)' }}
                  style={{ 
                    background: 'white', 
                    borderRadius: '1.5rem', 
                    padding: '2rem', 
                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)', 
                    border: '1px solid #f1f5f9',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'box-shadow 0.3s ease'
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{feature.icon}</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.75rem' }}>{feature.title}</h3>
                  <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: '0.95rem', margin: 0 }}>{feature.description}</p>
                  
                  {/* Decorative gradient blob in bottom right */}
                  <div style={{ position: 'absolute', bottom: -20, right: -20, width: '80px', height: '80px', background: 'linear-gradient(135deg, #e0e7ff, #fce7f3)', borderRadius: '50%', opacity: 0.5, zIndex: 0 }} />
                </motion.div>
              ))}
            </motion.div>
          </section>

        </div>
      </div>
    </Fragment>
  );
};

export default History;