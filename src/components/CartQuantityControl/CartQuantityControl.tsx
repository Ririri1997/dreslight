import styles from "./CartQuantityControl.module.css";
import cn from "classnames";
import { CartQuantityControlProps } from "./CartQuantityControl.props";
import BaseButton from "../BaseButton/BaseButton";
import { AppDispatch } from "../../store/store";
import { cartActions } from "../../store/cart.slice";
import { useDispatch } from "react-redux";

function CartQuantityControl({
  quantity,
  id,
  stock,
}: CartQuantityControlProps) {

  const dispatch = useDispatch<AppDispatch>();

  let isAvailable;
  // Проверяем доступность на основе `stock`
  if(quantity ){
   isAvailable = stock > quantity;
 }

  return (
    <div className={cn(styles["quantity-control"])}>
      <BaseButton onClick={() => dispatch(cartActions.removeFromCart({ id }))} >
        -
      </BaseButton>
      <div className={cn(styles["quantity-number"])}>{quantity}</div>
      <BaseButton
        disabled={!isAvailable} 
        onClick={() => dispatch(cartActions.addToCart({ id, stock }))}
      >
        +
      </BaseButton>
    </div>
  );
}

export default CartQuantityControl;
