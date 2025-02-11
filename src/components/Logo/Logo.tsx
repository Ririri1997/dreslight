import { Link } from 'react-router-dom';
import styles from'./Logo.module.css';
import cn from "classnames";


function Logo(){
 return (
  <Link to="/">
    <div className={cn(styles['logo-wrapper'])}>
     <span className={cn(styles['logo'])}>dreslight</span>
     <span className={cn(styles['motto'])}>your shop area</span>
    </div>
   </Link>
 )
};
export default Logo;

