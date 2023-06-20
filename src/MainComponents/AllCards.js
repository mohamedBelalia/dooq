import React, { createContext } from "react";
import MenuResult from "../components/MenuResult";
import { useContext , useEffect , useState } from "react";
import { useQuery } from '@tanstack/react-query'
import { FormContext } from "./Menu";
import Axios from "axios";
import { MealId } from "../context/context";




const AllCards = () => {

    const {theCategory} = useContext(MealId)
    const dataToSearch = useContext(FormContext)
    const category = dataToSearch.searchData.sCategory
    



    const { data , isLoading  , isError , refetch} = useQuery(["meal"] , () => {
       return Axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`).then((res)=>res.data)
       
    })

    

    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
        return <h1>something wrong ...</h1>
    }
   
    

    return(
        <div className="search-res">
            <div className="cards-top">
                <button className="search-btn" onClick={()=>{

                  refetch()
                  theCategory(category)

                 }}>Search</button>
                 <h5>Filter Results : <span>{data.meals !== null ? data.meals.length : 0} items</span> </h5>
            </div>
        <div className="all-cards ">
            

            {data.meals !== null ? 
                
            data.meals.map((meal)=>{
                
                return(
                    <div key={meal.idMeal}>
                        <MenuResult img={meal.strMealThumb} name={meal.strMeal} key={meal} id={meal.idMeal} catego={meal.idMeal}/>                        
                    </div>
                )
            })
            
            : <h1>Please filter it</h1>}

                     
        </div>

        </div>
    )

  
}


 
export default AllCards