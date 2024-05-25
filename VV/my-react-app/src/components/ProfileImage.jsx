// src/components/ProfileImage.jsx
import React from 'react';


function ProfileImage(props) {
  return <img src={props.imageSrc} alt="Profile" className="homepage-image" />;
}

export default ProfileImage;