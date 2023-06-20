import React, { createContext , useState , useEffect } from "react";


export const MealId = createContext()

const defaultId = 0 

export const MealsContextProvider = (props) => {

    const [idNumber , setIdNumber] = useState(defaultId)
    const [addToCard , setAddToCard] = useState([])
    const [selectedMealsForCart , setSelectedMealsForCart] = useState([])
    const [category , setCategory] = useState("")
    const [testy , setTest] = useState("non-clicked")

    const mealId = (id) => {
        setIdNumber(id)
    }

    const theCategory = (catego) =>{
        setCategory(catego)
    }

    const selectedMeals = (mealId) => {
        setAddToCard(prev => [...prev , mealId])
    }


   const removeMeal = (mealID) => { 
            setAddToCard([])
            addToCard.map(idNum => {
                if(mealID != idNum){
                    setAddToCard(prev => [...prev , idNum])
                }
            })
        }
 

    

    
    console.log(addToCard);

   const mealIdValue = {idNumber , mealId , addToCard , selectedMeals , removeMeal , selectedMealsForCart , setSelectedMealsForCart , category , theCategory}

   return(
        <MealId.Provider value={mealIdValue}>
            {props.children}
        </MealId.Provider>
   )

}
