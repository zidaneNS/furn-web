import './MenuSection.css';
import menu from '../../assets/icons/icon-menu.svg';
import expandDown from '../../assets/icons/icon-expand-down.svg';
import searchIcon from '../../assets/icons/icon-search.svg';
import curry from '../../assets/images/curry.png';
import steak from '../../assets/images/steak.png';
import doubleChevronLeft from '../../assets/icons/icon-double-chevron-left.svg';
import doubleChevronRight from '../../assets/icons/icon-double-chevron-right.svg';
import star from '../../assets/icons/icon-star.svg';
import starFill from '../../assets/icons/icon-star-fill.svg';
import randomPick from '../../helper/randomPick';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';

interface MenuItem {
  name: string,
  description: string,
  rating: number,
  price: number,
  imgUrl: string
}

const menuItems: MenuItem[] = Array.from({ length: 8 }).map((_) => ({
    name: randomPick<string>(['Steak', 'Fried Rice', 'Curry']),
    description: 'Discover a symphony of tastes with our handpicked favorites that promise to delight your...',
    rating: randomPick<number>([5, 4, 3]),
    price: randomPick<number>([10000, 30000, 200000]),
    imgUrl: randomPick<string>([curry, steak])
}));

type Category = 'All' | 'Main Course' | 'Drink' | 'Dessert';

const categories: Category[] = ['All', 'Main Course', 'Drink', 'Dessert']

export default function MenuSection() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [search, setSearch] = useState<string>('');
  const [debouncedSearch] = useDebounce(search, 500);
  const categoryRef = useRef<HTMLDivElement>(null);
  const [menuData, setMenuData] = useState<MenuItem[]>([]);

  useEffect(() => {
    if (debouncedSearch.length > 0) {
      setMenuData(menuItems.filter(item => item.name.toLocaleLowerCase().trim().includes(debouncedSearch.toLocaleLowerCase().trim())));
    } else {
      setMenuData(menuItems);
    }
  }, [debouncedSearch]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (categoryRef.current && !categoryRef.current.contains(e.target as Node)) setIsCategoryOpen(false);
    }

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [categoryRef]);

  return (
    <section className="menu-section" id="menu">
      <div className="menu-header">
        <div className="title-description">
          <div className="menu-title">
            <img src={menu} alt="menu" />
            <h3>Our Menu</h3>
          </div>
          <p>Discover a symphony of  tastes with our handpicked favorites that promise to delight your senses</p>
        </div>

        <div className="search-container">
          <div className="category-select-container" ref={categoryRef}>
            <button className="input-form category-select" onClick={() => setIsCategoryOpen(prev => !prev)}>
              <p>{selectedCategory}</p>
              <img src={expandDown} alt="expand down" />
            </button>
            {isCategoryOpen && (
              <div className="category-list">
                {categories.map((category, id) => (
                  <div className="category-list-item" key={id} onClick={() => {
                    setSelectedCategory(category);
                    setIsCategoryOpen(false);
                  }}>{category}</div>
                ))}
              </div>
            )}
          </div>
          <div className="input-form input-search-container">
            <img src={searchIcon} alt="search" />
            <input onChange={(e) => setSearch(e.target.value)} type="text" name="search" id="search" className="input-search" placeholder="search" value={search} />
          </div>
        </div>
      </div>

      <div className="menu-item-container">
        {menuData.map((item, id) => (
          <div className="menu-item" key={id}>
            <img src={item.imgUrl} alt={item.name} />
            <div className="menu-item-info">
              <p className="menu-item-title">{item.name}</p>
              <p>{item.description}</p>
            </div>
            <div className="menu-item-price-rating">
              <div className="menu-item-rating">
                {Array.from({ length: 5 }).map((_, id) => (
                  <img src={id < item.rating ? starFill : star} alt="star" key={id} />
                ))}
              </div>
              <p className="menu-item-price">IDR {item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="menu-pagination">
        <p>1</p>
        <img src={doubleChevronLeft} alt="chevron left" />
        <p>...</p>
        <img src={doubleChevronRight} alt="chevron right" />
        <p>10</p>
      </div>
    </section>
  )
}