// src/components/seo/RegionalSEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../../config/site';

const RegionalSEO = ({ country, city = '' }) => {
  const regionData = {
    uae: {
      title: 'Online School UAE | The Learning Hub International Dubai',
      description: 'The Learning Hub International - Premier online school in UAE offering British curriculum, American diploma, and FBISE programs for expat families in Dubai, Abu Dhabi, and across UAE.',
      keywords: [
        'online school UAE',
        'online school Dubai',
        'virtual school Abu Dhabi',
        'distance learning UAE',
        'expat school Dubai'
      ],
      geo: {
        region: 'AE-DU',
        placename: 'Dubai'
      }
    },
    pakistan: {
      title: 'Online School Pakistan | FBISE Accredited | The Learning Hub',
      description: 'FBISE accredited online school in Pakistan (Code: 3124). The Learning Hub offers Cambridge, American, and Pakistani curriculum for students across Karachi, Lahore, Islamabad.',
      keywords: [
        'online school Pakistan',
        'FBISE online school',
        'virtual school Karachi',
        'distance learning Pakistan'
      ],
      geo: {
        region: 'PK-SD',
        placename: 'Karachi'
      }
    }
  };

  const data = regionData[country] || regionData.uae;
  
  return (
    <Helmet>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords.join(', ')} />
      <meta name="geo.region" content={data.geo.region} />
      <meta name="geo.placename" content={city || data.geo.placename} />
    </Helmet>
  );
};

export default RegionalSEO;