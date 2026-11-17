import React, { Fragment } from 'react';
import { motion } from 'framer-motion';

const PartnerCard = ({ member }) => {
  return (
    <Fragment>
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        style={{
          background: 'white',
          borderRadius: '1rem',
          padding: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '120px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
          border: '1px solid #f1f5f9',
          cursor: 'default',
          width: '100%'
        }}
      >
        <img 
          src={member.avatar.url} 
          alt={member.name} 
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.7, transition: 'all 0.3s ease' }} 
          onMouseEnter={(e) => { e.currentTarget.style.filter = 'grayscale(0%)'; e.currentTarget.style.opacity = '1'; }}
          onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.opacity = '0.7'; }}
        />
      </motion.div>
    </Fragment>
  );
};

export default PartnerCard;