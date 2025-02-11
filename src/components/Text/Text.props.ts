import {HTMLAttributes, ReactNode } from "react";

export interface TextProps extends HTMLAttributes<HTMLElement> { 
 children?: ReactNode;
 type?: "left" | "right" | "center";
 className?: string;
}