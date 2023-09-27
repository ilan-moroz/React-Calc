import { Dispatch, SetStateAction } from "react";

export type calcProps = {
  setCurrentValue: Dispatch<SetStateAction<string>>;
  currentValue: string;
  previousValue: string;
  setPreviousValue: Dispatch<SetStateAction<string>>;
  operation: string | null;
  setOperation: Dispatch<SetStateAction<string | null>>;
};
