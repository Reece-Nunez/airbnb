import React from 'react';
import './FloridaGetaway.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";

import exteriorImage from '../assets/images/florida-getaway-images/exterior.jpeg';
import poolImage from '../assets/images/florida-getaway-images/pool.jpeg';
import patioImage from '../assets/images/florida-getaway-images/patio.jpeg';
import livingRoomImage from '../assets/images/florida-getaway-images/living-room.jpeg';
import kitchenImage from '../assets/images/florida-getaway-images/kitchen.jpeg';
import diningImage from '../assets/images/florida-getaway-images/dining.jpeg';
import bedroom1Image from '../assets/images/florida-getaway-images/bedroom1.jpeg';
import bedroom2Image from '../assets/images/florida-getaway-images/bedroom2.jpeg';
import bathroom1Image from '../assets/images/florida-getaway-images/bathroom1.jpeg';
import bathroom2Image from '../assets/images/florida-getaway-images/bathroom2.jpeg';
import backyardImage from '../assets/images/florida-getaway-images/backyard.jpeg';

function FloridaGetaway() {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => navigate('/'), 500);
  };


  const images = [
    exteriorImage,
    poolImage,
    patioImage,
    livingRoomImage,
    kitchenImage,
    diningImage,
    bedroom1Image,
    bedroom2Image,
    bathroom1Image,
    bathroom2Image,
    backyardImage,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="florida-getaway">
      <h1>Florida Getaway</h1>
      <p>Your perfect beachside escape awaits! Enjoy stunning views, luxurious amenities, and the ultimate relaxation experience.</p>

      {/* Sliding Gallery */}
      <Slider {...settings} className="gallery">
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Property ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </Slider>

      <ul>
        <li>6 Guests</li>
        <li>3 Bedrooms</li>
        <li>3 Beds</li>
        <li>2 Bathrooms</li>
        <li>Easy Access to local amenities</li>
        <li>Private pool</li>
        <li>WiFi and smart TV</li>
      </ul>
      <a className='book-button' href="https://www.airbnb.com/rooms/818184240745799799" target="_blank" rel="noopener noreferrer">
        <button>Book Now on Airbnb</button>
      </a>
      <div className='back-link'>
        <button onClick={handleNavigateHome} className="back-home-link">
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: "8px" }} />
          Back to Home
        </button>
      </div>
    </div >
  );
}

export default FloridaGetaway;
