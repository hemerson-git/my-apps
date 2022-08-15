import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";
import { getConvertedTimeToSeconds } from "../utils/parseTimeToString";

interface CountdownContextData {
  MINUTE: string;
  SECONDS: string;
  time: number;
  isActive: boolean;
  setTime: (time: number) => void;
  startCountdown: () => void;
  handleStopCountdown: () => void;
  handleResetTimer: () => void;
}

interface CountdownProps {
  children: ReactNode;
}

const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProps) {
  const [time, setTime] = useState(25 * 60); // 25 minutes
  const [hasFinished, setHasFinished] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { minutes, seconds } = getConvertedTimeToSeconds(time);

  const MINUTE = minutes;
  const SECONDS = seconds;

  function startCountdown() {
    setIsActive(true);
  }

  function handleStopCountdown() {
    setIsActive(false);
  }

  function handleResetTimer() {
    setTime(25 * 60);
    setHasFinished(false);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        MINUTE,
        SECONDS,
        time,
        setTime,
        startCountdown,
        handleStopCountdown,
        isActive,
        handleResetTimer,
      }}
    >
      <>{children}</>
    </CountdownContext.Provider>
  );
}

export const useCountdown = () => {
  return useContext(CountdownContext);
};
