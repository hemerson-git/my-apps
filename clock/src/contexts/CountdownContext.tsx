import { createContext, ReactNode, useState, useContext } from "react";

interface CountdownContextData {
  MINUTE: number;
  SECONDS: number;
}

interface CountdownProps {
  children: ReactNode;
}

const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProps) {
  const [time, setTime] = useState(25 * 60); // 25 minutes

  const MINUTE = Math.floor(time / 60);
  const SECONDS = time % 60;

  return (
    <CountdownContext.Provider value={{ MINUTE, SECONDS }}>
      <>{children}</>
    </CountdownContext.Provider>
  );
}

export const useCountdown = () => {
  return useContext(CountdownContext);
};
