import { SortProps } from "./Sort.props";
import styles from "./Sort.module.css";
import cn from "classnames";

function Sort({ value, onChange }: SortProps) {
 const isLowest = value === "lowest";

 return (
  <button
   className={cn(styles["sort-button"])}
   onClick={() => onChange(isLowest ? "highest" : "lowest")}
  >
   {isLowest ? "Lowest Price ↓" : "Highest Price ↑"}
  </button>
 );
}

export default Sort;
