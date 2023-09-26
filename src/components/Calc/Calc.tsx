import { useState } from "react";
import ButtonBox from "../ButtonBox/ButtonBox";
import Screen from "../Screen/Screen";
import classes from "./Calc.module.css";

const Calc = () => {
  const [clickedValue, setClickedValue] = useState<string>("");
  console.log("🚀 ~ file: Calc.tsx:8 ~ Calc ~ clickedValue:", clickedValue);

  return (
    <div className={classes.calc}>
      <Screen />
      <ButtonBox setClickedValue={setClickedValue} />
    </div>
  );
};

export default Calc;
