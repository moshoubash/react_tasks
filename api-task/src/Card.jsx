import React from "react";

export default function Card({ id, title, description, price, thumbnail, category }){
    return (
        <div style={{width: '250px', margin: '10px', fontFamily: 'sans-serif', border: '1px solid #ccc', padding: '10px'}}>
        <img
            src={thumbnail}
            alt="thumbnail"
            width="100%"
        />
        <div id="b">{id} • {category}</div>
        <h2>{title}</h2>
        <p>{description.substring(0, 100)}..</p>
        <div>${price}</div>
        </div>
    );
}