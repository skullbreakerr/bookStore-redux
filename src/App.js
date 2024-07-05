import { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification'; 
import { useDispatch, useSelector } from 'react-redux';
import { uiSliceAction } from './store';

function App() {
  const isToggle = useSelector(state => state.ui.isVisible);
  const notification = useSelector(state => state.ui.notification); 
  const dispatchFunction = useDispatch();
  const cart = useSelector(state => state.cart.items);
  useEffect(() => {
    async function sendCartData() {

      dispatchFunction(uiSliceAction.showNotification({
        status: "pending",
        title: "SendCartData",
        message: " Going to Send Cart Data...."
      }))
      const responseData = await fetch('https://fir-tutorial-71007-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      })

      if (!responseData.ok) {
        throw new Error("Sending Cart Data Failed!!")
      }

      dispatchFunction(uiSliceAction.showNotification({
        status: "success",
        title: "Cart Data sent",
        message: "Successfully CartData sended"
      }))

    }

    sendCartData().catch(
      dispatchFunction(uiSliceAction.showNotification({
        status: "failed",
        title: "Data sending Failed",
        message: "Error in sending the Cart Data..."
      }))
    )
  }, [cart, dispatchFunction]);

  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {isToggle && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
