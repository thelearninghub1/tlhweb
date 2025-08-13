import React, { Fragment, useEffect, useState } from 'react';
import './Subject.css';
import Pagination from 'react-js-pagination';
import SubjectCard from './SubjectCard.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSelector, useDispatch } from 'react-redux';
import { allProjectsAction, clearErrors } from '../../actions/subjectActions';
import { toast } from 'react-toastify';
import Loader from '../layout/Loader/Loader.jsx';
import video from '../../assets/subject.mp4';
import Metadata from '../layout/Metadata/Metadata.jsx';

const Subject = () => {
  const dispatch = useDispatch();
  const { loading, error, subjects, resultPerPage, subjectsCount } = useSelector(
    (state) => state.allSub
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [grade, setGrade] = useState('');

  const categories = [
    'Foundation Stage 1',
    'Foundation Stage 2',
    'Foundation Stage 3',
    'Grade 1',
    'Grade 2',
    'Grade 3',
    'Grade 4',
    'Grade 5',
    'Grade 6',
    'Grade 7',
    'Grade 8',
    'Grade 9',
    'Grade 10',
    'Grade 11',
  ];

  useEffect(() => {
    AOS.init();

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    // Only fetch subjects if a category is selected
    if (grade) {
      dispatch(allProjectsAction(currentPage, grade));
    }
  }, [error, dispatch, currentPage, grade]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title={`Subject Summary - The Learning Hub`} />

          <div className="ourProjectsContainer">
            {/* Video background */}
            <div className="topAffiliationContainer">
              <div className="video-background">
                <video src={video} autoPlay loop muted playsInline />
              </div>
            </div>

            {/* Category filter */}
            <div className="bottomProjectContainer">
              {categories.map((cat) => (
                <ul
                  key={cat}
                  className="categoryFilter"
                  onClick={() => {
                    setGrade(cat);
                    setCurrentPage(1); // Reset to first page when changing category
                  }}
                >
                  <li>{cat}</li>
                </ul>
              ))}
            </div>

            {/* Subjects list */}

            <div className="bottomProjectContainer">
              {grade && subjects && subjects.length > 0 ? (
                subjects.map((subject) => (
                  <SubjectCard subject={subject} key={subject._id} />
                ))
              ) : !grade ? (
                <p style={{ textAlign: 'center', color: '#666' ,fontSize:"40px"}} className='title'>
                  Please select a grade to view subjects.
                </p>
              ) : (
                <p style={{ textAlign: 'center', color: '#666', fontSize:"30vmax" }} className='title' >
                  No subjects found for this grade.
                </p>
              )}
            </div>

            {/* Pagination */}
            {grade && subjects && subjects.length > 0 && (
              <div className="paginationContainer">
                <Pagination
                  activePage={currentPage}
                  onChange={(e) => setCurrentPage(e)}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={subjectsCount}
                  nextPageText={'Next'}
                  firstPageText={'1st'}
                  lastPageText={'Last'}
                  prevPageText={'Prev'}
                  itemClass="item-class"
                  linkClass="item-link"
                  activeClass="active-item"
                  activeLinkClass="active-link"
                />
              </div>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Subject;
