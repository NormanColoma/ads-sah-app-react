import fetch from 'cross-fetch';

export const getAdsFilter = async(type, dispatch, params) => {
    const { sortedBy, direction, page } = params;

    const response = await fetch(`http://localhost:8000/ads?page=${page}&sortedBy=${sortedBy}&direction=${direction}`);
    const payload = await response.json();
    
    dispatch({ type, payload });
}