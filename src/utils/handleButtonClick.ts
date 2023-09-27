import { Dispatch, SetStateAction } from "react";

type HandleButtonClickProps = {
  setCurrentValue: Dispatch<SetStateAction<string>>;
  currentValue: string;
  previousValue: string;
  setPreviousValue: Dispatch<SetStateAction<string>>;
  operation: string | null;
  setOperation: Dispatch<SetStateAction<string | null>>;
};

export const handleButtonClick =
  (props: HandleButtonClickProps) => (value: string) => {
    // When the RESET button is clicked, reset all states.
    if (value === "RESET") {
      return () => {
        props.setCurrentValue("");
        props.setPreviousValue("");
        props.setOperation(null);
      };
    }
    // When the DEL button is clicked, remove the last character from currentValue.
    else if (value === "DEL") {
      return () => {
        props.setCurrentValue((prev: string) => prev.slice(0, -1));
      };
    }
    // For arithmetic operators: +, -, x, /
    else if (["+", "-", "x", "/"].includes(value)) {
      return () => {
        // If there's an existing operation and a previous value
        if (props.previousValue && props.operation && props.currentValue) {
          const result = compute(props); // Compute the result of previous operation.
          props.setCurrentValue(result); // Set the result as the current value.
          props.setPreviousValue(result); // Also store the result as the previous value.
        } else if (!props.currentValue && props.operation) {
          // If currentValue is empty (meaning an operator was just entered),
          // and there's already an operation set, just replace the operation
          props.setOperation(value);
          return;
        } else {
          // If no existing operation, move the current value to previousValue for next operation.
          props.setPreviousValue(props.currentValue);
        }
        // Prepare for the next operand.
        props.setCurrentValue("");
        props.setOperation(value);
      };
    }

    // When equals button is clicked, perform the arithmetic operation.
    else if (value === "=") {
      return () => {
        if (!props.previousValue || !props.operation) return; // If no operation or previous value, do nothing.
        const result = compute(props); // Compute the result.
        props.setCurrentValue(result); // Display the result.
        props.setPreviousValue(""); // Clear the previous value.
        props.setOperation(null); // Clear the operation.
      };
    }
    // For other values (0-9, .), append them to the currentValue.
    else {
      return () => {
        if (value === ".") {
          if (!props.currentValue.includes(`.`))
            props.setCurrentValue(prev => prev + value);
        } else {
          props.setCurrentValue(prev => prev + value);
        }
      };
    }
  };

// Utility function to perform arithmetic operations based on the provided operation.
const compute = (props: HandleButtonClickProps): string => {
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
