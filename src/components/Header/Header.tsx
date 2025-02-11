import Link  from '../Link/Link';
import Logo from '../Logo/Logo';
import Wrapper from '../Wrapper/Wrapper';
import styles from'./Header.module.css';
import cn from "classnames";
import CartDrawer from '../../view/CartDrawer/CartDrawer';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';
import { RootState } from '../../store/store';

function Header(){
 const dispatch = useDispatch<AppDispatch>();
 const {isOpen, items} = useSelector((state: RootState)=> state.cart)

 const cartQuantity = items.reduce((acc, item)=> acc + item.count,0)



 return (
  <header className={styles['header']}>
   <Wrapper>
    <div  className={cn(styles["header-wrapper"])}>
     <div className={cn(styles['left'])}>
      <Link to="#">Popular</Link>
      <Link to="#">Find the dress</Link>
       <Link to="/catalog">Catalog</Link>
     </div>
     <Logo/>

     <div className={cn(styles['right'])}>
      <Link className={cn(styles['cart'])} to="#" onClick={() => dispatch(cartActions.toggleCart())}>Cart 
      <span className={cn(styles['cart-count'])}>{cartQuantity}</span>
      </Link>
      <Link to="#">Sign In</Link>
      <CartDrawer isOpen={isOpen} onClose={() => dispatch(cartActions.toggleCart())}/>

     </div>
    </div>
   </Wrapper>
  </header>
 )
};
export default Header;

