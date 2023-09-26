import { ReactNode } from "react";
import classes from "./Button.module.css";

interface buttonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  disabled: boolean;
}

const Button = ({ children, className, onClick, disabled }: buttonProps) => {
  return (
    <button
      className={`${classes.btn} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
