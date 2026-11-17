import React, { Fragment } from 'react';
import { motion } from 'framer-motion';

const TeamMembersCard = ({ member }) => {
  return (
    <Fragment>
      <motion.div
        whileHover={{ y: -5, scale: 1.01 }}
        style={{
          background: 'white',
          borderRadius: '1rem',
          padding: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
          border: '1px solid #f1f5f9',
          cursor: 'default',
          position: 'relative',
          overflow: 'hidden'
        }}
        className="group"
      >
        {/* Left Accent Bar */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'linear-gradient(to bottom, #6366f1, #d946ef)' }} />

        {/* Image */}
        <div style={{
          width: '64px', height: '64px', borderRadius: '50%', flexShrink: 0,
          padding: '3px', background: '#e2e8f0', transition: 'all 0.3s ease'
        }} className="group-hover:bg-indigo-100">
          <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden' }}>
            <img 
              src={member.avatar?.url} 
              alt={member.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </div>

        {/* Content */}
        <div style={{ zIndex: 10 }}>
          <h3 style={{ fontWeight: 'bold', color: '#0f172a', fontSize: '1.05rem', margin: '0 0 0.25rem 0' }}>
            {member.name}
          </h3>
          <p style={{ color: '#6366f1', fontSize: '0.85rem', fontWeight: 600, margin: 0 }}>
            {member.title}
          </p>
        </div>
      </motion.div>
    </Fragment>
  );
};

export default TeamMembersCard;