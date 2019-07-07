import React, { useRef, useEffect } from 'react';
import './ad-sort.css';

const AdSort = ({ sortOpts, sortSelected,  handleSortOptClick}) => {
    const handleFilterClick = (ref) => {
        if (ref && ref.target && ref.target.closest(".sort-container")) {
            const sortList = document.querySelector('.select-filter');
            sortList.classList.toggle('show');
        } else if(ref && ref.target) {
            const sortList = document.querySelector('.select-filter');
            sortList.classList.remove('show');
        } 
    }

    useEffect(() => {
      document.addEventListener("mousedown", handleFilterClick);
      return () => {
        document.removeEventListener("mousedown", handleFilterClick);
      };
    });

    const sortOptions = sortOpts.map(it => <li key={it} onClick={() => handleSortOptClick(it)}><a>{it}</a></li>);
    const sortRef = useRef(null);
    handleFilterClick(sortRef);

    return (
        <div className="sort-container" ref={sortRef}>
          <button className="btn-filter">
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