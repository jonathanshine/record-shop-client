import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation';
import LandingPage from './LandingPage';
import Shop from './Shop';
import '../sass/App.scss';

function App() {
  return (
    <div className='app'>
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
