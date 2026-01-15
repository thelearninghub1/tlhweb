// src/components/seo/AdmissionsSEO.jsx
import React from 'react';
import GlobalSEO from './GlobalSEO';

const AdmissionsSEO = ({ children, region = '' }) => {
  const regionTitles = {
    uae: 'Online School Admissions UAE | The Learning Hub Dubai',
    ksa: 'Online School Saudi Arabia | Admissions KSA',
    pakistan: 'Online School Pakistan | FBISE Admissions',
    global: 'Global Admissions | International Online School'
  };
  
  const title = regionTitles[region] || 'Admissions | The Learning Hub International Online School';
  
  return (
    <GlobalSEO page="admissions" title={title}>
      {children}
    </GlobalSEO>
  );
};

export default AdmissionsSEO;