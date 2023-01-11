import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/authSlice';
import classes from './Header.module.css';

const Header = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const Nav = () => {
    const handleLogout = () => {
      dispatch(authActions.logout());
    };

    return (
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth ? <Nav /> : null}
    </header>
  );
};

export default Header;
