import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MealId } from "../context/context";
import Fade from 'react-reveal/Fade';

const MenuResult = (props) => {

    const {mealId , selectedMeals} = useContext(MealId)

    return(
        <Fade bottom>
        <div className="menu-card">
            <div className="meal-img">
                <img src={props.img}/>
            </div>
            <div className="meal-text">
                <h3>{props.name}</h3>

            </div>
                    
            <div className="card-btns">
                <Link to={`/meal/${props.id}`}>
                <button className="ing-btn" onClick={()=>mealId(props.id)}>Ingredients</button>
                </Link>
               
                
            </div>
        </div>
        </Fade>
    )
}

export default MenuResult