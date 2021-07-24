import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import {useState,useEffect} from 'react';
import Recipes from "./components/Recipes";


function App() {
  const APP_ID = 'c854cd4f'
  const APP_KEY = '588263730ca59f36d479d8a1761151ae'
  const [text,setText]=useState('')
  const [recipes,setRecipes] = useState([])
  const [query,setQuery] = useState('chicken')


  useEffect(()=>{
    const getrecipe=async ()=>{
      const response= await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=c854cd4f&app_key=588263730ca59f36d479d8a1761151ae`)
      const data=await response.json();
      setRecipes(await data.hits)
      console.log(recipes)
      
    }
   getrecipe();
  },[query])

  
  
  
    const submit=(e)=> {
      e.preventDefault();
      setQuery(text)
    console.log(text);
    }
    
  return (
    <div className="App">
      <Header />
      <Searchbar submit={submit} text={text} setText={setText} />
      
      <div className="recipes">
      <Recipes recipes={recipes}/>
      </div>

    </div>
  );
}

export default App;
