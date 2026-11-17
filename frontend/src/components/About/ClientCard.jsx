import React, { Fragment } from 'react';
import { motion } from 'framer-motion';

const ClientCard = ({ card }) => {
  return (
    <Fragment>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        style={{
          background: 'white',
          borderRadius: '1.5rem',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(226, 232, 240, 0.8)',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'default',
          height: '100%'
        }}
        className="group"
      >
        {/* Decorative Background Glow */}
        <div style={{ 
          position: 'absolute', top: '-40px', right: '-40px', width: '100px', height: '100px', 
          background: 'linear-gradient(135deg, #e0e7ff, #fce7f3)', borderRadius: '50%', filter: 'blur(20px)', opacity: 0.6 
        }} />

        {/* Avatar Container */}
        <div style={{
          width: '80px', height: '80px', borderRadius: '50%',
          padding: '4px', background: 'linear-gradient(to bottom right, #4f46e5, #db2777)',
          marginBottom: '1.5rem', position: 'relative', zIndex: 10
        }}>
          <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: '#f8fafc' }}>
            <img 
              src={card.avatar && card.avatar.url} 
              alt={card.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </div>

        {/* Content */}
        <h2 style={{ 
          fontSize: '2.5rem', fontWeight: 800, margin: '0 0 0.25rem 0',
          background: 'linear-gradient(to right, #4f46e5, #db2777)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          position: 'relative', zIndex: 10
        }}>
          {card.value}
        </h2>
        <h3 style={{ 
          fontSize: '1rem', fontWeight: 600, color: '#64748b', margin: 0,
          textTransform: 'uppercase', letterSpacing: '0.5px', position: 'relative', zIndex: 10
        }}>
          {card.name}
        </h3>
      </motion.div>
    </Fragment>
  );
};

export default ClientCard;