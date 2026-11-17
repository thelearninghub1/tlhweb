import React from "react";
import { motion } from "framer-motion";

const PartnerCard = ({ partner }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      style={{
        background: 'white',
        borderRadius: '1.5rem',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(226, 232, 240, 0.8)',
        cursor: 'default',
        height: '100%'
      }}
      className="transition-shadow hover:shadow-xl group"
    >
      {/* Logo Container */}
      <div 
        style={{ 
          width: '100px', 
          height: '100px', 
          borderRadius: '1rem', 
          background: '#f8fafc', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          marginBottom: '1.5rem',
          padding: '1rem',
          border: '1px solid #f1f5f9',
          transition: 'transform 0.3s ease'
        }}
        className="group-hover:scale-105"
      >
        <img 
          src={partner.avatar?.url || "/placeholder.png"} 
          alt={partner.name} 
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
        />
      </div>

      {/* Content */}
      <h2 
        style={{ 
          fontSize: '1.25rem', 
          fontWeight: 'bold', 
          color: '#0f172a', 
          marginBottom: '0.75rem',
          marginTop: 0
        }}
      >
        {partner.name}
      </h2>
      
      <p 
        style={{ 
          fontSize: '0.875rem', 
          color: '#64748b', 
          lineHeight: 1.6,
          margin: 0,
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}
      >
        {partner.description}
      </p>
    </motion.div>
  );
};

export default PartnerCard;