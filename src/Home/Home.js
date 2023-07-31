import { useDispatch, useSelector } from 'react-redux';
import { fetchRes } from '../Redux/Slice/res-data';
import { useEffect, useState } from 'react';
import Offers from '../Offers/Offers';
import './Home.css'
import Recipes from '../Recipes/Recipes';
import TopRestaurant from '../TopRestaurant/TopRestaurant';

const Home = () => {
    const dispatch = useDispatch();
    const state = useSelector((state)=>state.res?.data?.data);
    const [offerCarousel, setOfferCarousel] = useState([]);
    const [recipeCarousel, setRecipeCarousel] = useState([]);
    const [topResCarousel, setTopResCarousel] = useState([]);
    console.log('state',state);
    
    useEffect(() => {
      dispatch(fetchRes());
  }, [dispatch]);

  useEffect(() => {
      if (state && Array.isArray(state.cards) && state.cards.length > 0) {
          // Offer carousel images
          const getOfferCarousel = state.cards[0].card.card.imageGridCards.info;
          setOfferCarousel(getOfferCarousel);
          const getRecipeCarousel = state.cards[1].card.card.imageGridCards.info;
          setRecipeCarousel(getRecipeCarousel);
          const getTopResCarousel = state.cards[2].card.card;
          setTopResCarousel(getTopResCarousel);
          console.log(topResCarousel);
      }
  }, [state]);


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
            <div className="home-topRes">
              <TopRestaurant topResData={topResCarousel}></TopRestaurant>
            </div>
        </div>
     );
}
 
export default Home;


