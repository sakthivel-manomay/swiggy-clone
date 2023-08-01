import {useRef, useState, useEffect } from 'react';
import './Brands.css'

const Brands = ({ brandData }) => {

    const [displayedBrands, setDisplayedBrands] = useState(100);

    const containerRef = useRef(null);

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
  
      const scrollY = window.scrollY || window.pageYOffset;
      const containerBottom = container.offsetTop + container.offsetHeight;
      const windowHeight = window.innerHeight;
  
      if (scrollY + windowHeight >= containerBottom) {
        // Load more brands when the user reaches the bottom of the container
        setDisplayedBrands((prevDisplayedBrands) =>
          Math.min(prevDisplayedBrands + 100, brandData?.length)
        );
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [brandData]);
  
    return (
      <div className='brands'>
        <h2>Brands</h2>
        <div ref={containerRef} className="brands-grid">
          {brandData?.slice(0, displayedBrands).map((brand, index) => (
            <div className="single-brand">
                <a key={index} className="br-item-box" href={brand.link}>
                {brand.text}
                </a>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Brands;
