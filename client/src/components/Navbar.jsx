
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";
import { SiCoffeescript } from "react-icons/si";
import { Link, Button } from "react-scroll";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="nav-container">
      <div className="nav-left">
        <span className="coffee-icon">
          <SiCoffeescript />
        </span>
        <h1 className="nav-text">CafePulse</h1>
      </div>

      <div className={`nav-center ${isOpen ? "nav-active" : ""}`}>
        <Link className="nav-link" to="home">
          Home
        </Link>
        <Link className="nav-link" to="menu">
          Menu
        </Link>
        <Link className="nav-link" to="about">
          About Us
        </Link>
        <Link className="nav-link" to="products">
          Products
        </Link>
        <Link className="nav-link" to="reviews">
          Reviews
        </Link>

        </div>
        <div className="nav-right">
        <Button className="login-button">Login</Button>
        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenuFold />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
