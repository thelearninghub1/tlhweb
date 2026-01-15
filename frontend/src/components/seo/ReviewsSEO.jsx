// src/components/seo/ReviewsSEO.jsx
import React from 'react';
import GlobalSEO from './GlobalSEO';
import { Helmet } from 'react-helmet-async';

const ReviewsSEO = ({ children }) => {
  // Review Schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "The Learning Hub International",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <GlobalSEO page="reviews" title="The Learning Hub Reviews | Testimonials & Ratings">
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(reviewSchema)}
          </script>
        </Helmet>
      </GlobalSEO>
      {children}
    </>
  );
};

export default ReviewsSEO;