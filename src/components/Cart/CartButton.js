import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiSliceAction } from '../../store';

const CartButton = (props) => {
  const dispatchFunction = useDispatch();
  const items = useSelector(state => state.cart.items);
  function handleClick() {
    dispatchFunction(uiSliceAction.toggleCart());
  }
  return (
    <button onClick={handleClick} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{items.length}</span>
    </button>
  );
};

export default CartButton;
