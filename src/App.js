import { Routes,Route} from "react-router-dom";
import Home from "./routes/home/Home.component";
import Navigation from "./routes/navigation/Navigation.component";
import Authentication from "./routes/authentication/Authentication.component";
import Shop from "./components/shop/shop.component";


const App = () => {

    
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
