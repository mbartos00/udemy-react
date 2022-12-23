import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../store/authContext';
import emailReducer, {
  INITIAL_EMAIL_STATE,
} from '../Reducers/emailReducer';
import passwordReducer, {
  INITIAL_PASSWORD_STATE,
} from '../Reducers/passwordReducer';
import Input from '../UI/Input/Input';

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(
    emailReducer,
    INITIAL_EMAIL_STATE
  );
  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    INITIAL_PASSWORD_STATE
  );

  const authContext = useContext(AuthContext);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const passwordInputRef = useRef();
  const emailInputRef = useRef();

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearInterval(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = event => {
    dispatchEmail({
      type: 'USER_INPUT_EMAIL',
      val: event.target.value,
    });
  };

  const passwordChangeHandler = event => {
    dispatchPassword({
      type: 'USER_INPUT_PASSWORD',
      val: event.target.value,
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR_EMAIL' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR_PASSWORD' });
  };

  const submitHandler = event => {
    event.preventDefault();
    if (formIsValid) {
      authContext.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          state={emailState}
          labelContent={'E-mail'}
          type={'text'}
          id={'email'}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          state={passwordState}
          labelContent={'Password'}
          type={'password'}
          id={'password'}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button
            type='submit'
            className={classes.btn}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
