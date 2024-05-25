// src/components/HomePage.jsx
import React from 'react';
import '../styles/HomePage.css';
import Header from './Header';
import HomeButtons from './HomeButtons';
import profileImage from '../assets/vish.jpg';

function HomePage() {
  return (
    <div className="homepage-card">
      <Header name="Viswash Yogeshbhai Mehta" imageSrc={profileImage}/>
      <HomeButtons />

      <div className="footer">
        <p>VivahVita</p>
      </div>
    </div>
  );
}

export default HomePage;
