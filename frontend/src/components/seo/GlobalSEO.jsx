// src/components/seo/GlobalSEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../../config/site';
import { PRIMARY_KEYWORDS, HASHTAGS, META_DESCRIPTIONS } from '../../config/seoKeywords';

const GlobalSEO = ({ 
  page = 'home',
  title = '',
  description = '',
  image = '/og-image.jpg',
  canonical = '',
  noindex = false,
  children 
}) => {
  
  const baseUrl = SITE_CONFIG.baseUrl;
  const siteName = SITE_CONFIG.name;
  
  // Page-specific configurations
  const pageConfigs = {
    home: {
      title: 'The Learning Hub International | Accredited Online School for K-12',
      description: META_DESCRIPTIONS.home,
      keywords: PRIMARY_KEYWORDS,
      url: baseUrl
    },
    programs: {
      title: 'Online Programs: British & American Curriculum | The Learning Hub',
      description: META_DESCRIPTIONS.programs,
      keywords: PRIMARY_KEYWORDS,
      url: `${baseUrl}/programs`
    },
    admissions: {
      title: 'Admissions | The Learning Hub International Online School',
      description: META_DESCRIPTIONS.admissions,
      keywords: PRIMARY_KEYWORDS,
      url: `${baseUrl}/admissions`
    },
    login: {
      title: 'Learning Hub International Login | Student Portal',
      description: META_DESCRIPTIONS.login,
      keywords: PRIMARY_KEYWORDS,
      url: `${baseUrl}/login`
    },
    reviews: {
      title: 'The Learning Hub Reviews | Parent & Student Testimonials',
      description: META_DESCRIPTIONS.reviews,
      keywords: PRIMARY_KEYWORDS,
      url: `${baseUrl}/reviews`
    },
    about: {
      title: 'About The Learning Hub International | Certified Online School',
      description: META_DESCRIPTIONS.about,
      keywords: PRIMARY_KEYWORDS,
      url: `${baseUrl}/about`
    },
    contact: {
      title: 'Contact The Learning Hub | Global Online School Support',
      description: META_DESCRIPTIONS.contact,
      keywords: PRIMARY_KEYWORDS,
      url: `${baseUrl}/contact`
    }
  };

  const config = pageConfigs[page] || pageConfigs.home;
  const finalTitle = title || config.title;
  const finalDescription = description || config.description;
  const finalKeywords = [...new Set([...PRIMARY_KEYWORDS, ...config.keywords])].join(', ');
  const finalUrl = canonical || config.url;
  const allHashtags = [...HASHTAGS.branded, ...HASHTAGS.industry, ...HASHTAGS.audience, ...HASHTAGS.curriculum].join(' ');

  // School Schema Data
  const schoolSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "The Learning Hub International",
    "alternateName": ["TLH International", "The Learning Hub Online Academy", "Learning Hub International"],
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": finalDescription,
    "telephone": SITE_CONFIG.phoneInternational,
    "email": SITE_CONFIG.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE_CONFIG.address.street,
      "addressLocality": SITE_CONFIG.address.city,
      "addressCountry": SITE_CONFIG.address.country
    },
    "founder": {
      "@type": "Person",
      "name": SITE_CONFIG.founder
    },
    "foundingDate": "2018",
    "accreditation": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "accreditation",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Federal Board of Intermediate and Secondary Education",
        "identifier": "FBISE Code: 3124"
      }
    },
    "areaServed": SITE_CONFIG.regions,
    "sameAs": Object.values(SITE_CONFIG.social)
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={siteName} />
      
      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Canonical */}
      <link rel="canonical" href={finalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={`${baseUrl}${image}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:hashtag" content={allHashtags} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tlh_edu" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={`${baseUrl}${image}`} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schoolSchema)}
      </script>
      
      {children}
    </Helmet>
  );
};

export default GlobalSEO;