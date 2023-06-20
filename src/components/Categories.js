import React from "react";
import Axios from "axios"
import { Link } from "react-router-dom";
import { useEffect , useState , useContext } from "react";
import { MealId } from "../context/context";

const Categories = () => {
    const [category,setCategory] = useState([])
    let allCatego = []
    

useEffect(()=>{
    let idArray = [0,1,2,3,6,7]
    Axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then((respo) => {
        
    for(let i = 0 ; i< idArray.length ; i++){

        allCatego.push(respo.data.categories[idArray[i]])
    } 
    
    setCategory(allCatego)
    
})
},[]) 



    return (
        <div className="categories">
            <h1>Our Categories</h1>
            <div className="container row">
            {category.map((catego)=>{
               return <TheCategory img={catego.strCategoryThumb} title={catego.strCategory}/>
            })}
                 
            </div>  
         
        </div>
    )
}

 
export default Categories


const TheCategory = (props) => {
    const {theCategory} = useContext(MealId)
    return(
        <div className="col-lg-2 col-md-4 col-6 category"  >
           <Link to="/menu" style={{ textDecoration: 'none' }}>
            <div onClick={()=>theCategory(props.title)}>
            <img src={props.img}/>
            </div>
            <h3>{props.title}</h3>
           </Link> 
        </div>
    )
}






