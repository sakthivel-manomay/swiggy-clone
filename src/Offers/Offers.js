import './Offers.css'
import ScrollableImageGrid from '../Helpers/ScrollableGrid';

const Offers = ({ offersData }) => {
    
    const imageUrl = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

    if (!offersData) {
      // Render a loading state while data is being fetched
      return <div>Loading...</div>;
    }
  
    if (offersData.error) {
      // Render an error state if there's an error
      return <div>Error: {offersData.error.message}</div>;
    }

    const {
        imageGridRef,
        isLeftDisabled,
        isRightDisabled,
        handleScroll,
        scrollLeft,
        scrollRight
      } = ScrollableImageGrid({ images: offersData });
  
    return (
      <div className='offers'>
        <div className="card-header">
            <h2>Best Offers For You</h2>
            <div className='scroll-buttons'>
                <button className='arrow left' onClick={scrollLeft} disabled={isLeftDisabled}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/> </svg> 
                </button>
                <button className='arrow right' onClick={scrollRight} disabled={isRightDisabled}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/> </svg>
                </button>
            </div>
        </div>
        <div className='image-grid' ref={imageGridRef} onScroll={handleScroll}>
          {offersData.map((item) => (
            <a key={item.id} href={item.action.link}>
              <img className='car-img' src={`${imageUrl}${item.imageId}`} alt={item.accessibility.altText} />
            </a>
          ))}
        </div>
      </div>
    );
}
 
export default Offers;