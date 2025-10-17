import fruits from '../../assets/images/fruits.png';
import kebab from '../../assets/images/kebab.png';
import sausage from '../../assets/images/sausage.png';
import arrowLeft from '../../assets/icons/icon-arrow-left.svg';
import arrowRight from '../../assets/icons/icon-arrow-right.svg';
import './Carousel.css';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import Autoplay from 'embla-carousel-autoplay';

interface CarouselItem {
  src: string,
  alt: string
}

const carouselItems: CarouselItem[] = [
  { src: sausage, alt: 'sausage' },
  { src: fruits, alt: 'fruits' },
  { src: kebab, alt: 'kebab' }
]

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi])

  return (
    <div className="carousel" ref={emblaRef}>
      <div className="carousel-container">
        {carouselItems.map((item, index) => (
          <div className="carousel-item" key={index}>
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
      <div className="arrow-group">
        <button className="arrow-button" onClick={scrollPrev}>
          <img src={arrowLeft} alt="arrow left" />
        </button>
        <button className="arrow-button" onClick={scrollNext}>
          <img src={arrowRight} alt="arrow right" />
        </button>
      </div>
    </div>  
  )
}