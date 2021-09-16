import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation';
import LandingPage from './LandingPage';
import Shop from './Shop';
import '../sass/App.scss';
import Login from './Login';
import UserProfile from './UserProfile';
import SignUp from './SignUp';
import UserOrders from './UserOrders';

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
    </div>
  );
}

export default App;
