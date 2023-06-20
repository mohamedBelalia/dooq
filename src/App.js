import './App.css';
import './AppV2.css';
import './cartStyle.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Navbar from './components/Nav';
import Home from './MainComponents/Home';
import Menu from './MainComponents/Menu';
import { Cart } from './MainComponents/Cart';
import Ingredients from './MainComponents/Ingredient';
import { MealsContextProvider } from './context/context';
import About from './MainComponents/About';


function App() {
  return (
    <div className="App">
      <MealsContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/meal/:mealId' element={<Ingredients/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
       
      </Router>
      </MealsContextProvider>
    </div>
  );
}

export default App;

