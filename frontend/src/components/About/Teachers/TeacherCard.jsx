import React, { Fragment, useState } from 'react';
import { Dialog, DialogContent } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const TeacherCard = ({ member }) => {
  const [open, setOpen] = useState(false);

  const submitReviewToggle = () => {
    setOpen(!open);
  };

  // Safely check if avatar exists
  const avatarUrl = member?.avatar?.url;
  const initial = member?.name ? member.name.charAt(0) : "?";

  return (
    <Fragment>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
        }}
        whileHover={{ y: -8, scale: 1.02 }}
        style={{
          background: 'white',
          borderRadius: '1.5rem',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
          border: '1px solid rgba(226, 232, 240, 0.8)',
          height: '100%',
          cursor: 'default'
        }}
        className="transition-shadow hover:shadow-xl group"
      >
        {/* Profile Image / Fallback */}
        <div style={{ height: '320px', width: '100%', overflow: 'hidden', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {avatarUrl ? (
            <img 
              src={avatarUrl} 
              alt={member.name} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain', 
                transition: 'transform 0.5s ease' 
              }} 
              className="group-hover:scale-105"
            />
          ) : (
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', fontWeight: 'bold' }}>
              {initial}
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', textAlign: 'center', borderTop: '1px solid #f1f5f9' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', margin: '0 0 0.25rem 0' }}>
            {member?.name || "Unknown Teacher"}
          </h3>
          <p style={{ fontSize: '0.875rem', color: '#6366f1', fontWeight: 600, margin: '0 0 1.5rem 0' }}>
            {member?.title || "Educator"}
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={submitReviewToggle}
            style={{
              marginTop: 'auto',
              width: '100%',
              padding: '0.75rem',
              borderRadius: '0.75rem',
              background: '#f8fafc',
              color: '#1e293b',
              fontWeight: 600,
              fontSize: '0.875rem',
              border: '1px solid #e2e8f0',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            className="hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200"
          >
            About Me
          </motion.button>
        </div>
      </motion.div>

      {/* Modern Modal */}
      <Dialog
        open={open}
        onClose={submitReviewToggle}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          style: {
            borderRadius: '1.5rem',
            padding: 0,
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }
        }}
      >
        <DialogContent style={{ padding: 0 }}>
          <div style={{ position: 'relative' }}>
            {/* Modal Header with Gradient */}
            <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', padding: '3rem 2rem 2rem 2rem', textAlign: 'center' }}>
              {avatarUrl ? (
                <img 
                  src={avatarUrl} 
                  alt={member.name} 
                  style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '4px solid rgba(255,255,255,0.2)', margin: '0 auto 1rem auto' }}
                />
              ) : (
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#4f46e5', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 'bold', margin: '0 auto 1rem auto', border: '4px solid rgba(255,255,255,0.2)' }}>
                  {initial}
                </div>
              )}
              <h2 className="text-2xl font-bold text-white">{member?.name || "Unknown Teacher"}</h2>
              <p style={{ color: '#a5b4fc', fontSize: '0.875rem', fontWeight: 600, marginTop: '0.25rem' }}>{member?.title || "Educator"}</p>
            </div>
            
            {/* Modal Body */}
            <div style={{ padding: '2rem', maxHeight: '50vh', overflowY: 'auto' }}>
              <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '0.95rem', whiteSpace: 'pre-line' }}>
                {member?.description || "No description available."}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default TeacherCard;