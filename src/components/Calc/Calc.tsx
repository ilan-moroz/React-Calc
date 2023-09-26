import { useState } from "react";
import ButtonBox from "../ButtonBox/ButtonBox";
import Screen from "../Screen/Screen";
import classes from "./Calc.module.css";

const Calc = () => {
  const [clickedValue, setClickedValue] = useState<string>("");

  return (
    <div className={classes.calc}>
      <Screen value={clickedValue} />
      <ButtonBox setClickedValue={setClickedValue} />
    </div>
  );
};

export default Calc;
