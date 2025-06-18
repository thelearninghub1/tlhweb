import React, { Fragment, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Calendar.css';
import {Link} from 'react-router-dom';
import { allCalenderAction , clearErrors} from '../../../actions/calenderAction';
import { useDispatch , useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Loader from '../../layout/Loader/Loader';
import video from '../../../assets/calender.mp4';
import Metadata from '../../layout/Metadata/Metadata';


const Calendar = () => {

  const dispatch = useDispatch();

  const {loading,error,calenders} = useSelector((state)=>state.allCalenders);
 
    
      const ageGroups = [
        { age: "May 2024"},
        { age: "01-May", grade: "Labour Day (school closed)" },
        { age: "20th May", grade: "Start of Prep Leave" },
        { age: "27th May", grade: "Yearly Exams" },
        { age: "JUNE 2024"},
        { age: "4th June", grade: "End of Final Exams" },
        { age: "5th June", grade: "Start of Summer Vacation" },
        { age: "10th June", grade: "Start of New Batch for the Academic Year 2024-25" },
        { age: "17th till 19th June", grade: "Eid Ul Adha 2024 Vacations *could vary upon the lunar calendar*" },
        { age: "19th – 22nd June", grade: "UAE & KSA Virtual PTM & Result Announcement (Final Exams)" },
        { age: "23rd June", grade: "PTM at Karachi HQ of Learn" },
        { age: "24th June", grade: "Back to School" },
        { age: "JULY 2024",},
        { age: "8th till 12th July", grade: "Fruit Day – KG" },
        { age: "17th July", grade: "10th Muharram (School Closed)" },
        { age: "22nd till 26th July", grade: `The Number Ninja – Mathematics Student Society <br/> Mental Math Technique through Finger Abacus` },
        { age: "29th till 31st July", grade: "Literary Lions – Literature Student Society 3 Day Reading Challenge (2 short stories for students) Quiz/Presentation/Creative Summary/Alternate Ending Submission on the 3rd Day of Challenge" },
        { age: "AUGUST 2024" },
        { age: "5th August", grade: "New Sesssion Grade 9 & 10" },
        { age: "12th & 13th Aug", grade: "Independence Day Related Class Activities in Urdu Class" },
        { age: "14th August", grade: "Pakistan’s Independence Day – School Closed" },
        { age: "19th till 23rd Aug", grade: "Spelling Bee Competition" },
        { age: "26th till 30th Aug", grade: "The Number Ninja – Mathematics Student Society Mental Math Technique through Finger Abacus" },
        { age: "SEPTEMBER 2024" },
        { age: "6th September", grade: "Defense Day Activity Encourage students to express their patriotism through art and writing activities" },
        { age: "15th September", grade: "2th Rabi-ul-Awwal (School Closed)" },
        { age: "16th till 20th Sept", grade: "Literary Lions – Literature Student Society First Day of Autumn Fall Art/Fall Reading List" },
        { age: "21st September", grade: "Sports Day" },
        { age: "OCTOBER 2024"},
        { age: "1st till 4th Oct", grade: "Virtual Appreciation Wall Set up a virtual appreciation wall where students can post messages, videos, or drawings expressing appreciation for their teachers." },
        { age: "5th October", grade: "Teachers Day" },
        { age: "14th till 18th Oct", grade: "National Bullying Prevention Day Debate on how to stop bullying & awareness seminars" },
        { age: "23rd October", grade: "Character Day" },
        { age: "NOVEMBER 2024"  },
        { age: "7th & 8th Nov", grade: "Urdu Class Activity Social Studies Class Historic Character Importance Day – Iqbal" },
        { age: "9th November", grade: "Iqbal Day" },
        { age: "7th November", grade: "Students Day Celebration" },
        { age: "20th November", grade: "Childrens Day" },
        { age: "25th till 29th Nov", grade: "Revision Week" },
        { age: "DECEMBER 2024" },
        { age: "2nd till 6th Dec", grade: "Exam Preparation Leave" },
        { age: "9th till 17th Dec", grade: "Exam Week" },
        { age: "18th December", grade: "Start of Winter Vacation" },
        { age: "28th December", grade: "PTM at Learn Karachi HQ & Result Announcement" },
        { age: "30th & 31st Dec", grade: "Virtual Parent Teacher Meeting & Result Announcement" },
      ];

       useEffect(()=>{
          AOS.init()
          if (error) {
            toast.error(error)
            dispatch(clearErrors())
          }
          dispatch(allCalenderAction())
        },[error,dispatch])
    return (
     
               <Fragment>
                {
                  loading ? (<Loader/>):(
                     <Fragment>
                <Metadata title={`Academic Calendar - The Learning Hub`} />

                    <div className="servicesContainer">
                        <div className='topAffiliationContainer' >
  <div className="video-background">
    <video src={video} autoPlay loop muted playsInline />
  </div>
                    </div>
                        <div className='bottomCalendarContainer' >
                        <div className="registration-age-container">
   
      <div className="calendar-criteria">
        <table>
          <thead>
            <tr>
              <th> Dates</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody >
            {calenders && calenders.map((item) => (
              <tr key={item._id}>
                <td>{item.date}</td>
                <td>{item.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
       
      </div>




    </div>
                        </div>
                    </div>
                       <div className="secondAboutContainer">
                                <div className='aboutBottomContainer'>
                                        <h1>We have the solutions you are seeking.</h1>
                                        <Link to={`/contact-us`}>Discover more</Link>
                                    </div>
                                </div>
                </Fragment>
                  )
                }
               </Fragment>
            )}

export default Calendar;


