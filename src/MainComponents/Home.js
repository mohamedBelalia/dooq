import React from "react";
import Landing from "../components/landingPage";
import Advantages from "../components/Advantages";
import Categories from "../components/Categories";
import FoodList from "../components/FoodList";
import Footer from "../components/Footer"
import Review from "../components/Review";

const Home = () => {
    return(
        <div>
         
      <Landing />
      <Advantages />
      <Categories />
      <FoodList/>
      <Review/>
      <Footer/>

      

        </div>
    )
}

export default Home