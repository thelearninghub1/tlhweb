// src/components/seo/HomeSEO.jsx
import React from 'react';
import GlobalSEO from './GlobalSEO';

const HomeSEO = ({ children }) => {
  return (
    <GlobalSEO page="home">
      {children}
    </GlobalSEO>
  );
};

export default HomeSEO;