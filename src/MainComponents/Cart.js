import React, { useContext, useEffect, useState } from "react";
import { MealId } from "../context/context";
import { Link } from "react-router-dom";
import './Cart.css';
import  Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import SingleCart from "./SingleCart";

export const Cart = () => {
    const {addToCard , mealId , removeMeal , selectedMealsForCart} = useContext(MealId)
    const [selectedMeals , setSelectedMeals] = useState([])
    const [sayHi , setSayHi] = useState("")

    // useEffect(()=>{

    //     addToCard.map((mealId)=>{

    //         Axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`).then((resp)=>{

                
    //             setSelectedMeals(prev => [...prev ,resp.data.meals ])

    //         })

    //     })
    //     console.log("useEffect");

    // },[])

    
  

    const handleClick = (id) => {
        removeMeal(id)
        setSayHi(id)
    }
    

    console.log("cart rendred");
    console.log( "Cart =>" ,addToCard);

    <h1 className="text-center">Your Selected Meals</h1>
    return (
        <div className="cart-container">
            <SingleCart/>
            <div className="container meal-cards-cont pt-5">
                {selectedMealsForCart.map((meal)=>{
                return(
                <div className="meal-card" key={meal[0].idMeal}>
                  
                    <div className="image-meal">
                        <img src={meal[0].strMealThumb} className="img-fluid"/>
                    </div>
                    <div className="details-meal">
                        <h4>{meal[0].strCategory}</h4>
                        <h2>{meal[0].strMeal}</h2>
                        
                    </div>
                        <div className="btn-price-meal">
                            <h3>$ {Number(meal[0].idMeal.slice(3,5))}</h3>
                            <Link to={`/meal/${meal[0].idMeal}`} style={{ textDecoration: 'none' }}>
                            <button onClick={()=>mealId(meal[0].idMeal)}>Ingredients</button>
                            </Link>
                        </div>
                        

                                               
                </div>
                )

                })}
            </div>

            <div className="total-price">
                <div>Order Total</div>
                <div>
                    <h4>Total</h4>
                    <h4>143 $</h4>
                </div>
                <div>
                    <h4>Delevry</h4>
                    <h4>3 $</h4>
                </div>
                <div>
                    <h4>TVA</h4>
                    <h4>10 %</h4>
                </div>
            </div>
            
        </div>
    )
}

