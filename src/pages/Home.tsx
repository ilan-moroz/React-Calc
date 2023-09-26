import Calc from "../components/Calc/Calc";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.homepage}>
      <h1>React Calculator</h1>
      <Calc />
    </div>
  );
};

export default Home;
