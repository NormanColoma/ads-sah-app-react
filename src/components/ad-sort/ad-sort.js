import React from 'react';
import './ad-sort.css';

const AdSort = ({ sortOpts, sortSelected,  handleSortOptClick}) => {
    const handleFilterClick = (e) => {
        if (e.target.tagName === "SPAN" || e.target.tagName === "path" || e.target.tagName === "BUTTON") {
          const sortList = document.querySelector('.select-filter');
          sortList.classList.toggle('show');
        } else {
          const sortList = document.querySelector('.select-filter');
          sortList.classList.toggle('show'); 
        }
    }

    const sortOptions = sortOpts.map(it => <li key={it} onClick={() => handleSortOptClick(it)}><a>{it}</a></li>);

    return (
        <div>
          <button className="btn-filter" onClick={handleFilterClick} >
              <i className="fas fa-filter"></i> 
              <span>Sorted by: <strong>{sortSelected}</strong></span>
              <ul className="select-filter">
                {sortOptions}
              </ul>
          </button>
        </div>
    );
};

export default AdSort;