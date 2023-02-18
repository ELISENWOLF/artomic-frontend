import './App.css';
import './responsive.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import SingleProduct from './Screens/SingleProduct';
import Login from './Screens/Login';
import Register from './Screens/Register';
import ProfileScreen from './Screens/ProfileScreen';
import CartScreen from './Screens/CartScreen';
import ShippingScreen from './Screens/ShippingScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlacedOrderScreen from './Screens/PlacedOrderScreen';
import OrderScreen from './Screens/OrderScreen';
import NotFound from './Screens/NotFound';


function App() {
  return (
   <Router>
    <Switch>
      <Route path='/' component={HomeScreen} />
      <Route path= '/products/:id' component={SingleProduct} />   
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/profile' component={ProfileScreen} />
      <Route path='/cart/:id?' component={CartScreen} />
      <Route path='/shipping' component={ShippingScreen} />
      <Route path='/payment' component={PaymentScreen} />
      <Route path='/placeorder' component={PlacedOrderScreen} />
      <Route path='/order' component={OrderScreen} />
      <Route path='*' component={NotFound} />
    </Switch>
   </Router>
  );
}

export default App;

// Time: 19:32