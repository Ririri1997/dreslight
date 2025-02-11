import { Link } from 'react-router-dom';
import styles from'./BaseButton.module.css';
import { LinsButtonProps } from "./LinkButton.props";
import cn from "classnames";


function LinksProps ({ children, className, ...props }: LinsButtonProps) {
 return (
   <Link className={cn(styles['button'], className)} {...props}>
     {children}
   </Link>
 );
}

export default LinksProps;