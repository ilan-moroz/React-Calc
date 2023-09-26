import { Dispatch, SetStateAction } from "react";

type HandleButtonClickProps = {
  setClickedValue: Dispatch<SetStateAction<string>>;
};

export const handleButtonClick =
  ({ setClickedValue }: HandleButtonClickProps) =>
  (value: string) => {
    if (value === "RESET") {
      return () => {
        setClickedValue("");
      };
    } else if (value === "DEL") {
      return () => {
        setClickedValue((prev: string) => prev.slice(0, -1));
      };
    } else {
      return () => {
        setClickedValue((prev: string) => prev + value);
      };
    }
  };
