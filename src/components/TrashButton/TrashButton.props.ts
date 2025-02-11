import { ButtonHTMLAttributes } from "react";

export default interface TrashButtonProps extends  ButtonHTMLAttributes<HTMLButtonElement>{
 onClick?: () => void;
 disabled?: boolean;
}