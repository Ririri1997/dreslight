import Wrapper from "../../components/Wrapper/Wrapper";
import LinkButton from "../../components/BaseButton/LinkButton";
import styles from "./Footer.module.css";
import cn from "classnames";
import Headling from "../../components/Headling/Headling";

function Footer() {
 return (
  <footer className={cn(styles["footer"])}>
   <div className={cn(styles["bg"])}></div>
   <Wrapper>
    <div className={cn(styles["footer-wrapper"])}>
     <Headling type="center" className={cn(styles["title"])}>
      <span>Find</span> the Dress of Your <span>Dreams</span>
     </Headling>
     <LinkButton to="#">Contact Us</LinkButton>
    </div>
   </Wrapper>
  </footer>
 );
}
export default Footer;
