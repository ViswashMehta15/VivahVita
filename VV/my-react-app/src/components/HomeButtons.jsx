// src/components/HomeButtons.jsx
import React from 'react';
import HomeButton from './HomeButton';
import { Link } from 'react-router-dom';

function HomeButtons() {
  return (
    <div className="homepage-buttons">
      <HomeButton text="Photos" />
      <HomeButton text="Personal Details" />
      <HomeButton text="Family Details" />
      <HomeButton text="Horoscope Details" />
      <HomeButton text="Educational & Professional Information" />
      <Link to="/about">
        <HomeButton text="More About Me" />
      </Link>
    </div>
  );
}

export default HomeButtons;
