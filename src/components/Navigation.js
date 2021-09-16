import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Navigation = () => {
  const { user } = useContext( UserContext );

  return (
    <div className='navigation'>
      <div className='logo'>
        <h5>RECORD SHOP</h5>
      </div>

      <div className='menu'>
        <NavLink exact to='/' activeClassName='active'>
          Home 
        </NavLink>
        <NavLink exact to='/shop' activeClassName='active'>Shop</NavLink>
        
        {/* conditional rendering of either login/signup links, or if user state is true, show the user profile and order links */}
        {!user ? (
        <>
          <NavLink exact to='/login' activeClassName='active'>Login</NavLink>
          <NavLink exact to='/signup' activeClassName='active'>Signup</NavLink>
        </>
        ) : (
          <>
            <NavLink exact to='/profile/:id' activeClassName='active'>{user.firstName}</NavLink>
            <NavLink exact to='/profile/:id/orders' activeClassName='active'>Orders</NavLink>
          </>
        )}
        
      </div>
    </div>
  );
};

export default Navigation;