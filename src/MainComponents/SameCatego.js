import React , {useEffect, useState} from 'react'
import { useContext } from 'react';
import Axios from "axios";
import { Link } from 'react-router-dom';
import { MealId } from "../context/context";
import Fade from 'react-reveal/Fade';

const SameCatego = (props) => {
    const {category , theCategory , mealId} = useContext(MealId)
    const [catego , setCatego] = useState([])
    const [rend , setRend] = useState(0)

    const click = () =>{
        setRend(rend+1)
        
    }

    useEffect(()=>{

        Axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`).then((meal)=>{
                    setCatego((meal.data.meals))
        })
        console.log(rend);
    },[])

    return( 
        <div className='sameCategory'>
            { catego.length > 0 ? 
            
                catego.map((meal)=>{
                 return  <div onClick={()=>{
                    mealId(meal.idMeal)
                    click()
                 }}>
                        <Link to={`/meal/${meal.idMeal}`} style={{ textDecoration: 'none' }}>
                       <Carts name={meal.strMeal} img={meal.strMealThumb} id={meal.idMeal} />
                       </Link>
                       </div>
                }) 
            
            : console.log("empty")} 
        </div>
    )

}

export default SameCatego

export const Carts = (props) => {

    return(
        <Fade bottom>
        <div className='categoCart'  >
            <img className='img-fluid' src={props.img}/>
            <h4>{props.name}</h4>
        </div>
        </Fade>
    )
}