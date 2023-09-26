import { ReactNode } from "react";
import classes from "./Button.module.css";

interface buttonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className, onClick }: buttonProps) => {
  return (
    <button className={`${classes.btn} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
