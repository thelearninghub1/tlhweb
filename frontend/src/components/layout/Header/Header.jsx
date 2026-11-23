import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";
import { CiYoutube } from 'react-icons/ci';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import logo from '../../../assets/logo.png';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { name: "Skills Development Courses", nameLink: "skills-development-courses" },
  { name: "Subjects Summary", nameLink: "subjects-summary" },
  { name: "Instructional Methods", nameLink: "instructional-methods" },
  { name: "Academic Support", nameLink: "academic-support" },
  { name: "Academic Calendar", nameLink: "academic-calendar" },
  { name: "Extra Curricular Activities", nameLink: "extra-curricular-activities" }
];

const admissions = [
  { name: "How to Register", nameLink: "registeration-guide" },
  { name: "Apply Now", nameLink: "apply-now" },
];

const contactUs = [
  { name: "Contact Us", nameLink: "contact-us" },
  { name: "Partner With Us", nameLink: "partner-with-us" },
];

const aboutUs = [
  { name: "Our History", nameLink: "our-history" },
  { name: "Our Team & Teachers", nameLink: "our-teachers" },
  { name: "Affiliation Accreditation", nameLink: "affiliation-accreditation" },
  { name: "Technology Partners", nameLink: "technology-partners" },
  { name: "Career", nameLink: "career" },
];

const locations = [
  { name: "UAE", nameLink: "uae" },
  { name: "KSA", nameLink: "ksa" },
  { name: "Oman", nameLink: "oman" },
  { name: "Turkey", nameLink: "turkey" },
  { name: "Qatar", nameLink: "qatar" },
  { name: "Bahrain", nameLink: "bahrain" },
  { name: "Pakistan", nameLink: "pakistan" },
  { name: "Malaysia", nameLink: "malaysia" },
];

const media = {
  facebook: "https://www.facebook.com/share/19yGzABBd5/",
  linkedin: "https://www.linkedin.com/company/thelearninghubpk/",
  instagram: "https://www.instagram.com/tlh_school?igsh=YzNwM3Nybjc3NGg0",
  youtube: "https://youtube.com/@thelearninghub_tlh.?si=HTuOvOPLsPBva8Yu"
};

