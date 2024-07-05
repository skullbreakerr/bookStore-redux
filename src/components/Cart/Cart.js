import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items);
  let totalAmount = 0;
  for(const index in cartItems){
    totalAmount = totalAmount+ cartItems[index].totalPrice;
  }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => {
          return (
            <CartItem
              key={index}
              item={item}
            />
          )
        })}
      </ul>
      <div>
        <p>Total Price : <span> $ {totalAmount.toFixed(2)}</span></p>
      </div>
    </Card>
  );
};

export default Cart;
