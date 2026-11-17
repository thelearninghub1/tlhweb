import React, { Fragment } from 'react';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';
import { TbBrandLinkedin } from 'react-icons/tb';
import { CiYoutube } from "react-icons/ci";
import { motion } from 'framer-motion';

const services = [
    { _id: 1, name: "Skills Development", nameLink: "skills-development-courses" },
    { _id: 2, name: "Instructional Methods", nameLink: "instructional-methods" },
    { _id: 3, name: "Academic Support", nameLink: "academic-support" },
    { _id: 4, name: "Teachers Assessment", nameLink: "https://assessment.thelearninghubedu.com/" },
    { _id: 5, name: "STEM LMS", nameLink: "https://lms.thelearninghubedu.com/" },
];

const media = {
    facebook: "https://www.facebook.com/share/19yGzABBd5/",
    linkedin: "https://www.linkedin.com/company/thelearninghubpk/",
    instagram: "https://www.instagram.com/tlh_school?igsh=YzNwM3Nybjc3NGg0",
    youtube: "https://youtube.com/@thelearninghub_tlh.?si=HTuOvOPLsPBva8Yu"
};

const Footer = () => {
    return (
        <Fragment>
            <footer style={{ 
                background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%)', 
                color: 'white', 
                paddingTop: '4rem',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                
                {/* Subtle Glow effect at top of footer */}
                <div style={{ 
                    position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', 
                    width: '60%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent)'
                }} />

                <div style={{ 
                    maxWidth: '1200px', 
                    margin: '0 auto', 
                    padding: '0 1rem 3rem 1rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '3rem'
                }}>
                    
                    {/* Brand Section */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <img src={logo} alt="logo" style={{ height: '80px', width: 'fit-content', objectFit: 'contain' }} />
                        <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.95rem' }}>
                            Shaping minds through innovative online schooling, personalized tutoring, and immersive, tech-enabled learning experiences — accessible everywhere!
                        </p>
                    </div>

                    {/* Academics Links */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h1 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'white', marginBottom: '0.5rem' }}>Academics</h1>
                        {services.map((ser) =>
                            ser._id === 5 || ser._id === 4 ? (
                                <motion.a
                                    key={ser._id}
                                    href={ser.nameLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 5 }}
                                    style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s', display: 'inline-block' }}
                                    onMouseEnter={(e) => e.target.style.color = 'white'}
                                    onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                                >
                                    {ser.name}
                                </motion.a>
                            ) : (
                                <motion.div key={ser._id} whileHover={{ x: 5 }} style={{ display: 'inline-block' }}>
                                    <Link 
                                        to={`/${ser.nameLink}/`} 
                                        style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}
                                        onMouseEnter={(e) => e.target.style.color = 'white'}
                                        onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                                    >
                                        {ser.name}
                                    </Link>
                                </motion.div>
                            )
                        )}
                    </div>

                    {/* Useful Links */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h1 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'white', marginBottom: '0.5rem' }}>Useful Links</h1>
                        {['About Us', 'Admissions', 'Locations', 'Contact Us', 'Join Us'].map((link, i) => {
                            const paths = ['/about-us', '/apply-now', '/uae', '/contact-us', '/partner-with-us'];
                            return (
                                <motion.div key={i} whileHover={{ x: 5 }} style={{ display: 'inline-block' }}>
                                    <Link 
                                        to={paths[i]} 
                                        style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}
                                        onMouseEnter={(e) => e.target.style.color = 'white'}
                                        onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                                    >
                                        {link}
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Contact Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h1 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'white', marginBottom: '0.5rem' }}>Get In Touch</h1>
                        <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: 0 }}>
                            <strong style={{ color: 'white', fontWeight: 500 }}>Phone:</strong> <br/> +971 55 292 0583
                        </p>
                        <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: 0 }}>
                            <strong style={{ color: 'white', fontWeight: 500 }}>Email:</strong> <br/> support@thelearninghubedu.com
                        </p>
                        <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: 0 }}>
                            <strong style={{ color: 'white', fontWeight: 500 }}>Address:</strong> <br/> C-56D phase 5 DHA Karachi
                        </p>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div style={{ 
                    borderTop: '1px solid rgba(255,255,255,0.05)', 
                    background: 'rgba(0,0,0,0.2)',
                    padding: '1.5rem 1rem'
                }}>
                    <div style={{ 
                        maxWidth: '1200px', 
                        margin: '0 auto', 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        gap: '1rem'
                    }}>
                        <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
                            &copy; {new Date().getFullYear()} The Learning Hub. All rights reserved.
                        </p>
                        
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[
                                { icon: <RiFacebookCircleLine />, link: media.facebook },
                                { icon: <TbBrandLinkedin />, link: media.linkedin },
                                { icon: <FaInstagram />, link: media.instagram },
                                { icon: <CiYoutube />, link: media.youtube },
                            ].map((social, i) => (
                                <motion.a 
                                    key={i}
                                    href={social.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -4, scale: 1.1, color: '#db2777' }}
                                    style={{ 
                                        color: '#94a3b8', 
                                        fontSize: '1.5rem', 
                                        display: 'flex',
                                        transition: 'color 0.2s',
                                        textDecoration: 'none'
                                    }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;