import { useRef } from "react";
import styles from "./Search.module.css";
import cn from "classnames";
import { useDispatch } from "react-redux";
import {AppDispatch} from "../../store/store"
import { productActions } from "../../store/product.slice";


function Search() {

 const dispatch = useDispatch<AppDispatch>();
 const inputRef = useRef<HTMLInputElement | null>(null);

 const searchButton = (e: React.MouseEvent<HTMLDivElement>) => {
  inputRef?.current?.focus();
};

const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
 dispatch(productActions.setSearchQuery(event.target.value));
};

 return (
  <div onClick={(e)=>searchButton(e)} className={cn(styles["search"])}>
   <input onChange={(e) => handleSearchChange(e)} ref={inputRef} placeholder="Search" type="searh" className={cn(styles["search-input"])}/>
  </div>
 );
}
export default Search;
