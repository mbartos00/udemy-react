import { cartActions } from './cartSlice';
import { uiActions } from './uiSlice';

const base_url =
  'https://foodorderapp-12333-default-rtdb.europe-west1.firebasedatabase.app/';

export const sendCartData = cart => {
  return async dispatch => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending data',
      })
    );

    const sendReq = async () => {
      const response = await fetch(`${base_url}/cart.json`, {
        method: 'PUT',
        body: JSON.stringify({
          items: cart.items,
          quantity: cart.quantity,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Error');
      }
    };

    try {
      await sendReq();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success',
          message: 'Sent succesfuly',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'Error',
          title: 'Error',
          message: 'Sending data failed',
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${base_url}/cart.json`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error('could not fetch data');
      }
      dispatch(
        cartActions.replaceCart({
          items: data.items || [],
          quantity: data.quantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'Error',
          title: 'Error',
          message: 'Sending data failed',
        })
      );
    }
  };
};
