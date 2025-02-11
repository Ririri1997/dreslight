import TrashButtonProps from './TrashButton.props'
import cn from "classnames";
import styles from'./TrashButton.module.css';

const TrashButton = ({ onClick, className, disabled }: TrashButtonProps) => {
 return (
   <button onClick={onClick} className={cn(styles['button'], className, {
    [styles['disabled']] : disabled
   })}>
   </button>
 );
};

export default TrashButton;