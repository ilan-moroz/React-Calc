import classes from "./Screen.module.css";

interface screenProps {
  value: string;
}

const Screen = ({ value }: screenProps) => {
  return <div className={classes.screen}>{value}</div>;
};

export default Screen;
