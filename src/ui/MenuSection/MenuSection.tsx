import menu from '../../assets/icons/icon-menu.svg';
import expandDown from '../../assets/icons/icon-expand-down.svg';
import search from '../../assets/icons/icon-search.svg';
import curry from '../../assets/images/curry.png';
import steak from '../../assets/images/steak.png';
import doubleChevronLeft from '../../assets/icons/icon-double-chevron-left.svg';
import doubleChevronRight from '../../assets/icons/icon-double-chevron-right.svg';
import './MenuSection.css';

interface MenuItem {
  name: string,
  description: string,
  rating: number,
  price: number,
  imgUrl: string
}

function randomPick<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

const menuItems: MenuItem[] = Array(8).fill({
  name: randomPick<string>(['Steak', 'Fried Rice', 'Curry']),
  description: 'Discover a symphony of tastes with our handpicked favorites that promise to delight your...',
  rating: randomPick<number>([5, 4.5, 4]),
  price: randomPick<number>([10000, 30000, 200000]),
  imgUrl: randomPick<string>([curry, steak])
});

export default function MenuSection() {
  return (
    <section className="menu-section">
      <div className="menu-header">
        <div className="title-description">
          <div className="menu-title">
            <img src={menu} alt="menu" />
            <h3>Our Menu</h3>
          </div>
          <p>Discover a symphony of  tastes with our handpicked favorites that promise to delight your senses</p>
        </div>

        <div className="search-container">
          <button className="input-form">
            <p>All</p>
            <img src={expandDown} alt="expand down" />
          </button>
          <div className="input-form">
            <img src={search} alt="search" />
            <input type="text" name="search" id="search" className="input-search" placeholder="search" />
          </div>
        </div>
      </div>

      <div className="menu-item-container">
        {menuItems.map((item, id) => (
          <div className="menu-item" key={id}>
            <img src={item.imgUrl} alt={item.name} />
            <p className="menu-item-title">{item.name}</p>
            <div className="menu-item-description">{item.description}</div>
            <div className="menu-item-price-rating">
              <p className="menu-item-rating">{item.rating}</p>
              <p className="menu-item-price">${item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="menu-pagination">
        <img src={doubleChevronLeft} alt="chevron left" />
        <p>1</p>
        <p>...</p>
        <p>10</p>
        <img src={doubleChevronRight} alt="chevron right" />
      </div>
    </section>
  )
}