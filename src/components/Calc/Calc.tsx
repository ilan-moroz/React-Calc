import { useState } from "react";
import ButtonBox from "../ButtonBox/ButtonBox";
import Screen from "../Screen/Screen";
import classes from "./Calc.module.css";

const Calc = () => {
  const [currentValue, setCurrentValue] = useState<string>("");
  const [previousValue, setPreviousValue] = useState<string>("");
  const [operation, setOperation] = useState<string | null>(null);

  return (
    <div className={classes.calc}>
      <Screen value={currentValue} />
      <ButtonBox
        setCurrentValue={setCurrentValue}
        currentValue={currentValue}
        previousValue={previousValue}
        setPreviousValue={setPreviousValue}
        operation={operation}
        setOperation={setOperation}
      />
    </div>
  );
};

export default Calc;
