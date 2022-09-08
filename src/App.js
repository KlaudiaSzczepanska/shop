import Home from "./routers/home/home.component";
import {Routes, Route} from 'react-router-dom';
import NavigationBar from "./routers/navigation-bar.component/navigation-bar.component";
import SignIn from "./routers/sign-in. component/sign-in.component";

const Shop =()=>{
  return(
    <h1>Im shop</h1>
  )}

const App = () => {
  return (
    <Routes>
      <Route path ='/' element ={<NavigationBar />}>
      <Route index element={<Home />} />
      <Route path='shop' element = {<Shop />} />
      <Route path='sign-in' element = {<SignIn />} />
      </Route>
    </Routes>
    
  );
}

export default App;
