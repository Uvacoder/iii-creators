import React from 'react';
import './CreatorCard.css';

const CreatorCard = ({ id, name, description, url, imageURL, instaURL, tiktokURL, onClick }) => {
  return (
    <div className="creator-card" onClick={onClick}>
      <div className="creator-card-content">
        <img src={imageURL} alt={`${name}'s avatar`} />
        <h2>{name}</h2>
        <p>{description}</p>
        {/* <div className="social-links">
          <a href={url}>URL</a>
          <a href={tiktokURL}>Tiktok</a>        
          <a href={instaURL}>Insta</a>  
        </div> */}
      </div>
    </div>
  );
};

export default CreatorCard;
