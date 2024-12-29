import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import './CoastalCottage.css';

import exteriorImage from '../assets/images/coastal-cottage-images/exterior (1).jpeg';
import poolImage from '../assets/images/coastal-cottage-images/pool (1).jpeg';
import patioImage from '../assets/images/coastal-cottage-images/patio (1).jpeg';
import livingRoomImage from '../assets/images/coastal-cottage-images/living-room (1).jpeg';
import kitchenImage from '../assets/images/coastal-cottage-images/kitchen (1).jpeg';
import bedroom1Image from '../assets/images/coastal-cottage-images/bedroom1 (1).jpeg';
import bedroom2Image from '../assets/images/coastal-cottage-images/bedroom2 (1).jpeg';
import bathroom1Image from '../assets/images/coastal-cottage-images/bathroom1.jpeg';
import bathroom2Image from '../assets/images/coastal-cottage-images/bathroom2 (1).jpeg';
import backyardImage from '../assets/images/coastal-cottage-images/backyard (1).jpeg';

function CoastalCottage() {

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
    <div className="coastal-cottage">
      <h1>Coastal Cottage</h1>
      <p>Experience the charm of a serene retreat with all the comforts of home. Perfect for families, couples, or solo adventurers.</p>

      {/* Sliding Gallery */}
      <Slider {...settings} className="gallery">
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Property ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </Slider>

      <ul>
        <li>4 Guests</li>
        <li>2 Bedrooms</li>
        <li>2 Beds</li>
        <li>2 Bathroom</li>
        <li>Close to local attractions</li>
        <li>Fully equipped kitchen</li>
        <li>Private Pool</li>
      </ul>
      <a className='book-button' href="https://www.airbnb.com/rooms/1073345215474384545" target="_blank" rel="noopener noreferrer">
        <button>Book Now on Airbnb</button>
      </a>
      <div className='back-link'>
        <button onClick={handleNavigateHome} className="back-home-link">
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: "8px" }} />
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default CoastalCottage;
