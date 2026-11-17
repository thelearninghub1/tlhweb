import React, { Fragment } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <Fragment>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          width: '100%',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated Background Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '20%',
            left: '20%',
            width: '250px',
            height: '250px',
            background: 'rgba(99, 102, 241, 0.3)',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '20%',
            width: '300px',
            height: '300px',
            background: 'rgba(236, 72, 153, 0.3)',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        />

        {/* The Loader Rings */}
        <div style={{ position: 'relative', width: '100px', height: '100px', zIndex: 10 }}>
          
          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '3px solid transparent',
              borderTopColor: '#6366f1', // indigo-500
              borderRightColor: '#6366f1',
            }}
          />

          {/* Middle Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              inset: '10px',
              borderRadius: '50%',
              border: '3px solid transparent',
              borderBottomColor: '#d946ef', // fuchsia-500
              borderLeftColor: '#d946ef',
            }}
          />

          {/* Inner Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              inset: '20px',
              borderRadius: '50%',
              border: '3px solid transparent',
              borderTopColor: '#ec4899', // pink-500
              borderRightColor: '#ec4899',
            }}
          />

          {/* Center Dot */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: 'linear-gradient(to bottom right, #6366f1, #ec4899)',
              boxShadow: '0 0 15px rgba(236, 72, 153, 0.8)',
            }}
          />
        </div>

        {/* Loading Text */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            marginTop: '2rem',
            color: '#cbd5e1',
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            zIndex: 10,
          }}
        >
          Loading
        </motion.p>
      </div>
    </Fragment>
  );
};

export default Loader;