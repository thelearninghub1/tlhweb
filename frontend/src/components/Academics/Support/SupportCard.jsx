import React, { Fragment } from 'react';
import { motion } from 'framer-motion';

const SupportCard = ({ partner, index }) => {
  const isEven = index % 2 === 0;

  return (
    <Fragment>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        style={{
          display: 'flex',
          flexDirection: isEven ? 'row' : 'row-reverse',
          flexWrap: 'wrap',
          gap: '3rem',
          alignItems: 'center',
          background: 'white',
          borderRadius: '2rem',
          padding: '2rem',
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.08)',
          border: '1px solid #f1f5f9'
        }}
      >
        {/* Image Side */}
        <div style={{ flex: '1 1 300px', width: '100%' }}>
          <div style={{ 
            borderRadius: '1.5rem', 
            overflow: 'hidden', 
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.15)',
            position: 'relative'
          }}>
            <img 
              src={partner.avatar.url} 
              alt={partner.title} 
              style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} 
            />
            {/* Floating Number Accent */}
            <div style={{ 
              position: 'absolute', bottom: '1rem', left: '1rem', 
              background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)',
              width: '48px', height: '48px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#4f46e5', fontSize: '1.25rem', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              {index + 1}
            </div>
          </div>
        </div>

        {/* Text Side */}
        <div style={{ flex: '1 1 300px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1rem', lineHeight: 1.2 }}>
            {partner.title}
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.8, margin: 0 }}>
            {partner.description}
          </p>
        </div>
      </motion.div>
    </Fragment>
  );
};

export default SupportCard;