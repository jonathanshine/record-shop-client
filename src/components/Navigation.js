import { NavLink } from 'react-router-dom';

const Navigation = () => {
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
      </div>
    </div>
  );
};

export default Navigation;