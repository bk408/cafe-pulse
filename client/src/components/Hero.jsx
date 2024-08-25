

import headerImage from "../assets/img/home.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-box">
        <div className="hero-heading">
          <h1>
            Start your day with <br /> a steaming cup of <br /> coffee
          </h1>

          <p>
            Boost your productivity and build your mood with a glass of <br />{" "}
            coffee in the morning
          </p>

          <div className="hero-button">
            <button className="hero-btn">ADD TO CART</button>
            <button className="hero-btn">MORE MENU</button>
          </div>
        </div>

        <div className="header-image">
          <img src={headerImage} alt={headerImage} />

          
        </div>
      </div>
    </div>
  );
};

export default Hero;




