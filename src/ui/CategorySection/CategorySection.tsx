import croissant from '../../assets/icons/icon-croissant.svg';
import egg from '../../assets/images/egg.png';
import './CategorySection.css';

export default function CategorySection() {
  return (
    <section className="category-section">
      <div className="header-section">
        <div className="section-title">
          <img src={croissant} alt="croissant" />
          <p className="section-title-text">POPULAR CATEGORY</p>
        </div>
        <h3>Immerse yourself in a wonderful experience</h3>
      </div>

      <div className="category-container">
        {Array.from({ length: 3 }).map((_, id) => (
          <div className="category-item" key={id}>
            <img src={egg} alt="egg" />
            <p className="category-description">HEAVY DISH</p>
            <p className="category-title">Meat & Dishes</p>
          </div>
        ))}
      </div>
    </section>
  )
}