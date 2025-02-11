import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import cn from "classnames";
import style from "./Product.module.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import Headling from "../../components/Headling/Headling";
import BaseButton from "../../components/BaseButton/BaseButton";
import { useDispatch, useSelector } from "react-redux";
import {AppDispatch, RootState} from "../../store/store"
import { cartActions } from "../../store/cart.slice";
import CartQuantityControl from "../../components/CartQuantityControl/CartQuantityControl";

export function Product() {
 const { id } = useParams();
 const location = useLocation();
 const [product, setProduct] = useState(location.state || null);
 const dispatch = useDispatch<AppDispatch>();
 const cartItems = useSelector((state: RootState) => state.cart.items);


 useEffect(() => {
  if (!product) {
   fetchProduct(); // Загружаем данные, если их нет
  }
 }, [product]);
 
 
 const existingItem  = cartItems.find((i)=> i?.id === product?.id);


 const fetchProduct = async () => {
  try {
   const res = await fetch(`http://localhost:5000/products/${id}`);
   if (res.ok) {
    const data = await res.json();
    setProduct(data);
   }
  } catch (error) {
   console.error("Ошибка загрузки данных:", error);
  }
 };

 if (!product) {
  return <p>Загрузка...</p>;
 }
 const images: string[] = Array.isArray(product.image)
  ? product.image
  : [product.image];

 return (
  <div className={cn(style["product"])}>
   <Wrapper>
    <div className={cn(style["product-wrapper"])}>
     <div className={cn(style["product-images"])}>
      {Array.isArray(images) &&
       images
        .filter((_, index) => index < 5)
        .map((p: string, index: number) => (
         <img key={index} src={p} alt={product.name} />
        ))}
     </div>
     <div className={cn(style["product-info"])}>
      <Headling className={cn(style["title"])}>{product.name}</Headling>
      <p className={cn(style["price"])}>${product.price}</p>
      <p className={cn(style["description"])}>{product.description}</p>
     {cartItems.find( (i)=> i.id === product.id) ? 
     <div>
      <CartQuantityControl id={product?.id} stock={product?.stock} quantity={existingItem?.count}/>
     </div>
     : <BaseButton onClick={()=>dispatch(cartActions.addToCart({id: product.id, stock: product.stock}))} className={cn(style["add"])}>Shop now</BaseButton>}  
      
     </div>
    </div>
   </Wrapper>
  </div>
 );
}
