import { ReactNode } from "react";
import classes from "./Button.module.css";

interface buttonProps {
  //   onClick: () => void;
  children: ReactNode;
  className?: string;
}
// onClick={onClick}

const Button = ({ children, className }: buttonProps) => {
  return <button className={`${classes.btn} ${className}`}>{children}</button>;
};

export default Button;
