import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import classes from './CartItem.module.css';

const CartItem = ({ id, name, quantity, totalPrice, price }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(cartActions.addToCart({ name, id, price }));
  };
  const handleRemoveItem = () => {
    dispatch(cartActions.removeFromCart({ id }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemoveItem}>-</button>
          <button onClick={handleAddItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
