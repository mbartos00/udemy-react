import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/uiSlice';
import classes from './CartButton.module.css';

const CartButton = () => {
  const quantity = useSelector(state => state.cart.quantity);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button
      className={classes.button}
      onClick={handleClick}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
