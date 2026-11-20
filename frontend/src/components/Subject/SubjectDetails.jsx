import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { subjectDetailsAction, clearErrors } from '../../actions/subjectActions';
import { useParams } from 'react-router-dom';
import Loader from '../layout/Loader/Loader';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';

const SubjectDetails = () => {
  const dispatch = useDispatch();
  const { error, subject, loading } = useSelector((state) => state.subjectDetails);
  const { id } = useParams();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(subjectDetailsAction(id));
  }, [error, dispatch, id]);

  const infoItems = [
    { label: 'Subject ID', value: subject?._id },
    { label: 'Grade', value: subject?.grade },
    { label: 'Teacher', value: subject?.teacher },
    { label: 'Teacher Qualification', value: subject?.teacherQualification },
  ];

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div style={{ minHeight: '100vh', background: '#f8fafc', padding: '4rem 1.5rem' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  background: 'white',
                  borderRadius: '2rem',
                  overflow: 'hidden',
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  flexWrap: 'wrap'
                }}
              >
                {/* Image Carousel Side */}
                <div style={{ flex: '1 1 500px', background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Carousel showThumbs={false} infiniteLoop showStatus={false} autoPlay interval={4000} className="subjectCarousel" style={{ width: '100%' }}>
                    {subject?.images && subject.images.map((img, index) => (
                      <div key={index} style={{ height: '100%' }}>
                        <img src={img.url} alt={img.alt || `Subject ${index + 1}`} style={{ height: '450px', width: '100%', objectFit: 'cover' }} />
                      </div>
                    ))}
                  </Carousel>
                </div>

                {/* Text Side */}
                <div style={{ flex: '1 1 450px', padding: '3.5rem' }}>
                  <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                    {subject?.name}
                  </h1>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                    {infoItems.map((item, i) => (
                      <div key={i} style={{ display: 'flex', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.75rem' }}>
                        <span style={{ width: '180px', color: '#64748b', fontWeight: 600, fontSize: '0.95rem' }}>{item.label}</span>
                        <span style={{ color: '#0f172a', fontWeight: 500, fontSize: '0.95rem' }}>{item.value}</span>
                      </div>
                    ))}
                  </div>

                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1rem' }}>Description</h3>
                  <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '1.05rem' }}>{subject?.description}</p>
                </div>
              </motion.div>

            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default SubjectDetails;