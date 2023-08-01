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
            <h2>{topResData.header?.title}</h2>
            <div className='scroll-buttons'>
                <button className='arrow left' onClick={scrollLeft} disabled={isLeftDisabled}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/> </svg> 
                </button>
                <button className='arrow right' onClick={scrollRight} disabled={isRightDisabled}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/> </svg>
                </button>
            </div>
        </div>
        <div className='res-image-cont' ref={imageGridRef} onScroll={handleScroll}>
          {topResImg.map((item) => (
            <a key={item.info.id} href={item.cta.link}>
              <div class='single-img-cont'>
                <img className='res-img' src={`${imageUrl}${item.info.cloudinaryImageId}`} alt={item.info.name} />
                <div className="txt-off-cont">
                    <p className='txt-off'> {`${item.info.aggregatedDiscountInfoV3?.header || ''} ${item.info.aggregatedDiscountInfoV3?.subHeader || ''}`}</p>
                </div>
              </div>
              <div>
                <h4 className='res-name'>{`${item.info?.name || ''}`}</h4>
                <div className='rate-cont'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg>
                    <p className='rate-num'>{`${item.info?.avgRating || ''}`}</p>
                </div>
                <div className="res-style">
                    <p className='style-name'>{`${item.info?.cuisines || ''}`}</p>
                    <p className='style-name'>{`${item.info?.areaName || ''}`}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
     );
}
 
export default TopRestaurant;