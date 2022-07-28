import { useContext, createContext, ReactNode, useState } from "react";

interface CalcContextProps {
  expression: string;
  result: string;
  handleSetExpression: (value: string) => void;
  handleSetResult: (value: string) => void;
  removeLastExpression: () => void;
}

interface CalcProviderProps {
  children: ReactNode;
}

export const CalcContext = createContext({} as CalcContextProps);

export function useCalcProvider() {
  return useContext(CalcContext);
}

function CalcProvider({ children }: CalcProviderProps) {
  const [expression, setExpression] = useState("0");
  const [result, setResult] = useState("");

  function handleSetExpression(value: string) {
    setExpression(value);
  }

  function handleSetResult(value: string) {
    setResult(value);
  }

  function removeLastExpression() {
    setExpression(expression.slice(0, -1));
  }

  return (
    <CalcContext.Provider
      value={{
        expression,
        handleSetExpression,
        result,
        handleSetResult,
        removeLastExpression,
      }}
    >
      {children}
    </CalcContext.Provider>
  );
}

export default CalcProvider;
