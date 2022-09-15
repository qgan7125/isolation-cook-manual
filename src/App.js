import CookChoices from './components/Choices';
import Navbar from './components/Navbar';
import './App.css';
import "./css/variables.css";
import Recipe from './components/Recipe';
import GotoRecipe from './components/GotoRecipe';

function App() {
  return (
    <>
      <Navbar />
      <CookChoices />
      <Recipe />
      <GotoRecipe />
    </>
  );
}

export default App;
