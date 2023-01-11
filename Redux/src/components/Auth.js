import classes from './Auth.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';
import UserProfile from './UserProfile';

const Auth = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogin = e => {
    e.preventDefault();
    dispatch(authActions.login());
  };

  const LoginForm = () => {
    return (
      <main className={classes.auth}>
        <section>
          <form onSubmit={handleLogin}>
            <div className={classes.control}>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
              />
            </div>
            <div className={classes.control}>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
              />
            </div>
            <button>Login</button>
          </form>
        </section>
      </main>
    );
  };

  return <>{isAuth ? <UserProfile /> : <LoginForm />}</>;
};

export default Auth;
