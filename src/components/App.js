import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation';
import LandingPage from './LandingPage';
import Shop from './Shop';
import '../sass/App.scss';
import Login from './Login';
import UserProfile from './UserProfile';
import SignUp from './SignUp';
import UserOrders from './UserOrders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='app'>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route  exact path='/shop' component={Shop} />
          <Route  exact path='/login' component={Login} />
          <Route  exact path='/signup' component={SignUp} />
          <Route  exact path='/profile/:id' component={UserProfile} />
          <Route  exact path='/profile/:id/orders' component={UserOrders} />
        </Switch>
      </Router>
      <ToastContainer/> {/* this component allows us to use toasts throughout our app */}
    </div>
  );
}

export default App;
