import logo from '../../assets/logo.svg';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
        <p className="logo-text">Furn</p>
      </div>
      <div className="navlink-group">
        <a href="#home" className="navlink">Home</a>
        <a href="#about" className="navlink">About</a>
        <a href="#contact" className="navlink">Contact</a>
      </div>
      <button className="cta-button">Menu</button>
    </nav>
  )
}