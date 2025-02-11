import styles from'./Text.module.css';
import { TextProps } from "./Text.props";
import cn from "classnames";

function Text({children, className, type="center", ...props}: TextProps){
 return (
  <p className={cn(styles['text'], className, {
   [styles['center']] : type ==='center', 
   [styles['left']] : type ==='left', 
   [styles['right']] : type==='right'
  })} {...props}>{children}</p>
 )
};
export default Text;
