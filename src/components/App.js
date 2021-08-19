import { useContext } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Navigation from './Navigation';
import LandingPage from './LandingPage';
import Shop from './Shop';
import '../sass/App.scss';

function App() {
  const { records } = useContext(UserContext);
  console.log('APPJS', records);

  return (
    <div className='App'>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route  exact path='/shop' component={Shop} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
