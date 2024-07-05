import { cartSliceAction } from '../../store';
import classes from './CartItem.module.css';
import {useDispatch} from 'react-redux';

const CartItem = (props) => {
  const {id,name:title,price,quantity,totalPrice:total } = props.item;
  const dispatchFunction = useDispatch();

  function handleAddToCart(){
    dispatchFunction(cartSliceAction.addToCart({id,title,price,quantity}));
  }

  function handleRemoveFromCart(){
    dispatchFunction(cartSliceAction.removeFromCart({id,title,price,quantity}));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemoveFromCart}>-</button>
          <button onClick={handleAddToCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
