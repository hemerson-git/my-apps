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
  HOURS: string;
  time: number;
  isActive: boolean;
  setTime: (time: number) => void;
  startCountdown: () => void;
  handleStopCountdown: () => void;
  handleResetTimer: () => void;
}

interface CountdownProps {
  children: ReactNode;
  timeInSeconds: number;
}

const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children, timeInSeconds }: CountdownProps) {
  const [time, setTime] = useState(timeInSeconds ?? 0); // 25 minutes
  const [hasFinished, setHasFinished] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { hours, minutes, seconds } = getConvertedTimeToSeconds(time);

  const MINUTE = minutes;
  const SECONDS = seconds;
  const HOURS = hours;

  function startCountdown() {
    setIsActive(true);
  }

  function handleStopCountdown() {
    setIsActive(false);
  }

  function handleResetTimer() {
    setTime(timeInSeconds);
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
        HOURS,
        time,
        setTime,
        startCountdown,
        handleStopCountdown,
        isActive,
        handleResetTimer,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}

export const useCountdown = () => {
  return useContext(CountdownContext);
};
