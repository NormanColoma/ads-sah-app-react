import React from "react";

const AdItem = ({ id, title, link, city, main_image }) => {
    return (<li>
        <div className="">
            <strong>{ id }</strong>
            <p>{title}</p>
            <a href={link} target="_blank">{link}</a>
            <p>{city}</p>
            <img src={main_image} />
        </div>
    </li>)
};

export default AdItem;