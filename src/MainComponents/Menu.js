import React from "react";
import Axios from "axios";
import { useEffect , useContext , useState } from "react";
import AllCards from "./AllCards";
import { createContext } from "react"; 
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { MealId } from "../context/context";


export const FormContext = createContext()

const Menu = () => {
   
    
    const client = new QueryClient()
    const [category,setCategory] = useState([])
    const [searchData , setSearchData ] = useState({name : "Beef"})

 

useEffect(()=>{
    
    Axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list").then((respo) => {
        setCategory((respo.data.meals))       
})


},[])

const handleChange = (event) => {
    const { name , value } = event.target
    setSearchData(prevState => ({
        ...prevState ,
        [name] : value
    }))
    
} 


    return(
        <div className="Menu">
            <QueryClientProvider client={client}>
            <div className="container">
                <div className="menu-presentation">
                    <div>
                        <h1>Our Wonderful Menu For Your Tasty</h1>
                        <p>
                                The food is guaranted to be hot and freshly cooked food of Your
                                city and will be delivered at your home with the taste you deserve
                        </p>
                    </div>
                    <div className="chef-img">
                        <img src="./images/chef.png"/>
                    </div>
                </div>
                <FormContext.Provider value={{searchData , setSearchData}}>
                <div className="menu-body row">
                    <div className="menu-filter col-lg-3 col-md-12">
                        <h1>Search By Filter</h1>
                        <div className="filter-items">
                           
                            
                            <div>
                            <label>By Category</label>
                                <select 
                                onChange={handleChange} name="sCategory">
                                     {category.map((catego)=>{
                                   
                                        return(
                                        <CategoryOption name={catego.strCategory} />
                                          )
                                    })}
                                </select>
                            
                            </div>
                            
                        
                        </div>
                    </div>
                    <div className="menu-result col-lg-9 col-md-12">
                        
                        
                        <div >
                           <AllCards/>
                        </div>
                        
                    </div>
                </div>
                </FormContext.Provider>
            </div>
            </QueryClientProvider>
        </div>
    )
}




const CategoryOption = (props) => {
    return (
        <option>{props.name}</option>
    )
}



export default Menu