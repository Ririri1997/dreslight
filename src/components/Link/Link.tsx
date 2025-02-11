import styles from'./Link.module.css';
import { LinksProps } from "./Link.props";
import cn from "classnames";
import {  Link as RouterLink } from 'react-router-dom';

function Link({children, className, ...props}: LinksProps){
 return (
  <RouterLink className={cn(styles['link'], className)} {...props}>{children}</RouterLink>
 )
};
export default Link;
