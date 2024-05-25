// src/components/Header.jsx
import React from 'react';
import ProfileImage from './ProfileImage';
import ProfileName from './ProfileName';

function Header(props) {
  return (
    <div className="homepage-header">
      <ProfileImage imageSrc={props.imageSrc} />
      <ProfileName name={props.name}/>
    </div>
  );
}

export default Header;
