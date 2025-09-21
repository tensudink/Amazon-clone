import { useContext } from 'react';
import classes from './Cart.module.css';
import LayOut from '../../Components/LayOut/LayOut';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import {Link} from 'react-router-dom'

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
const total= basket.reduce((amount, item)=>{
  return item.price * + item.amount
},0)
console.log(basket);
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>{user ? `, ${user.name}` : ''}</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {basket?.length === 0?(
            <p>Oops! No items in your cart.</p>
          ):(
            basket?.map((item, i) => {
              return <ProductCard
                key={i}
                product={item}
                renderDesc={true}
                renderAdd={false}
                flex={true}
              />
})
          )
          }
        </div>
        {basket?.length !==0 &&(
           <div className ={classes.subtotal}> 
<div>
  <p>Subtotal ({basket?.length} items)</p>
  <CurrencyFormat amount = {total}/>
</div>
<span>
  <input type= "checkbox" />
  <small>This order contains a gift</small>
</span>
<Link to="/payments">continue to checkout</Link>
        </div>

        )
      }
      </section>
    </LayOut>
  );
}

export default Cart;
