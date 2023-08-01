import {useRef, useState, useEffect } from 'react';
import './Cuisines.css'

const Cuisines = ({ cuisineData }) => {
    const [displayedCuisines, setDisplayedCuisines] = useState(100);

    const containerRef = useRef(null);

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
  
      const scrollY = window.scrollY || window.pageYOffset;
      const containerBottom = container.offsetTop + container.offsetHeight;
      const windowHeight = window.innerHeight;
  
      if (scrollY + windowHeight >= containerBottom) {
        // Load more cuisines when the user reaches the bottom of the container
        setDisplayedCuisines((prevDisplayedCuisines) =>
          Math.min(prevDisplayedCuisines + 100, cuisineData?.length)
        );
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [cuisineData]);
  
    return (
      <div className='cuisines'>
        <h2>Cuisines</h2>
        <div ref={containerRef} className="cuisines-grid">
          {cuisineData?.slice(0, displayedCuisines).map((cuisine, index) => (
            <div className="single-cuisine">
                <a key={index} className="cus-item-box" href={cuisine.link}>
                {cuisine.text}
                </a>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Cuisines;
