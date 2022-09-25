import { Routes,Route} from "react-router-dom";
import Home from "./routes/home/Home.component";
import Navigation from "./routes/navigation/Navigation.component";
import Authentication from "./routes/authentication/Authentication.component";


const App = () => {

  

  const Shop=()=>{
    return(
      <div>I am the Shop</div>
    )
  }
    
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
         <Route index={true} element={ <Home/>} />
          <Route path="shop" element={<Shop/>}/>
         <Route path="/auth"  element={ <Authentication/>} />
      </Route>
    </Routes>
  );
};

export default App;
