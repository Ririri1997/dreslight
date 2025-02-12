import BaseButton from "../BaseButton/BaseButton";
import LinkButton from "../BaseButton/LinkButton";
import styles from "./Card.module.css";
import { CardProps } from "./Card.props";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { cartActions } from "../../store/cart.slice";

function Card(props: CardProps) {
 const dispatch = useDispatch<AppDispatch>();

 return (
  <div className={cn(styles["card-frame"])}>
   <div className={cn(styles["card"])}>
    <img src={props.image} alt={props.image} className={cn(styles["image"])} />
    <div className={cn(styles["card-info"])}>
     <span className={cn(styles["name"])}>{props.name}</span>
     <span className={cn(styles["price"])}>${props.price}</span>
    </div>
   </div>
   <div className={cn(styles["button-wrapper"])}>
    <LinkButton to={`/product/${props.id}`} className={"button-hidden"}>
     Read more
    </LinkButton>
    <BaseButton
     className={"button-hidden"}
     onClick={() =>
      dispatch(cartActions.addToCart({ id: props.id, stock: props.stock }))
     }
    >
     Add to cart
    </BaseButton>
   </div>
  </div>
 );
}
export default Card;
