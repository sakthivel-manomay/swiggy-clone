import './RestaurantList.css'
import { useState } from 'react';

const RestaurantList = ({resListData ,resListTitle, resFilter}) => {
    const resList = resListData?.gridElements?.infoWithStyle.restaurants || [];
    const filterList = resFilter?.facetList || [];

    const imageUrl = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'
    const [filterActive, setFilterActive] = useState(false);
    
    const toggleFilter = () => {
        setFilterActive(!filterActive);
    };

    const clearFilter = () => {
        setFilterActive(false);
    };

    if (!resListData) {
        // Render a loading state while data is being fetched
        return <div>Loading...</div>;
      }
    
      if (resListData.error) {
        // Render an error state if there's an error
        return <div>Error: {resListData.error.message}</div>;
      } 

    const filteredResList = filterActive
    ? resList.filter((item) => item.info.sla?.deliveryTime < 20)
    : resList;

    return ( 
        <div className='rest-list'>
        <div className="card-header">
            <h2>{resListTitle}</h2>
        </div>

        {/* <div>
            {filterList.map((facet) => (
                <div key={facet.id}>
                    <h3>{facet.label}</h3>
                </div>
            ))}
        </div> */}

        <div className="filter-container">
            <button onClick={toggleFilter} className={filterActive ? 'filter-but-active' : 'filter-but'}>
            Fastest Delivery
                {filterActive && (
                <span className="cancel-icon" onClick={clearFilter}>
                    &times;
                </span>
                )}
            </button>
            
        </div>

        <div className='restlist-image-cont'>
          {filteredResList.map((item) => (
            <a key={item.info.id} href={item.cta.link}>
              <div class='rl-single-img-cont'>
                <img className='restlist-img' src={`${imageUrl}${item.info.cloudinaryImageId}`} alt={item.info.name} />
                <div className="txt-off-cont">
                    <p className='txt-off'> {`${item.info.aggregatedDiscountInfoV3?.header || ''} ${item.info.aggregatedDiscountInfoV3?.subHeader || ''}`}</p>
                </div>
              </div>
              <div>
                <h4 className='restlist-name'>{`${item.info?.name || ''}`}</h4>
                <div className='rate-cont'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg>
                    <p className='rate-num'>{`${item.info?.avgRating || ''}`}</p>
                </div>
                <div className="restlist-style">
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
 
export default RestaurantList;