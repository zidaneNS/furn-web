import { useState } from 'react';
import './App.css';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AboutSection from './ui/AboutSection/AboutSection';
import CategorySection from './ui/CategorySection/CategorySection';
import MenuSection from './ui/MenuSection/MenuSection';
import Popup from './components/Popup/Popup';

export default function App() {
	const [showModal, setShowModal] = useState<boolean>(false);

	return (
		<div className="wrapper">
			{showModal && (
				<div className="modal">
					<Popup setShowModal={setShowModal} />
				</div>
			)}
			<Navbar />
			<main>
				{/* hero section */}
				<section className="hero" id="home">
					<h1 className='hero-title'>Delicious Food & Drinks, Enjoy With Wonderful Experience</h1>
					<p className="hero-text">We serve food, harmony, & laughter since 1998</p>
					<Carousel />
					<button onClick={() => setShowModal(true)} className="cta-button">BOOK A TABLE</button>
				</section>

				{/* partner section */}
				<section className="partner-section">
					{Array.from({ length: 4 }).map((_, id) => (
						<p className="partner-logo" key={id}>logoipsum</p>
					))}
				</section>

				{/* about section */}
				<AboutSection />

				{/* category section */}
				<CategorySection />

				{/* menu section */}
				<MenuSection />
			</main>
			
			<Footer />
		</div>
	)
}