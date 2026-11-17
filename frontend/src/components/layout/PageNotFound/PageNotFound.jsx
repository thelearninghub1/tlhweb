import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Metadata from '../Metadata/Metadata';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';

const PageNotFound = () => {
  return (
    <Fragment>
      <Metadata title="Page Not Found - The Learning Hub" />
      
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
          position: 'relative',
          overflow: 'hidden',
          padding: '1rem',
          textAlign: 'center',
        }}
      >
        {/* Background Animated Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '400px',
            height: '400px',
            background: 'rgba(99, 102, 241, 0.2)',
            borderRadius: '50%',
            filter: 'blur(100px)',
            pointerEvents: 'none',
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            width: '500px',
            height: '500px',
            background: 'rgba(236, 72, 153, 0.2)',
            borderRadius: '50%',
            filter: 'blur(100px)',
            pointerEvents: 'none',
          }}
        />

        {/* Floating stars/particles for extra magic */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: '6px',
              height: '6px',
              background: 'white',
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
          />
        ))}

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
          style={{
            position: 'relative',
            zIndex: 10,
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '3rem 2rem',
            borderRadius: '2rem',
            maxWidth: '600px',
            width: '100%',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* 404 Text */}
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            style={{
              fontSize: 'clamp(5rem, 20vw, 10rem)', // Responsive font size
              fontWeight: 900,
              lineHeight: 1,
              margin: 0,
              background: 'linear-gradient(to right, #6366f1, #d946ef, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 20px rgba(99, 102, 241, 0.4))',
            }}
          >
            404
          </motion.h1>

          {/* Text */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: '1.75rem',
              fontWeight: 'bold',
              color: 'white',
              marginTop: '1rem',
              marginBottom: '0.5rem',
            }}
          >
            Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              color: '#cbd5e1',
              fontSize: '1.05rem',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
            }}
          >
            It looks like you've wandered off the map. Don't worry, it happens to the best of us.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 15px 30px -5px rgba(79, 70, 229, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem 2.5rem',
                  borderRadius: '50px',
                  border: 'none',
                  background: 'linear-gradient(to right, #4f46e5, #db2777)',
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: '0 10px 20px -5px rgba(79, 70, 229, 0.4)',
                  transition: 'all 0.2s',
                }}
              >
                <FaHome /> Back to Home
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </Fragment>
  );
};

export default PageNotFound;