import react from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>F</span>ly
            <span>H</span>igh
          </h2>
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}
export default Navbar;