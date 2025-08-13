import React, { Fragment , useEffect } from 'react'
import './History.css';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import video from '../../../assets/history.mp4';
import Metadata from '../../layout/Metadata/Metadata';

const History = () => {
  const featured = [
    { id: 1, title: "No Physical Barriers", description: " Learn from anywhere with fully online classes — quality education delivered right to your home." },
    { id: 2, title: "Modern STEAM Curriculum", description: "Cutting-edge syllabus integrating Science, Technology, Engineering, Arts, and Mathematics to equip students for the future." },
    { id: 3, title: "Continuous Assessment", description: "Structured evaluations to monitor student growth, ensuring steady academic improvement at every stage." },
    { id: 4, title: "Parent-Teacher Collaboration", description: "Parents stay informed through regular updates, progress tracking, and direct communication with instructors." }
  ];
       useEffect(()=>{
                AOS.init()
              },[]) 
  return (
   <Fragment>
        <Metadata title="Our History - The Learning Hub" />
     
        <div className="contactPartnerContainer">
          <div className='upperHistoryContainer'>
     
          </div>
         
               {/* Content Section */}
            <div className="mainHistoryContainer">
                 <div className="introduction-container" data-aos="fade-down">
                   <h1 className="title"  >
A Global Movement
</h1>
                   <h2 className="section-heading" style={{fontFamily:"cursive"}} data-aos="fade-down">A Passion Turned Purpose</h2>
                   <section className="history-section">
        <p className='affiliation-intro'>
          <strong style={{fontFamily:"cursive"}}>The Learning Hub (TLH)</strong> was founded in <strong style={{fontFamily:"cursive"}}>2018</strong> by <strong style={{fontFamily:"cursive"}}>Nida Iqbal Shah</strong>. 
          An engineer by profession, a certified STEM teacher trainer, and a UK-licensed educator. 
          What began as a passion for meaningful, hands-on learning soon grew into a trusted platform 
          serving students across the <strong style={{fontFamily:"cursive"}}>MENA region and South Asia</strong>. We now reach families in the 
          <strong style={{fontFamily:"cursive"}}> UAE, Saudi Arabia, Qatar, Bahrain, Pakistan, India, Bangladesh,</strong> and beyond.
        </p>
        <br />
        <p className='affiliation-intro'>
          In the early days, TLH began by teaching science and technology on a small scale. 
          A team of dedicated educators and engineers was brought together, all sharing the same vision. 
          Together, they transformed a small idea into a powerful learning platform.
        </p>
      </section>

      <section className="history-section">
        <h2 className="section-heading" style={{fontFamily:"cursive"}}>A Community of Future-Ready Learners</h2>
        <p className='affiliation-intro'>
          We are preparing students for a world led by innovation. A world where we need scientists, 
          engineers, coders, and creators. We believe every child can succeed at their own pace, 
          with the right guidance and tools.
        </p>
        <br />
        <p className='affiliation-intro'>
          Today, <strong style={{fontFamily:"cursive"}}>TLH is more than a school.</strong> It’s a growing community of learners, families, and 
          educators who believe in meaningful, modern education.
        </p>
        <br />
        <p  className='affiliation-intro'>
          Our story began with a single decision. Now, it’s a mission that reaches across borders 
          and into the future.
        </p>
      </section>
                   <Link className="learn-apply-btn" to={'/apply-now'}>APPLY NOW</Link>
                 </div>
                 <div className="learn-image-container">
<div className="responsive-video-wrapper">
  <video
    src={video}
    autoPlay
    loop
    muted
    playsInline
    className="responsive-video"
    preload="auto"
  />
</div>


        
        </div>
        <section className="why-choose-section" data-aos="fade-down">

        <h1 className="title chooseContainer" >Why The Learning Hub ?</h1>
        <div className="why-choose-grid" >

          {featured.map((feature) => (
            <div key={feature.id} className="why-choose-card">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
            </div>

      </section>
            </div>
    </div>
          
      </Fragment>
  )
}

export default History
