// src/components/seo/LoginSEO.jsx
import React from 'react';
import GlobalSEO from './GlobalSEO';

const LoginSEO = ({ children }) => {
  return (
    <GlobalSEO page="login" title="Learning Hub International Login | Student & Parent Portal">
      {children}
    </GlobalSEO>
  );
};

export default LoginSEO;