import { SiCoffeescript } from "react-icons/si";
import { Link, Button } from "react-scroll";

const TestNavbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <span className="coffee-icon">
          <SiCoffeescript />
        </span>
        <h1 className="nav-text">CafePulse</h1>
      </div>
      <div className="nav-center">
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

        <div className="nav-right">
          <Button className="login-button">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default TestNavbar;


/**
 * import { SiCoffeescript } from "react-icons/si";
import { Link, Button } from "react-scroll";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div>
        <div className="nav-left">
          <div className="nav-logo">
            <span>
              <SiCoffeescript />
            </span>
            <h1 className="nav-text">CafePulse</h1>
          </div>

          
          <nav>
            <Link className="nav-link">Home</Link>
            <Link className="nav-link">Menu</Link>
            <Link className="nav-link">About Us</Link>
            <Link className="nav-link">Products</Link>
            <Link className="nav-link"></Link>
            <Link className="nav-link"></Link>
          </nav>

        </div>
      </div>
    </div>
  );
};

export default Navbar;

 */
