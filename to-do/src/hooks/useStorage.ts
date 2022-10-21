import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useStorage(key: string, initialValue = "") {
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState(async () => {
    setIsLoading(true);
    const storedValue = await AsyncStorage.getItem(key);

    if (storedValue) {
      return JSON.parse(storedValue);
    }

    return initialValue;
  });

  useEffect(() => {
    (async () => {
      await AsyncStorage.setItem(key, JSON.stringify(state));
    })();
  }, [key, state]);
  setIsLoading(false);

  return [state, setState, isLoading];
}
