// src/components/HomeButtons.jsx
import React from 'react';
import HomeButton from './HomeButton';

function HomeButtons() {
  return (
    <div className="homepage-buttons">
      <HomeButton text="Photos" />
      <HomeButton text="Personal Details" />
      <HomeButton text="Family Details" />
      <HomeButton text="Horoscope Details" />
      <HomeButton text="Educational & Professional Information" />
      <HomeButton text="More About Me" />
    </div>
  );
}

export default HomeButtons;
