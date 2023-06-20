import React, { useContext , useEffect, useState } from "react";
import { MealId } from "../context/context";
import  Axios from "axios";
import './Ingredients.css';
import SameCatego from "./SameCatego";

const Ingredients = () => {
    const {idNumber } = useContext(MealId)
    const [readText , setReadText] = useState("more")
    let i =0 ;
    const [mealInfo , setMealInfo] = useState({
        name : "" ,
        category : "" ,
        image : "" ,
        Instructions : "" , 
     
    }) 
   
    const [ingredients , setIngredients] = useState([])
    console.log(idNumber);

      useEffect(()=>{
    
        Axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idNumber}`).then((respo) => {
            setIngredients([])
            
         respo.data.meals[0].strIngredient1 != "" ?   setIngredients(prev => [...prev , respo.data.meals[0].strIngredient1]) : console.log("no");
         respo.data.meals[0].strIngredient2 != "" ?   setIngredients(prev => [...prev , respo.data.meals[0].strIngredient2]) : console.log("no");
         respo.data.meals[0].strIngredient3 != "" ?   setIngredients(prev => [...prev , respo.data.meals[0].strIngredient3]) : console.log("no");
         respo.data.meals[0].strIngredient4 != "" ?   setIngredients(prev => [...prev , respo.data.meals[0].strIngredient4]) : console.log("no");
         respo.data.meals[0].strIngredient5 != "" ?   setIngredients(prev => [...prev , respo.data.meals[0].strIngredient5]) : console.log("no");
         respo.data.meals[0].strIngredient6 != "" ?   setIngredients(prev => [...prev , respo.data.meals[0].strIngredient6]) : console.log("no");
         respo.data.meals[0].strIngredient7 != "" ?   setIngredients(prev => [...prev , respo.data.meals[0].strIngredient7]) : console.log("no");
         respo.data.meals[0].strIngredient8 != "" ?   setIngredients(prev => [...prev , respo.data.meals[0].strIngredient8]) : console.log("no");
         respo.data.meals[0].strIngredient9 != "" ?   setIngredients(prev => [...prev , respo.data.meals[0].strIngredient9]) : console.log("no");
         respo.data.meals[0].strIngredient10 != "" ?   setIngredients(prev => [...prev , respo.data.meals[0].strIngredient10]) : console.log("no");
         respo.data.meals[0].strIngredient11 != "" ?   setIngredients(prev => [...prev , respo.data.meals[0].strIngredient11]) : console.log("no");
         respo.data.meals[0].strIngredient12 != "" ?   setIngredients(prev => [...prev , respo.data.meals[0].strIngredient12]) : console.log("no");
         respo.data.meals[0].strIngredient13 != "" ?   setIngredients(prev => [...prev , respo.data.meals[0].strIngredient13]) : console.log("no");

            setMealInfo({
                name : respo.data.meals[0].strMeal ,
                category : respo.data.meals[0].strCategory ,
                image : respo.data.meals[0].strMealThumb,
                Instructions : respo.data.meals[0].strInstructions,
               
              })
            
    })
    
    
    },[idNumber])
    
    const cuttingText = (text) => {
        let regularText = text.slice(0,200);

        
     return ( readText == "more" ? <p>{regularText}...</p> : <p>{text}</p>)

    }



    return( 
        <div>
        <div className="container to-center-ing">
        <div className="ingredients row">
            <div className="col-lg-6 col-md-12 image-meal" style={{backgroundImage: "url(" + mealInfo.image + ")"}}>
                <div>
                <img src={mealInfo.image} className="img-fluid"/>
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <p className="category-title">{mealInfo.category}</p>
                <h1>{mealInfo.name}</h1>
                <div className="text-instru">
                    {cuttingText(mealInfo.Instructions)}
                </div>
                <button className="mb-5 btn-more" onClick={()=>{
                    readText == "more" ? setReadText("less") : setReadText("more") 
                }}>Read {readText}</button>
           
                <h2>Ingredients : </h2>
                <div>
                    <ul>
                        {ingredients.map((ingredient)=>{
                            return(
                                <div className="ingred-div">
                                    <li>{ingredient}</li>
                                </div>
                            )
                        })}
                    </ul>
                </div>
                
            </div>

        </div>

            <div className="same-catego">
                <h1 className="mb-4">From The Same Category</h1>
                        <SameCatego catego={mealInfo.category}/>
            </div>

        </div>
        </div>
    )
}

export default Ingredients

