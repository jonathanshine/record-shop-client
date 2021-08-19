import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

import '../sass/App.scss';

function App() {
  const { records } = useContext(UserContext);
  console.log('APPJS', records);
  
  return <div className='App'>RECORD SHOP</div>;
}

export default App;
