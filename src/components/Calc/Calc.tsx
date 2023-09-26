import ButtonBox from "../ButtonBox/ButtonBox";
import Screen from "../Screen/Screen";
import classes from "./Calc.module.css";

const Calc = () => {
  return (
    <div className={classes.calc}>
      <Screen />
      <ButtonBox />
    </div>
  );
};

export default Calc;
