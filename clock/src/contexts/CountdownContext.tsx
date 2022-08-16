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
  handleSetCountdown: (time: number, interval?: number) => void;
  handleStopCountdown: () => void;
  handleResetTimer: () => void;
  hasFinished: boolean;
}

interface CountdownProps {
  children: ReactNode;
  timeInSeconds: number;
}

const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProps) {
  const [time, setTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [hasFinished, setHasFinished] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [userInterval, setUserInterval] = useState(0);

  const { hours, minutes, seconds } = getConvertedTimeToSeconds(time);

  const MINUTE = minutes;
  const SECONDS = seconds;
  const HOURS = hours;

  function startCountdown() {
    setIsActive(true);
    setHasFinished(false);
  }

  function handleStopCountdown() {
    setIsActive(false);
  }

  function handleSetCountdown(time: number, interval?: number) {
    setTime(time);
    if (interval) setUserInterval(interval);
    setTotalTime(time);
  }

  function handleResetTimer() {
    setTime(totalTime);
    setHasFinished(false);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);

      return;
    }

    if (isActive && time === 0 && !hasFinished) {
      setTime(userInterval);
      setHasFinished(true);
      console.log("caiu aqui");
      return;
    }

    if (hasFinished && time === 0) {
      setTime(totalTime);
      setHasFinished(false);
      setIsActive(false);
      return;
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
        handleSetCountdown,
        isActive,
        handleResetTimer,
        hasFinished,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}

export const useCountdown = () => {
  return useContext(CountdownContext);
};
