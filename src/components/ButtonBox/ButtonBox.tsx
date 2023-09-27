import Button from "../Button/Button";
import buttons from "./buttonConfig";
import classes from "./ButtonBox.module.css";
import { handleButtonClick } from "../../utils/handleButtonClick";
import { calcProps } from "../../types/calcProps";

const ButtonBox = (props: calcProps) => {
  const handleClick = handleButtonClick(props);

  const buttonsGrid = buttons.map(button => {
    const disabled =
      typeof button.value === "number" && props.currentValue.length > 8;

    return (
      <Button
        onClick={handleClick(button.value.toString())}
        key={button.value}
        className={button.className}
        disabled={disabled}
      >
        {button.value}
      </Button>
    );
  });

  return <div className={classes.btnBox}>{buttonsGrid}</div>;
};

export default ButtonBox;
