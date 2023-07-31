import './TopRestaurant.css'
import ScrollableImageGrid from '../Helpers/ScrollableGrid';

const TopRestaurant = ({topResData}) => {

    const topResImg = topResData?.gridElements?.infoWithStyle.restaurants || [];

    const imageUrl = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'

    if (!topResData) {
        // Render a loading state while data is being fetched
        return <div>Loading...</div>;
      }
    
      if (topResData.error) {
        // Render an error state if there's an error
        return <div>Error: {topResData.error.message}</div>;
      }
  
      const {
          imageGridRef,
          isLeftDisabled,
          isRightDisabled,
          handleScroll,
          scrollLeft,
          scrollRight
        } = ScrollableImageGrid({ images: topResImg });

    return ( 
        <div className='top-res'>
        <div className="card-header">
            <h2>What's on your mind?</h2>
            <div className='scroll-buttons'>
                <button className='arrow left' onClick={scrollLeft} disabled={isLeftDisabled}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/> </svg> 
                </button>
                <button className='arrow right' onClick={scrollRight} disabled={isRightDisabled}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/> </svg>
                </button>
            </div>
        </div>
        <div className='image-cont' ref={imageGridRef} onScroll={handleScroll}>
          {topResImg.map((item) => (
            <a key={item.info.id} href={item.cta.link}>
              <img className='res-img' src={`${imageUrl}${item.info.cloudinaryImageId}`} alt={item.info.name} />
            </a>
          ))}
        </div>
      </div>
     );
}
 
export default TopRestaurant;