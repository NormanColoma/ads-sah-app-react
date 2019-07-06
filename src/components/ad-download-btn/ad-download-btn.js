import React from 'react';

const AdDownloadBtn = ({ handleDownloadAdBtnClick }) => {
    return (
        <button className="download-btn" onClick={handleDownloadAdBtnClick}>
          <i className="fas fa-download"></i>
        </button>
    )
};

export default AdDownloadBtn;