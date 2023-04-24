import React from 'react';
import './ProfileCard.css'

const ProfileCard = ({ imageSrc, designation, name, jobDescription }) => {
  const handleSeeMoreClick = () => {
    alert(name);
  };

  return (
    <div className='profile-main'>
    <div className="profile-card">
    <div className='profile-card2'>
      <img src={imageSrc} alt="Profile" className="profile-card__image" />
      <div className="profile-card__details">
      <p className="profile-card__designation">{designation}</p>
        <h3 className="profile-card__name">{name}</h3>
        <p className="profile-card__job-description">{jobDescription}</p>
        <button className='btn' onClick={handleSeeMoreClick}>See More</button>
      </div>
      </div>
    </div>
    </div>
  );
};

export default ProfileCard;
