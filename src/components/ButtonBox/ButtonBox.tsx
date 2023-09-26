import Button from "../Button/Button";
import classes from "./ButtonBox.module.css";
import { SetStateAction } from "react";

const buttons = [
  { value: "7" },
  { value: "8" },
  { value: "9" },
  { value: "DEL", className: classes["btn-del-reset"] },
  { value: "4" },
  { value: "5" },
  { value: "6" },
  { value: "+" },
  { value: "1" },
  { value: "2" },
  { value: "3" },
  { value: "-" },
  { value: "." },
  { value: "0" },
  { value: "/" },
  { value: "x" },
  {
    value: "RESET",
    className: `${classes["span-2"]} ${classes["btn-del-reset"]}`,
  },
  { value: "=", className: `${classes["span-2"]} ${classes["btn-equals"]}` },
];

type ButtonBoxProps = {
  setClickedValue: React.Dispatch<SetStateAction<string>>;
};

const ButtonBox = (props: ButtonBoxProps) => {
  const handleClick = (value: string) => {
    if (value === "RESET") {
      return () => {
        props.setClickedValue("");
      };
    } else {
      return () => {
        props.setClickedValue((prev: string) => prev + value);
      };
    }
  };

  const buttonsGrid = buttons.map(button => (
    <Button
      onClick={handleClick(button.value)}
      key={button.value}
      className={button.className}
    >
      {button.value}
    </Button>
  ));

  return <div className={classes.btnBox}>{buttonsGrid}</div>;
};

export default ButtonBox;
