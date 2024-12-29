import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Slider from 'react-slick';
import './App.css';
import FloridaGetaway from './pages/FloridaGetaway';
import CoastalCottage from './pages/CoastalCottage';
import logo from './assets/images/logo.png';
import arrowIcon from './assets/images/arrow.png';

function App() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowArrow(true)
      } else {
        setShowArrow(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  const reviews = [
    {
      name: 'Heather',
      property: 'Florida Getaway',
      text: 'Wonderful place to stay! Host is very responsive and helpful. This home is beautiful! Clean, comfortable and relaxing.',
      rating: 5,
    },
    {
      name: 'Susan',
      property: 'Florida Getaway',
      text: 'Definitely, home away from home -- even better, since there was a heated swimming pool. Home was warm and inviting, comfortable and spacious. Every room was beautifully decorated, kitchen was well-equipped with plenty of spices and condiments. We will definitely stay again.',
      rating: 5,
    },
    {
      name: 'Karen',
      property: 'Florida Getaway',
      text: 'Fantastic location. The house is more than we expected in every way. Lisa deserves five stars in every way!!!',
      rating: 5,
    },
    {
      name: 'JD',
      property: 'Costal Cottage',
      text: 'We were so excited to be able to stay blocks from our family for Christmas. I loved the location, the comforts of home and space. Coffee on the Lanai, poolside relaxation. Everything was perfect. Lisa was super responsive to all our needs while we were here. Thanks to the awesome host. We plan to be back next year if the family remains local to this area.',
      rating: 5,
    },
    {
      name: 'Randi',
      property: 'Coastal Cottage',
      text: 'We had a great week at Lisa\'s beautiful home. The pictures were exactly what the house looked like. The home was stocked with everything anyone could, or would need. There were clear instructions in the house about what needed to be done, trash, etc., and we loved that all the light switches were marked! The pool was great to have, and so refreshing with the HOT weather. Lisa was very responsive when we texted her with questions, and we definitely appreciated all the small touches around the house. We especially loved the screened in patio area. This was a great space, and the ceiling fans were adequate enough to cool off the room. Thank you Lisa, for sharing your home with us!',
      rating: 5,
    },
    {
      name: 'Teri',
      property: 'Florida Getaway',
      text: 'Had a wonderful time there. The house was very nice just like the pictures show. And Lisa was very good about responding to all my questions. Would definitely stay there again!!',
      rating: 5,
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <Router basename='/'>
      <div className="App">
        <Link
          to="/"
          className="logo"
          onClick={(event) => {
            event.preventDefault();
            const topElement = document.documentElement;
            topElement.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img src={logo} alt="Logo" />
        </Link>
        {showArrow && (
          <div className="scroll-arrow" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={arrowIcon} alt="Scroll to top" className="arrow-icon" />
            <p>Back to Top</p>
          </div>
        )}

        <header className="App-header">
          <div className='header-tag-container'>
            <h1 className='header-tag'>Our Home is Your Home!</h1>
          </div>
          <div className='header-background'></div>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <section className="home">
                <h2 className='welcome'>Welcome To Your Florida Vacation!</h2>
                <div className='reviews'>
                  <h3>What Our Guests Say</h3>
                  <Slider {...settings} className="review-slider">
                    {reviews.map((review, index) => (
                      <div key={index} className="review">
                        <p className="review-text">"{review.text}"</p>
                        <p className="review-name">- {review.name}</p>
                        <p className="review-property">{review.property}</p>
                        <div className="review-stars">{renderStars(review.rating)}</div>
                      </div>
                    ))}
                  </Slider>
                </div>
                <p>Choose from our two beautiful rentals for your next vacation</p>
                <div className="property-links">
                  <Link to="/florida-getaway" className="property-link">Florida Getaway</Link>
                  <Link to="/coastal-cottage" className="property-link">Coastal Cottage</Link>
                </div>
              </section>
            } />
            <Route path="/florida-getaway" element={<FloridaGetaway />} />
            <Route path="/coastal-cottage" element={<CoastalCottage />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Lisa's Florida Vacation Homes. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
