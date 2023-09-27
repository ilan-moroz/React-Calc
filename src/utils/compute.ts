import { calcProps } from "../types/calcProps";

// Utility function to perform arithmetic operations based on the provided operation.
export const compute = (props: calcProps): string => {
  let result: number;
  switch (props.operation) {
    case "+":
      result = parseFloat(props.previousValue) + parseFloat(props.currentValue);
      break;
    case "-":
      result = parseFloat(props.previousValue) - parseFloat(props.currentValue);
      break;
    case "x":
      result = parseFloat(props.previousValue) * parseFloat(props.currentValue);
      break;
    case "/":
      result = parseFloat(props.previousValue) / parseFloat(props.currentValue);
      break;
    default:
      throw new Error("Invalid operation"); // For unexpected operations.
  }
  return result.toString();
};
