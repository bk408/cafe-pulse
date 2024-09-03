import menu1 from "../assets/img/menu1.jpg";
import menu2 from "../assets/img/menu2.jpg";
import menu3 from "../assets/img/menu3.jpg";
import menu4 from "../assets/img/menu4.jpg";
import menu5 from "../assets/img/menu5.jpg";
import menu6 from "../assets/img/menu6.jpg";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-box">
        <div className="menu-header">
          <h1>Our Menu</h1>
        </div>
        <div className="menu-card">
          <div className="menu-img">
            <img src={menu1} alt={menu1} />
            <h3>Espresso</h3>
          </div>

          <div className="menu-btn">
            <button>Hot</button>
            <button>Cold</button>
          </div>
        </div>

        <div className="menu-card">
          <div className="menu-img">
            <img src={menu2} alt={menu2} />
            <h3>Cappuccino</h3>
          </div>
          <div className="menu-btn">
            <button>Hot</button>
            <button>Cold</button>
          </div>
        </div>

        <div className="menu-card">
          <div className="menu-img">
            <img src={menu3} alt={menu3} />
            <h3>Latte</h3>
          </div>

          <div className="menu-btn">
            <button>Hot</button>
            <button>Cold</button>
          </div>
        </div>

        <div className="menu-card">
          <div className="menu-img">
            <img src={menu4} alt={menu4} />
            <h3>Americano</h3>
          </div>
          <div className="menu-btn">
            <button>Hot</button>
            <button>Cold</button>
          </div>
        </div>

        <div className="menu-card">
          <div className="menu-img">
            <img src={menu5} alt={menu5} />
            <h3>Macchiato</h3>
          </div>
          <div className="menu-btn">
            <button>Hot</button>
            <button>Cold</button>
          </div>
        </div>

        <div className="menu-card">
          <div className="menu-img">
            <img src={menu6} alt={menu6} />
            <h3>Doppio</h3>
          </div>
          <div className="menu-btn">
            <button>Hot</button>
            <button>Cold</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
