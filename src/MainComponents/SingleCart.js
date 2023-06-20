import React , {useEffect , useContext} from 'react'
import Axios from 'axios'
import { MealId } from '../context/context'

function SingleCart() {
    const {addToCard , selectedMeals , setSelectedMealsForCart , selectedMealsForCart} = useContext(MealId)

    useEffect(()=>{

        addToCard.map((mealId)=>{

           Axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`).then((resp)=>{

              for(let i=0 ; i< addToCard.length ; i++){
                console.log(i);
              }
            setSelectedMealsForCart(prev => [...prev ,resp.data.meals ])

            })

        })
        console.log("we're inside useEffect");
        
      },[])
      console.log("useEffect in single cart" , selectedMealsForCart);


  return (
    <div>{console.log("single page")}</div>
  )
}

export default SingleCart

