import {HTMLAttributes, ReactNode } from "react";

export interface HeadlingProps extends HTMLAttributes<HTMLHeadingElement> { 
 children?: ReactNode;
 type?: "center"|"left"|"right";
}