import {LinkProps} from "react-router-dom";
import { ReactNode } from "react";

export interface LinksProps extends LinkProps { 
 children?: ReactNode;
}