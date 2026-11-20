import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SubjectCard = ({ subject }) => {
  return (
    <Fragment>
      <Link to={`/subject/${subject._id}`} style={{ textDecoration: 'none' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)' }}
          style={{
            background: 'white',
            borderRadius: '1.5rem',
            overflow: 'hidden',
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.08)',
            border: '1px solid #f1f5f9',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          <div style={{ height: '240px', overflow: 'hidden' }}>
            <img 
              src={subject.images[0]?.url} 
              alt={subject.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
              className="hover:scale-105"
            />
          </div>
          <div style={{ padding: '2rem', flex: 1, display: 'flex', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>
              {subject.name}
            </h3>
          </div>
        </motion.div>
      </Link>
    </Fragment>
  );
};

export default SubjectCard;