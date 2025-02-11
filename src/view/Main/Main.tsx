import Wrapper from '../../components/Wrapper/Wrapper';
import LinkButton from '../../components/BaseButton/LinkButton';
import styles from'./Main.module.css';
import cn from "classnames";
import Text from '../../components/Text/Text';

function Main(){


 return (
  <section className={cn(styles['main'])}>
   <Wrapper>
    <h1 className={cn(styles['title'])}>Dresses That Steal the&nbsp;Spotlight</h1>

    <div className={cn(styles['main-bottom'])}>
     <LinkButton to="/catalog">Shop the Collection</LinkButton >
     <Text type={"right"} 
  className={cn(styles['text'])}>Discover a collection of elegant, trendy, and versatile dresses for every occasion. Beauty, comfort, and style—crafted just for you.</Text>
    </div>
   </Wrapper>
  </section>
 )
};
export default Main;

