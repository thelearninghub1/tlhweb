import React, { Fragment, useEffect, useRef , useState} from "react";
import "./Activities.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { allExtraAction , clearErrors } from "../../../actions/affilationAction";
import { useDispatch, useSelector } from "react-redux";
import {toast} from "react-toastify";
import { allStudentAction } from "../../../actions/studentAction";
import Loader from "../../layout/Loader/Loader";
import video from '../../../assets/cacurricular.mp4';
import Metadata from "../../layout/Metadata/Metadata";

const Activities = () => {
  const dispatch = useDispatch();
  const {error:detailsError,afiliations} = useSelector((state)=>state.allAffiliation);

  const { loading, error, feedbacks:allStudentFeedbacks } = useSelector((state) => state.allStudent);

// Add these states, refs and utils near the top of Apply.js
const insightScrollRef = useRef();
const [isInsightHovering, setIsInsightHovering] = useState(false);

// Reusable auto-scroll hook
const useAutoScroll = (ref, isHovering) => {
  useEffect(() => {
    const container = ref.current;
    let intervalId;

    const startScroll = () => {
      intervalId = setInterval(() => {
        if (!isHovering && container) {
          container.scrollBy({ left: 6, behavior: "smooth" });
          const atEnd =
            container.scrollLeft + container.offsetWidth >=
            container.scrollWidth - 1;
          if (atEnd) {
            clearInterval(intervalId);
            setTimeout(() => {
              container.scrollTo({ left: 0, behavior: "auto" });
              setTimeout(startScroll, 500);
            }, 1000);
          }
        }
      }, 20);
    };

    startScroll();
    return () => clearInterval(intervalId);
  }, [isHovering, ref]);
};

// Attach auto scroll for insights
useAutoScroll(insightScrollRef, isInsightHovering);

// Manual scroll buttons
const scrollLeft = (ref) =>
  ref.current?.scrollBy({ left: -300, behavior: "smooth" });
const scrollRight = (ref) =>
  ref.current?.scrollBy({ left: 300, behavior: "smooth" });


  

   useEffect(()=>{
                AOS.init()
                if (error) {
                  toast.error(error);
                  dispatch(clearErrors());
                }
                 if (detailsError) {
                  toast.error(detailsError);
                  dispatch(clearErrors());
                }
                dispatch(allStudentAction());
                dispatch(allExtraAction())
              },[dispatch, error, detailsError])

  return (
 <Fragment>
  {
    loading ? (<Loader />):(
       <Fragment>
                <Metadata title={`Extra Curricular Activities - The Learning Hub`} />

      <div className="servicesDetailsContainer">
       <div className='topAffiliationContainer' >
      <div className="video-background">
        <video src={video} autoPlay loop muted playsInline />
      </div>
                        </div>
            <div className="homesMainContainer">

      <div className="bottomServiceDetailsContainer">
    
           {afiliations && afiliations.map((service) => (
          <div
            className="servicesDetailsCardContainer"
            key={service._id}
            data-aos="fade-down"
          >
            <div className="cardContent">
              <img src={service.avatar.url} alt={service.title} />
              <div className="textContent">
                <h1>{service.title}</h1>
                <p>{service.description}</p>
              </div>
            </div>
            </div>

        ))}
     
      </div>
  
                     <div className='thirdMidContainer'>
                <h1 className="title" data-aos="fade-down">School Insights</h1>
                <div className="teacher-carousel-wrapper">
                  <button onClick={() => scrollLeft(insightScrollRef)}>◀</button>
                  <div
                    className="teacher-carousel"
                    ref={insightScrollRef}
                    onMouseEnter={() => setIsInsightHovering(true)}
                    onMouseLeave={() => setIsInsightHovering(false)}
                  >
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
                  <button onClick={() => scrollRight(insightScrollRef)}>▶</button>
                </div>
              </div>

    </div>
    </div>
  </Fragment>
    )
  }
 </Fragment>
   
  );
};

export default Activities;
