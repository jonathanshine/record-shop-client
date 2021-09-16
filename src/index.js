import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { UserContextProvider } from './context/UserContext';

ReactDOM.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
  document.getElementById('root')
);

/* Replace api with record-store-api
ROUTES Sign-in/Signup/Orders page
React hook form for Sign-in/signup
SCSS
Orders page
...
*/