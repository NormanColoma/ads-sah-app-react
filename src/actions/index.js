import fetch from 'cross-fetch';
const { REACT_APP_API_URL: API_URL } = process.env;

export const getAdsFilter = async(type, dispatch, params) => {
    const { sortedBy, direction, page } = params;

    const response = await fetch(`${API_URL}/ads?page=${page}&sortedBy=${sortedBy}&direction=${direction}`);
    const payload = await response.json();
    dispatch({ type, payload });

    if (payload.length > 0) {
        dispatch({ type: 'incrementPage'});
    }
}

export const downloadAds = async(params) => {
    const { sortedBy, direction, untilPage } = params;

    const response = await fetch(`${API_URL}/ads/json?untilPage=${untilPage}&sortedBy=${sortedBy}&direction=${direction}`);
    const payload = await response.blob();

    const url = window.URL.createObjectURL(new Blob([payload]));
    const link = document.createElement('a');

    link.href = url;
    link.setAttribute('download', 'ads.json');

    document.body.appendChild(link);
    link.click();

    link.parentNode.removeChild(link);
}