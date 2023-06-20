import React from "react";
import Axios from "axios"
import { useEffect , useState } from "react";
import Fade from 'react-reveal/Fade';

const FoodList = () => {


    const [mails,setMails] = useState([])
    let sixMails = []

useEffect(()=>{
    
    Axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=b").then((respo) => {
       
    for(let i=0 ; i< 6 ; i++){
        sixMails.push(respo.data.meals[i])
    }

    setMails(sixMails)
        
})


},[])

    return(
        <div className="food-list pt-5 pb-5 text-center">
            <h1>Delicious Food For You</h1> 
            <div className="container">
                   
                <div className="row cards-food">
                    {mails.map((meal)=>{
                        return(
                            <FoodCard img={meal.strMealThumb} name={meal.strMeal} category={meal.strCategory}/>
                            )
                        })}
                </div>
                       
                <div className="all-menu-btn">All Menu</div>
            </div>
        </div>
    )
}


const FoodCard = (props) => {
    return(
        <Fade bottom>
        <div className="col-lg-4 col-6 food-card">
            <div className="img">
                <img src={props.img}/>
            </div>
            <div className="text">
             
                <h4>{props.name}</h4>
                <h5>Category : <span>{props.category}</span></h5>
            </div>
            <div className="btns">
                <button>order now</button>
            </div>
        </div>
        </Fade>
    )
}


export default FoodList