import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='logo'>
        <h5>RECORD SHOP</h5>
      </div>

      <div className='menu'>
        <NavLink to='/' activeClassName='selected'>
          Home
        </NavLink>
        <NavLink to='/shop'>Shop</NavLink>
      </div>
    </div>
  );
};

export default Navigation;