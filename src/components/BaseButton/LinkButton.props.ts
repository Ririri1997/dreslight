import { LinkProps } from 'react-router-dom';

export interface LinsButtonProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}
