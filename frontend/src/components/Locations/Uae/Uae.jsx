import React, { Fragment , useState , useEffect, useRef} from 'react';
import Select from "react-select";
import countries from "world-countries";
import ClientCard from '../../About/ClientCard';
import PartnerCard from '../../Admission/PartnerCard';
import { useDispatch , useSelector } from 'react-redux';
import { allStudentAction , clearErrors } from "../../../actions/studentAction";
import Loader from '../../layout/Loader/Loader';
import { toast } from 'react-toastify';
import { allFeedbackAction } from "../../../actions/feedbackActions";
import { allCardAction } from "../../../actions/cardActions";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { allPartnerAction } from "../../../actions/techActions";
import { allFeatureAction } from '../../../actions/affilationAction';
import { createCallBackAction } from '../../../actions/contactUsAction';
import { CONTACT_US_RESET } from '../../../constants/contactUsContants';
import Metadata from '../../layout/Metadata/Metadata';
import video from '../../../assets/uae.mp4';



// Format countries for dropdown
const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: `${country.name.common} (${country.cca2})`,
  flag: `https://flagcdn.com/w40/${country.cca2.toLowerCase()}.png`,
}));


const Uae = () => {




   const videoRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      const videoEl = videoRef.current;
      if (!videoEl) return;

      // Example: assuming your video is 16:9
      const videoAspect = 16 / 9;
      const windowAspect = window.innerWidth / window.innerHeight;

      if (Math.abs(windowAspect - videoAspect) < 0.15) {
        // Aspect ratios are close → fill screen
        videoEl.style.objectFit = 'cover';
      } else {
        // Aspect ratios very different → show all video
        videoEl.style.objectFit = 'contain';
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // run once on load
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    const programs = [
    "Online schooling",
"One to One tutoring ",
"O/A levels tuitions",
"Grade 9 and 10 Federal Board",
"Coding",
"Abacus Mathematics"
]


const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [country, setCountry] = useState(""); // safe to use null
const [program,setProgram] = useState("")
const [phoneNo,setPhoneNo] = useState("")

const [companyName,setCompanyName] = useState("")
const [message,setMessage] = useState("")
const [WhatsAppNo,setWhatsAppNo] = useState("")

    const dispatch = useDispatch();
      const {  error:FormError, success } = useSelector((state) => state.createContactUs);
  
    const { loading, error, feedbacks:allStudentFeedbacks } = useSelector((state) => state.allStudent);
    const {  error:FeedError, feedbacks:allFeedbacks } = useSelector((state) => state.allFeedbacks);
    const {  error:cardError, cards } = useSelector((state) => state.allCards);
    const {  error:partnerError,partners  } = useSelector((state) => state.allPartners);
    const {error:featureError,afiliations} = useSelector((state)=>state.allAffiliation);
    const [feedbackIndex, setFeedbackIndex] = useState(0);
  const [isPartnerHovering, setIsPartnerHovering] = useState(false);

  // Refs
  const partnerScrollRef = useRef();
  
 // Auto change feedback carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setFeedbackIndex((prevIndex) =>
        allFeedbacks && allFeedbacks.length > 0
          ? (prevIndex + 1) % allFeedbacks.length
          : 0
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [allFeedbacks]);

  // Partner auto scroll
  useEffect(() => {
    const container = partnerScrollRef.current;
    let intervalId;
    const startScroll = () => {
      intervalId = setInterval(() => {
        if (!isPartnerHovering && container) {
          container.scrollBy({ left: 6, behavior: 'smooth' });
          const atEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth - 1;
          if (atEnd) {
            clearInterval(intervalId);
            setTimeout(() => {
              container.scrollTo({ left: 0, behavior: 'auto' });
              setTimeout(startScroll, 500);
            }, 1000);
          }
        }
      }, 20);
    };
    startScroll();
    return () => clearInterval(intervalId);
  }, [isPartnerHovering]);

  const scrollPartnerLeft = () => partnerScrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  const scrollPartnerRight = () => partnerScrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });




  const handleSubmit = (e) => {
     e.preventDefault();
     const myForm = new FormData();
     myForm.set("name",name);
     myForm.set("email",email);
     myForm.set("program",program);
     myForm.set("phoneNo",phoneNo);
     myForm.set("WhatsAppNo",WhatsAppNo);
 
    myForm.set("message",message);
    myForm.set("companyName",companyName);

 myForm.set("country", country?.label ?? "");
 
 
     dispatch(createCallBackAction(myForm))
   };


  const featured = [
    { id: 1, title: "No Physical Barriers", description: " Learn from anywhere with fully online classes — quality education delivered right to your home." },
    { id: 2, title: "Modern STEAM Curriculum", description: "Cutting-edge syllabus integrating Science, Technology, Engineering, Arts, and Mathematics to equip students for the future." },
    { id: 3, title: "Continuous Assessment", description: "Structured evaluations to monitor student growth, ensuring steady academic improvement at every stage." },
    { id: 4, title: "Parent-Teacher Collaboration", description: "Parents stay informed through regular updates, progress tracking, and direct communication with instructors." }
  ]; 
  


       useEffect(()=>{
        
                                      AOS.init()
                  if (error) {
                        toast.error(error);
                        dispatch(clearErrors());
                      }
                      if (FeedError) {
                        toast.error(FeedError)
                        dispatch(clearErrors())
                      }
                      if (cardError) {
                        toast.error(cardError)
                        dispatch(clearErrors())
                        
                      }
                      if (partnerError) {
                        toast.error(partnerError)
                        dispatch(clearErrors())
        
                      }
                      if (featureError) {
                        toast.error(featureError)
                        dispatch(clearErrors())
                        
                      }
                      if(FormError){
                                  toast.error(FormError);
                                  dispatch(clearErrors());
                              }
                                 if (success) {
                          toast.success(`Thank you. Our team will contact you soon!`);
                          dispatch({type:CONTACT_US_RESET})
                      // Reset Fields
                          setName("");
                          setEmail("");
                          setCountry("");
                          setPhoneNo("");
                          setProgram("");
                          setWhatsAppNo("");
                      
                                
                              }
                      dispatch(allCardAction())
                      dispatch(allFeatureAction())
                      dispatch(allStudentAction())
                      dispatch(allFeedbackAction())
                      dispatch(allPartnerAction())
        
            },[error,FormError,success,dispatch,FeedError,cardError,partnerError,featureError])
            
    
    

  return (

      <Fragment>
        {
          loading ? (<Loader/>):(  <Fragment>
        <Metadata title="UAE - The Learning Hub" />

          <div className="servicesDetailsContainer">
            <div className='topBahrianContainer'>
              
                                              <div className="video-background">
                                            <video src={video} autoPlay loop muted playsInline />
                                            </div>
            <div className="container">
      <div className="left-section">
      </div>

      <div className="right-section">
        <h3>We are here to help</h3>
        <p>Speak with an Admission Counselor</p>
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="name"
             placeholder="Full Name*"
             required
             value={name}
             onChange={(e)=>setName(e.target.value)}
           />
           <input
             type="email"
             name="email"
             placeholder="Email*"
             required
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
           />
           <input
             type="tel"
             name="phone"
             placeholder="Phone*"
             required
             value={phoneNo}
             onChange={(e)=>setPhoneNo(e.target.value)}
           />
           <input
             type="text"
             name="whatsapp"
             placeholder="Whatsapp"
             value={WhatsAppNo}
             onChange={(e)=>setWhatsAppNo(e.target.value)}
           />
              <input
             type="text"
             name="comapnyName"
             placeholder="Student Age"
             value={companyName}
             onChange={(e)=>setCompanyName(e.target.value)}
           />
             <input
             type="text"
             name="message"
             placeholder="Student Grade"
             value={message}
             onChange={(e)=>setMessage(e.target.value)}
           />
           <select name="program" required value={program} onChange={(e)=>setProgram(e.target.value)}>
             <option value="">-- Choose Program --</option>
             {programs && programs.map((program, index) => (
           <option key={index} value={program}>
             {program}
           </option>
         ))}
           </select>
       <Select
       options={formattedCountries}
       value={country || ""}
       onChange={(selectedOption) => setCountry(selectedOption)}
       placeholder="Select Country"
       className="country-select"
       getOptionLabel={(e) => (
         <div className="country-option">
           <img src={e.flag} alt="" width="20px" style={{ marginRight: 10 }} />
           {e.label}
         </div>
       )}
     />
     
     
          
           <button type="submit" className="request-btn">REQUEST A CALL BACK</button>
         </form>
      </div>
    </div>
            </div>
                        <div className="homesMainContainer">

            <div className="learn-portal-container">
    

      {/* Enrollment Button */}
      <section className="learn-enrollment" data-aos="fade-down">
        <button className="learn-enroll-btn">
          ENROLL YOUR CHILD FOR SESSION 2025-26 AND BECOME PART OF THE LEARNING HUB COMMUNITY.
        </button>
      </section>

      {/* Content Section */}
      <section className="learn-content-section" data-aos="fade-down">
    <div className="learn-text-content">
    
    

      <div className="introduction-container" data-aos="fade-down">
      <h1 className="title" data-aos="fade-down">Learning That Inspires</h1>
   <p className="affiliation-intro" data-aos="fade-down">
At TLH, we believe that learning should feel like an adventure. It should spark curiosity and build confidence. That’s why our programs are designed to be interactive, creative, and future-focused.      </p>

      <p className="affiliation-subtitle"  data-aos="fade-down">We offer:</p>
      <ul className="affiliation-list" >
        <li data-aos="fade-down">
          <strong>Certified online schooling</strong> 
        </li>
        <li data-aos="fade-down">
          <strong>Personalized tutoring</strong> 
        </li>
        <li data-aos="fade-down">
          <strong>Live study support and exam preperation</strong> 
        </li>
        <li data-aos="fade-down">
          <strong>Hands-on STEAM programs</strong> 
        </li>
      </ul>

      <p className="affiliation-text" data-aos="fade-down">
Whether you are a school looking to add VR/AR learning, a parent seeking a strong STEAM foundation, or a student ready to dive into coding, robotics, or design, we have something for you.      </p>
<button
  className="learn-apply-btn"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  APPLY NOW
</button>  
    </div>


    </div>
     <div className="learn-image-container">
                    <iframe
    src="https://youtube.com/embed/MqJJiP_x1IE"
    title="YouTube video player"
    className="responsive-iframe"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
                  </div>
  </section>
    </div>
            <div className="edu-portal-container">
      <div className="edu-cards-container" data-aos="fade-down">
        {afiliations && afiliations.map((feature) => (
          <div key={feature.id} className="edu-feature-card">
            <img src={feature.avatar.url} alt={feature.title} className="edu-card-image" />
            <h3 className="edu-card-title">{feature.title}</h3>
            <p className="edu-card-description">{feature.description}</p>
          </div>
        ))}
      </div>
      <button className="edu-enroll-btn" data-aos="fade-down">ENROLL NOW</button>
    </div>
            <div> 
   
      {/* Happy Students Section */}
     <section className="happy-students-section">
                <h2 className="title" data-aos="fade-down">School Insights</h2>
                <div className="video-container" data-aos="fade-down">
                  {allStudentFeedbacks && allStudentFeedbacks.map((video) => (
                    <iframe
                      key={video._id}
                      className="student-video"
                      src={video.ytLink}
                      title={video._id}
                      allowFullScreen
                    ></iframe>
                  ))}
                </div>
              </section>
         <div className="secondMidContainer">
                <div className="secondMidContainer1">
                      <iframe
                        width="520"
                        height="315"
                        src="https://www.youtube.com/embed/q8NjbC4uGW4?si=IXLXpGdfxXw6Tfa4"
                        title="YouTube video player"
                        style={{ border: 0 }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className='iframeTag'
                      ></iframe>
                </div>

                <div className="secondMidContainer2">
                  <div className="custom-carousel">
                    {allFeedbacks && allFeedbacks.map((feedback, i) => (
                      <div
                        key={feedback._id}
                        className={`carouselFeedContainer carousel-slide ${i === feedbackIndex ? 'active' : ''}`}
                      >
                        <i>{feedback.description}</i>
                        <b>{feedback.name}</b>
                        <p>{feedback.title}</p>
                      </div>
                    ))}
                  </div>
                  <div className="client-card-container">
                    {cards && cards.map((card) => (
                      <ClientCard card={card} key={card._id} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
      {/* Our Partners Section */}
          <div className='thirdMidContainer'>
                <div>
                  <p data-aos="fade-down">Our team Partners</p>
                  <h1 data-aos="fade-down" className='title'>Technology Partners</h1>
                  <h3 data-aos="fade-down">Teamwork is the ability to work together toward a common vision. The ability is to directly involve the individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results.</h3>
                </div>

                <div className="teacher-carousel-wrapper">
                  <button onClick={scrollPartnerLeft}>◀</button>
                  <div
                    className="teacher-carousel"
                    ref={partnerScrollRef}
                    onMouseEnter={() => setIsPartnerHovering(true)}
                    onMouseLeave={() => setIsPartnerHovering(false)}
                  >
                    {partners && partners.map((member) => (
                      <PartnerCard member={member} key={member._id} />
                    ))}
                  </div>
                  <button onClick={scrollPartnerRight}>▶</button>
                </div>
              </div>


      {/* Why Choose Learn Section */}
    <section className="why-choose-section" data-aos="fade-down">
                <h1 className="title chooseContainer">Why The Learning Hub ?</h1>
                <div className="why-choose-grid">
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
        
      </Fragment>)
        }
      </Fragment>
      )
    }

export default Uae