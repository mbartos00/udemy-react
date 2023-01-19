import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map(({ id, name, quantity, totalPrice, price }) => (
          <CartItem
            key={id}
            id={id}
            name={name}
            quantity={quantity}
            totalPrice={totalPrice}
            price={price}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
