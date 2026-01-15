// src/components/seo/ProgramsSEO.jsx
import React from 'react';
import GlobalSEO from './GlobalSEO';
import { Helmet } from 'react-helmet-async';

const ProgramsSEO = ({ children, programType = '' }) => {
  const programTitles = {
    british: 'British Curriculum Online School | Cambridge IGCSE & A-Levels - The Learning Hub',
    american: 'American High School Online | US Diploma Program - The Learning Hub',
    igcse: 'IGCSE Online Classes | Cambridge International Education - The Learning Hub',
    alevel: 'A-Level Online Tuition | Advanced Level Courses - The Learning Hub',
    primary: 'Online Primary School International | Elementary Education - The Learning Hub',
    fbise: 'FBISE Online School Pakistan | Matric & Intermediate - The Learning Hub'
  };
  
  const title = programTitles[programType] || 'Online Programs | British & American Curriculum - The Learning Hub International';
  
  // Course Schema for Programs
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": title,
    "description": `Accredited ${programType || 'online'} program at The Learning Hub International`,
    "provider": {
      "@type": "Organization",
      "name": "The Learning Hub International",
      "sameAs": "https://www.thelearninghubedu.com"
    },
    "offers": {
      "@type": "Offer",
      "category": "Online Education"
    }
  };

  return (
    <>
      <GlobalSEO page="programs" title={title}>
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(courseSchema)}
          </script>
        </Helmet>
      </GlobalSEO>
      {children}
    </>
  );
};

export default ProgramsSEO;