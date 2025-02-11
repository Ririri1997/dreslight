import styles from "./Headling.module.css";
import { HeadlingProps } from "./Headling.props";
import cn from "classnames";

function Headling({
 children,
 className,
 type = "left",
 ...props
}: HeadlingProps) {
 return (
  <h2
   className={cn(styles["link"], className, {
    [styles["left"]]: type === "left",
    [styles["center"]]: type === "center",
    [styles["right"]]: type === "right",
   })}
   {...props}
  >
   {children}
  </h2>
 );
}
export default Headling;
