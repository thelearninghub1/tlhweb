import React, { Fragment, useEffect } from 'react'
import SupportCard from './SupportCard.jsx';
import './Support.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useDispatch , useSelector } from 'react-redux';
import {toast } from 'react-toastify';
import { allSupportAction , clearErrors } from '../../../actions/affilationAction';
import Loader from '../../layout/Loader/Loader.jsx';
import video from '../../../assets/academic.mp4';
import Metadata from '../../layout/Metadata/Metadata.jsx';

const Support = () => {


  const dispatch = useDispatch();
    const {loading,error,afiliations} = useSelector((state)=>state.allAffiliation);
  

 
  
      useEffect(()=>{
                       AOS.init()

                       if (error) {
                        toast.error(error);
                        dispatch(clearErrors());
                        
                       }
                       dispatch(allSupportAction());
                     },[error,dispatch]) 
      
 
  return (
               <Fragment>
                {
                  loading ? (<Loader/>):(
                     <Fragment>
                <Metadata title={`Academic Support - The Learning Hub`} />

                <div className="ourProjectsContainer">
                     <div className='topAffiliationContainer' >
                       <div className="video-background">
                         <video src={video} autoPlay loop muted playsInline />
                       </div>
                                         </div>
               
                    <div className='bottomProjectContainer' >
                    <section className="partners-section">
      {afiliations && afiliations.map((partner, index) => (
        <SupportCard key={index} partner={partner} />
      ))}
    </section>
                             </div>
        
                </div>
             
            </Fragment>
                  )
                }
               </Fragment>
            )
        }

export default Support
