import React from 'react';
import AdItem from './ad-item/ad-item';

import './ads.css';

const Ads = ({ ads, loading }) => {
    if (loading) {
        return (<p>Loading...</p>)
    }

    const renderedAds = ads.map(ad => <AdItem {...ad} key={ad.id}/> );

    return (
      <ul className="ad-list">
          { renderedAds }
      </ul>
    );
};

export default Ads;