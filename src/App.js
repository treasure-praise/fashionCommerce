import { Routes,Route} from "react-router-dom";
import Home from "./routes/home/Home.component";
import Navigation from "./routes/navigation/Navigation.component";
import SignIn from "./routes/signin/Signin.component";


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
         <Route path="/signin"  element={ <SignIn/>} />
      </Route>
    </Routes>
  );
};

export default App;
