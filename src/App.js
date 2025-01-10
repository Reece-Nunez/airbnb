import React, { useState, useEffect } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "./App.css";
import FloridaGetaway from "./pages/FloridaGetaway";
import CoastalCottage from "./pages/CoastalCottage";
import logo from "./assets/images/logo.png";
import arrowIcon from "./assets/images/arrow.png";
import floridaGetawayImage from "./assets/images/florida-getaway-images/exterior.jpeg";
import coastalCottageImage from "./assets/images/coastal-cottage-images/exterior (1).jpeg";
import FadeInSection from "./components/FadeInSection";

function App() {
  const navigate = useNavigate();
  const [showArrow, setShowArrow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarTransparent, setNavbarTransparent] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarTransparent(true);
        setIsVisible(false);
      } else {
        setNavbarTransparent(false);
        setIsVisible(true);
      }
      if (window.scrollY > 200) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const handleNavigateHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => navigate("/"), 500);
  };

  const scrollToProperties = () => {
    navigate("/");

    setTimeout(() => {
      const target = document.getElementById("property-links");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  const reviews = [
    {
      name: "Heather",
      property: "Florida Getaway",
      text: "Wonderful place to stay! Host is very responsive and helpful. This home is beautiful! Clean, comfortable and relaxing.",
      rating: 5,
    },
    {
      name: "Susan",
      property: "Florida Getaway",
      text: "Definitely, home away from home -- even better, since there was a heated swimming pool. Home was warm and inviting, comfortable and spacious. Every room was beautifully decorated, kitchen was well-equipped with plenty of spices and condiments. We will definitely stay again.",
      rating: 5,
    },
    {
      name: "Karen",
      property: "Florida Getaway",
      text: "Fantastic location. The house is more than we expected in every way. Lisa deserves five stars in every way!!!",
      rating: 5,
    },
    {
      name: "JD",
      property: "Costal Cottage",
      text: "We were so excited to be able to stay blocks from our family for Christmas. I loved the location, the comforts of home and space. Coffee on the Lanai, poolside relaxation. Everything was perfect. Lisa was super responsive to all our needs while we were here. Thanks to the awesome host. We plan to be back next year if the family remains local to this area.",
      rating: 5,
    },
    {
      name: "Randi",
      property: "Coastal Cottage",
      text: "We had a great week at Lisa's beautiful home. The pictures were exactly what the house looked like. The home was stocked with everything anyone could, or would need. There were clear instructions in the house about what needed to be done, trash, etc., and we loved that all the light switches were marked! The pool was great to have, and so refreshing with the HOT weather. Lisa was very responsive when we texted her with questions, and we definitely appreciated all the small touches around the house. We especially loved the screened in patio area. This was a great space, and the ceiling fans were adequate enough to cool off the room. Thank you Lisa, for sharing your home with us!",
      rating: 5,
    },
    {
      name: "Teri",
      property: "Florida Getaway",
      text: "Had a wonderful time there. The house was very nice just like the pictures show. And Lisa was very good about responding to all my questions. Would definitely stay there again!!",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="App">
      <div className={`navbar ${navbarTransparent ? "transparent" : ""}`}>
        <div
          className={`hamburger-menu ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`side-menu ${menuOpen ? "open" : ""}`}>
          <div className="side-menu-header">
            <h2>Rentals</h2>
          </div>
          <nav className="side-menu-nav">
            <SideMenuLink
              onClickBehavior={() => setMenuOpen(false)}
              sectionId="property-links"
              route="/florida-getaway"
            >
              Florida Getaway
            </SideMenuLink>
            <SideMenuLink
              onClickBehavior={() => setMenuOpen(false)}
              sectionId="property-links"
              route="/coastal-cottage"
            >
              Coastal Cottage
            </SideMenuLink>
          </nav>
        </div>
        <div className={`website-title ${isVisible ? "visible" : "hidden"}`}>
          <h1>Nunez Vacation Homes</h1>
        </div>
        <div className="right-logo">
          <Link
            to="/"
            className="logo"
            onClick={(event) => {
              event.preventDefault();
              handleNavigateHome();
            }}
          >
            <img src={logo} alt="Logo" />
          </Link>
          {showArrow && (
            <div
              className="scroll-arrow"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img src={arrowIcon} alt="Scroll to top" className="arrow-icon" />
              <p>Back to top</p>
            </div>
          )}
        </div>
      </div>

      <header className="App-header">
        <div className="header-tag-container">
          <h1 className="header-tag">Your Home Away From Home</h1>
          <button
            className="hero-cta"
            onClick={scrollToProperties}
          >
            Explore Our Rentals
          </button>
        </div>
        <div className="header-background"></div>
      </header>

      <main className="main-content">
        <FadeInSection>
          <section className="description-section">
            <div className="description">
              <p>
                Welcome to your home away from home! Nestled in the beautiful
                up-and-coming area of Port Charlotte, Florida. Located on the Gulf Coast,
                just 25 minutes from the beach, you can enjoy the serenity without
                the stress of overcrowded tourist destinations. Explore our two
                stunning homes, conveniently located right in front of and behind
                each other, making this the perfect spot for large family gatherings
                and reunions. Take a dip in the pools at either location and bask in
                all the relaxation you deserve, surrounded by the meticulous love
                and care you’d expect in your own home.
              </p>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="property-section">
            <Routes>
              <Route
                path="/"
                element={

                  <FadeInSection>
                    <section className="home">
                      <div id="property-links" className="property-links">
                        <div className="florida-container">
                          <img
                            className="florida-getaway-image"
                            src={floridaGetawayImage}
                          />
                          <Link to="/florida-getaway" className="property-link">
                            View Florida Getaway
                          </Link>
                        </div>
                        <div className="coastal-container">
                          <img
                            className="coastal-cottage-image"
                            src={coastalCottageImage}
                          />
                          <Link to="/coastal-cottage" className="property-link">
                            View Coastal Cottage
                          </Link>
                        </div>
                      </div>
                    </section>
                  </FadeInSection>

                }
              />
              <Route path="/florida-getaway" element={<FloridaGetaway />} />
              <Route path="/coastal-cottage" element={<CoastalCottage />} />
            </Routes>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="reviews-section">
            <h2 className="welcome">
              Welcome To Your Gulf Coast Florida Vacation!
            </h2>
            <div className="reviews">
              <h3>Guest Reviews:</h3>
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
          </section>
        </FadeInSection>

      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Nunez Vacation Homes. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

function SideMenuLink({ children, onClickBehavior, sectionId, route }) {
  const navigate = useNavigate();

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClickBehavior();
        navigate(route);
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      {children}
    </a>
  );
}

export default App;
