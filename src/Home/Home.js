import { useDispatch, useSelector } from 'react-redux';
import { fetchRes } from '../Redux/Slice/res-data';
import { useEffect, useState } from 'react';
import Offers from '../Offers/Offers';
import './Home.css'
import Recipes from '../Recipes/Recipes';
import TopRestaurant from '../TopRestaurant/TopRestaurant';
import RestaurantList from '../RestaurantList/RestaurantList';
import Brands from '../Brands and Cuisines/Brands/Brands';
import Cuisines from '../Brands and Cuisines/Cuisines/Cuisines';

const Home = () => {
    const dispatch = useDispatch();
    const state = useSelector((state)=>state.res?.data?.data);
    const [offerCarousel, setOfferCarousel] = useState([]);
    const [recipeCarousel, setRecipeCarousel] = useState([]);
    const [topResCarousel, setTopResCarousel] = useState([]);
    const [gridTitle, setGridTitle] = useState([]);
    const [filterQuery, setFilterQuery] = useState([]);
    const [resList, setResList] = useState([]);
    const [brands, setBrands] = useState([]);
    const [cuisines, setCuisines] = useState([]);
    console.log('state',state);
    
    useEffect(() => {
      dispatch(fetchRes());
  }, [dispatch]);

  useEffect(() => {
      if (state && Array.isArray(state.cards) && state.cards.length > 0) {
          // Offer carousel images
          const getOfferCarousel = state.cards[0].card.card.imageGridCards?.info;
          setOfferCarousel(getOfferCarousel);
          const getRecipeCarousel = state.cards[1].card.card.imageGridCards?.info;
          setRecipeCarousel(getRecipeCarousel);
          const getTopResCarousel = state.cards[2].card.card;
          setTopResCarousel(getTopResCarousel);
          const getGridTitle = state.cards[3].card.card.title;
          setGridTitle(getGridTitle);
          const getFilterQuery = state.cards[4].card.card;
          setFilterQuery(getFilterQuery);
          const getResList = state.cards[5].card.card;
          setResList(getResList);
          const getBrands = state.cards[7].card.card.brands;
          setBrands(getBrands);
          const getCuisines = state.cards[8].card.card.cuisines;
          setCuisines(getCuisines);
          console.log(brands);
      }
  }, [state,brands]);


  if (!state) {
    // Render a loading state while data is being fetched
    return <div>Loading...</div>;
  }

  if (state.error) {
    // Render an error state if there's an error
    return <div>Error: {state.error.message}</div>;
  }

    return ( 
        <div className='home'>
            <div className='home-offers'>
            <Offers  offersData={offerCarousel} />
            </div>
            <div className='home-recipes'>
              <Recipes recipesData={recipeCarousel}></Recipes>
            </div>
            <hr />
            <div className="home-topRes">
              <TopRestaurant topResData={topResCarousel}></TopRestaurant>
            </div>
            <hr />
            <div className="res-list">
              <RestaurantList resListData={resList} resListTitle={gridTitle} resFilter={filterQuery}></RestaurantList>
            </div>
            <div className="brands">
              <Brands brandData={brands}></Brands>
            </div>
            <div className="cuisines">
              <Cuisines cuisineData={cuisines}></Cuisines>
            </div>
        </div>
     );
}
 
export default Home;


