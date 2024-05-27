// src/components/HomePage.jsx
import React from 'react';
import '../styles/HomePage.css';
import Header from '../components/Header';
import HomeButtons from '../components/HomeButtons';
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



// These are my next steps:
// 1. remove the borders (it looks shit), and make it seamless with the background of the webpage.
// 2. Change background color, and add it like a component (so that we can customize it later)
// 3. Change the frontend into a responsive web design (change layout a bit depending on user screen size)
// 4. Change button shape to be more round and "friendly" (Done)
