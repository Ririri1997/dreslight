import BaseButtonProps from './BaseButton.props'
import cn from "classnames";
import styles from'./BaseButton.module.css';

const BaseButton = ({ onClick, className, children, disabled }: BaseButtonProps) => {
 return (
   <button onClick={onClick} className={cn(styles['button'], className, {
    [styles['disabled']] : disabled
   })}>
     {children}
   </button>
 );
};

export default BaseButton;