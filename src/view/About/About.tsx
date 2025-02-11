import { useEffect } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from "./About.module.css";
import cn from "classnames";
import Headling from "../../components/Headling/Headling";
import Card from "../../components/Card/Card";
import { fetchProducts } from "../../store/product.slice";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import Text from "../../components/Text/Text";

function About() {

 const dispatch = useDispatch<AppDispatch>();
 const { items: goods, loading } = useSelector((state: RootState) => state.product);

 useEffect(() => {
   dispatch(
    fetchProducts());
 }, [dispatch]);


 const placeholders = Array.from({ length: 4 }, (_, i) => (
  <div key={i} className={cn(styles["card"], styles["placeholder"])}>
   <div className={styles["placeholder-square"]} />
  </div>
 ));

 return (
  <section className={cn(styles["about"])}>
   <Wrapper>
    <div className={cn(styles["about-top"])}>
     <Headling className={cn(styles["title"])}>
      <span>Find</span> the Dress of Your <span>Dreams</span>
     </Headling>
     <img src="/star.svg" alt="star" />
    </div>
    {loading ? (
     <div className={cn(styles["about-wrapper"])}>{placeholders}</div>
    ) : goods.length > 0 ? (
     <div className={cn(styles["about-wrapper"])}>
      <div className={cn(styles["card"])}>
       <Text type={"left"}>
        Perfect dresses for every day, the office, dates, or special events and
        other.
        <br />
        <br />
        From romantic silhouettes to timeless classics, we’ve got everything to
        highlight your individuality.
        <br />
        <br />
        Perfect dresses for every day, the office, dates, or events.
       </Text>
      </div>
      {goods
       .filter((p) => p.id <= 4)
       .map((p) => (
         <Card
          id={p.id}
          image={p.image?.[0]}
          name={p.name}
          price={p.price}
          stock={p.stock}
          key={p.id}
          className={cn(styles["card"])}
         />
       ))}
      <div className={cn(styles["card"])}>
       <Text type={"right"} className={cn(styles["text-right"])}>
        Perfect dresses for every day, the office, dates, or special events and
        other.
        <br />
        <br />
        From romantic silhouettes to timeless classics, we’ve got everything to
        highlight your individuality.
        <br />
        <br />
        Perfect dresses for every day, the office, dates, or events.
       
       </Text>
      </div>
     </div>
    ) : (
     <Text>Товаров нет. Или кто-то забыл запустить Дазу Баных</Text>
    )}
    <div className={cn(styles["card"])}></div>
   </Wrapper>
  </section>
 );
}
export default About;
