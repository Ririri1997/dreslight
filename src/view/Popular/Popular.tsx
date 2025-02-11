import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import Wrapper from "../../components/Wrapper/Wrapper";
import LinkButton  from "../../components/BaseButton/LinkButton";
import styles from "./Popular.module.css";
import cn from "classnames";
import Headling from "../../components/Headling/Headling";
import Card from "../../components/Card/Card";
import Text from "../../components/Text/Text";
import { fetchProducts } from "../../store/product.slice";


function Popular() {
 const dispatch = useDispatch<AppDispatch>();
 const { items: goods, loading } = useSelector((state: RootState) => state.product);

 useEffect(() => {
   dispatch(
    fetchProducts());
 }, [dispatch]);

 const placeholders = Array.from({ length: 9 }, (_, i) => (
  <div key={i} className={cn(styles['card-wrapper'], styles['placeholder'])}>
    <div className={styles['placeholder-square']} />
  </div>
));


 return (
  <section className={cn(styles["popular"])}>
   <Wrapper>
    <div className={cn(styles["popular-top"])}>
     <Headling>Popular</Headling>
     <Text type={"right"}
  className={cn(styles['text'])}> From romantic silhouettes to timeless classics, we’ve got everything to highlight your individuality</Text>
    </div>

    {loading ? (
     <div className={cn(styles["popular-wrapper"])} >{placeholders}</div>
    ) : goods.length > 0 ? (
     <div className={cn(styles["popular-wrapper"])}>
      {goods
       .filter((p) => p.id <= 8)
       .map((p) => (
        <div className={cn(styles["card-wrapper"])}  key={p.id}>
         <Card id={p.id} image={p.image?.[0]} name={p.name} price={p.price} key={p.id} stock={p.stock}/>
        </div>
       ))}
      <div className={cn(styles["card-wrapper"])}>
      <LinkButton to="/catalog">Shop the Collection</LinkButton >

      </div>
     </div>
    ) : (
     <Text type={"right"} >Ничего нет, но мы стараемся</Text>
    )}
   </Wrapper>
  </section>
 );
}
export default Popular;
