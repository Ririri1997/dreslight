import styles from "./CartDrawer.module.css";
import cn from "classnames";
import CartDrawerProps from "./CartDrawer.props";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import CartQuantityControl from "../../components/CartQuantityControl/CartQuantityControl";
import TrashButton from "../../components/TrashButton/TrashButton";
import Text from "../../components/Text/Text";
import { cartActions } from "../../store/cart.slice";
import { AppDispatch } from "../../store/store";
import { useEffect } from "react";

function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
 const cartItems = useSelector((state: RootState) => state.cart.items);
 const productItems = useSelector((state: RootState) => state.product.items);
 const dispatch = useDispatch<AppDispatch>();

 useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return () => {
    document.body.style.overflow = "auto";
  };
}, [isOpen]);


 return (
  <>
   {isOpen && <div className={styles["overlay"]} onClick={onClose} ></div>}
   <div className={cn(styles["drawer"], { [styles["open"]]: isOpen })}>
    <div className={styles["content"]}>
     {cartItems.length === 0 ? (
      <span className={cn(styles["title"])}>Корзина пуста</span>
     ) : (
      <>
       <div className={cn(styles["cart-top"])}>
        <span className={cn(styles["title"])}>My cart</span>
        <span className={cn(styles["amound"])}>$
         {
         cartItems.reduce((total, cartItem) => {
          const product = productItems.find((p) => p.id === cartItem.id);
          if (product) {
           return total + product.price * cartItem.count; 
         }
         return total;
         }, 0)
         }
         </span>
       </div>

       {cartItems.map((cartItem) => {
        const product = productItems.find((p) => p.id === cartItem.id);
        if (product) {
         return (
          <div className={cn(styles["item"])} key={product.id}>
           <img
            alt={product.name}
            src={product.image[0]}
            className={cn(styles["image"])}
           />
           <div className={cn(styles["item-info"])}>
            <Text type="left" className={cn(styles["item-name"])}>
             {product.name}
            </Text>
            <p className={cn(styles["item-price"])}>${product.price}</p>
            <div className={cn(styles["item-control"])}>
             <CartQuantityControl quantity={cartItem.count} id={cartItem.id} stock={product.stock} />
             <TrashButton
              onClick={() =>
               dispatch(cartActions.deleteCart({ id: cartItem.id }))
              }
             />
            </div>
           </div>
          </div>
         );
        }
       })}
      </>
     )}
     <button className={styles.closeButton} onClick={onClose}>
      &times;
     </button>
    </div>
   </div>
  </>
 );
}

export default CartDrawer;
