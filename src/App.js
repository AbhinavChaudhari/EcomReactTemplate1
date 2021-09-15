
import './App.css';
import Footer from './Componants/Footer';
import Header from './Componants/Header';
import Main from './Componants/main/Main';
import Login from "./Componants/Login";
import Confirmation from './Componants/Confirmation'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './Componants/Register';
import ProductCategory from './Componants/ProductCategory';
import SingleProduct from './Componants/SingleProduct';
import Shopping from './Componants/Shopping';
import Checkout from "./Componants/Checkout"
import Contact from './Componants/Contact';
function App() {
  return (
  
<>
<Router>
  <Header/>

    <Switch>

      <Route exact path="/" component={Main} />
    
      <Route exact path="/login" component={Login} />
       
      <Route exact path="/register" component={Register} />
        
      <Route exact path="/category" component={ProductCategory} />
        
      <Route exact path="/single" component={SingleProduct} />
    
      <Route exact path="/cart" component={Shopping} />
       
      <Route exact path="/checkout" component={Checkout} />
       
      <Route exact path="/confirmation" component={Confirmation} />
     
      <Route exact path="/contact" component={Contact} />
      

    </Switch>

  <Footer/>
</Router>

</>

  );
}

export default App;