// Controlled Dropdown Component
const DesktopDropdown = ({ title, mainLink, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link 
        to={mainLink} 
        style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'white', textDecoration: 'none', fontWeight: 500, padding: '1rem 0' }}
      >
        {title} <IoIosArrowDown style={{ fontSize: '0.8rem', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
      </Link>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, visibility: 'hidden' }}
            animate={{ opacity: 1, y: 0, visibility: 'visible' }}
            exit={{ opacity: 0, y: 10, visibility: 'hidden' }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(30, 27, 75, 0.98)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '1rem',
              padding: '1rem',
              minWidth: '240px',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
              boxShadow: '0 20px 40px -10px rgba(0,0,0,0.6)',
              zIndex: 9999,
            }}
          >
            {items.map((item) => (
              <Link 
                key={item.name} 
                to={`/${item.nameLink}`}
                style={{ 
                  color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', padding: '0.6rem 1rem', borderRadius: '0.5rem', transition: 'all 0.2s' 
                }}
                className="hover:bg-indigo-500/20 hover:text-white hover:pl-5"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ✅ FIX: accept closeMenu prop; call it on every link click
const MobileAccordion = ({ title, mainLink, items, isOpen, toggle, closeMenu }) => {
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link
          to={mainLink}
          onClick={closeMenu}
          style={{ color: 'white', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem', padding: '0.5rem 0', flex: 1 }}
        >
          {title}
        </Link>
        <button 
          onClick={toggle} 
          style={{ background: 'transparent', border: 'none', color: '#a5b4fc', fontSize: '1.2rem', cursor: 'pointer', padding: '0.5rem' }}
        >
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }}><IoIosArrowDown /></motion.div>
        </button>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '1rem', paddingTop: '0.5rem' }}>
              {items.map((item) => (
                <Link 
                  key={item.name} 
                  to={`/${item.nameLink}`}
                  onClick={closeMenu}
                  style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.95rem', padding: '0.5rem 0' }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [openMenus, setOpenMenus] = useState({
    about: false,
    admission: false,
    academics: false,
    location: false,
    contact: false,
  });

  const handleClick = () => setClicked(!clicked);

  // ✅ FIX: call this on any mobile nav link click
  const closeMobileMenu = () => setClicked(false);

  const toggleMenu = (menuName) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile = screenWidth <= 900;

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 9999,
      overflow: 'visible',
      transition: 'all 0.3s ease',
      background: isScrolled ? 'rgba(15, 23, 42, 0.85)' : 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
      backdropFilter: isScrolled ? 'blur(16px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent',
      boxShadow: isScrolled ? '0 10px 30px -10px rgba(0,0,0,0.5)' : 'none',
      padding: isScrolled ? '0.5rem 0' : '0'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px', overflow: 'visible' }}>
        
        {/* Logo */}
        <Link to={`/`} style={{ display: 'flex', alignItems: 'center' }} onClick={closeMobileMenu}>
          <img src={logo} alt="logo" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
        </Link>

        {/* Desktop Nav */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', overflow: 'visible' }}>
            <DesktopDropdown title="About Us" mainLink="/about-us" items={aboutUs} />
            <DesktopDropdown title="Admission" mainLink="/apply-now" items={admissions} />
            <DesktopDropdown title="Academics" mainLink="/skills-development-courses" items={services} />
            <DesktopDropdown title="Locations" mainLink="/uae" items={locations} />
            <DesktopDropdown title="Contact Us" mainLink="/contact-us" items={contactUs} />
          </div>
        )}

        {/* Right Side */}
        {!isMobile ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ 
              width: '40px', height: '40px', borderRadius: '50%', 
              border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a5b4fc', fontSize: '1.2rem'
            }}>
              <MdOutlinePhoneInTalk />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '0.75rem', color: '#94a3b8' }}>Call anytime</p>
              <p style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: 'white' }}>+971 55 292 0583</p>
            </div>
          </div>
        ) : (
          <button onClick={handleClick} style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '1.8rem', cursor: 'pointer' }}>
            {clicked ? <IoCloseSharp /> : <GiHamburgerMenu />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && clicked && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(15, 23, 42, 0.98)',
              backdropFilter: 'blur(10px)',
              position: 'absolute',
              top: '80px',
              left: 0,
              width: '100%',
              maxHeight: 'calc(100vh - 80px)',
              overflowY: 'auto',
              padding: '1.5rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <MobileAccordion
              title="About Us"
              mainLink="/about-us"
              items={aboutUs}
              isOpen={openMenus.about}
              toggle={() => toggleMenu('about')}
              closeMenu={closeMobileMenu}
            />
            <MobileAccordion
              title="Admission"
              mainLink="/apply-now"
              items={admissions}
              isOpen={openMenus.admission}
              toggle={() => toggleMenu('admission')}
              closeMenu={closeMobileMenu}
            />
            <MobileAccordion
              title="Academics"
              mainLink="/skills-development-courses"
              items={services}
              isOpen={openMenus.academics}
              toggle={() => toggleMenu('academics')}
              closeMenu={closeMobileMenu}
            />
            <MobileAccordion
              title="Locations"
              mainLink="/uae"
              items={locations}
              isOpen={openMenus.location}
              toggle={() => toggleMenu('location')}
              closeMenu={closeMobileMenu}
            />
            <MobileAccordion
              title="Contact Us"
              mainLink="/contact-us"
              items={contactUs}
              isOpen={openMenus.contact}
              toggle={() => toggleMenu('contact')}
              closeMenu={closeMobileMenu}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.2rem' }}><MdOutlinePhoneInTalk /></div>
                <div>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>Call anytime</p>
                  <p style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: 'white' }}>+971 55 292 0583</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem', color: '#94a3b8', fontSize: '1.5rem' }}>
                <a href={media.facebook} style={{ color: 'inherit' }}><RiFacebookCircleLine /></a>
                <a href={media.linkedin} style={{ color: 'inherit' }}><TbBrandLinkedin /></a>
                <a href={media.instagram} style={{ color: 'inherit' }}><FaInstagram /></a>
                <a href={media.youtube} style={{ color: 'inherit' }}><CiYoutube /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;