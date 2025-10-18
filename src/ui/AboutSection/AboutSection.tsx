import ramen from '../../assets/images/ramen.png';
import croissant from '../../assets/icons/icon-croissant.svg';
import phone from '../../assets/icons/icon-phone-call-primary.svg';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <img src={ramen} alt="ramen" />
      <div className="about-text-box">
        <div className="section-title">
          <img src={croissant} alt="croissant" />
          <p className="section-title-text">SERVE QUALITY FOOD & THING</p>
        </div>

        <h3 className="large-highlight-text">Immerse yourself in a wonderful experience</h3>
        <p className="about-text">Savor sushi perfetcion - crafted with tradition, fresh ingredients, and a passion for detail</p>
        <p className="about-text">Savor sushi perfetcion - crafted with tradition, fresh ingredients, and a passion for detail. Savor sushi perfetcion - crafted with tradition, fresh ingredients, and a passion for detail</p>

        <div className="about-cta">
          <a href="#menu" className="cta-button secondary">Food Menu</a>
          <div className="call-cta">
            <img src={phone} alt="phone" />
            <p>(+62) 839-1938-1037</p>
          </div>
        </div>
      </div>
    </section>
  )
}