import { useEffect, useState } from "react";
import Location, {
  getCurrentPositionAsync,
  LocationObject,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { Heading, NativeBaseProvider, StatusBar } from "native-base";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { THEME } from "./src/themes/styles";
import { Home } from "./src/pages/Home";
import { Text } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });
  const [location, setLocation] = useState<LocationObject>(
    {} as LocationObject
  );
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      try {
        let { status } = await requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied.");
          console.log("ERROR");
          return;
        }

        let loc = await getCurrentPositionAsync({});
        console.log(loc);
        setLocation(loc);
      } catch (err) {
        setErrorMsg(`${err}`);
        console.log(err);
      }
    })();
  }, []);

  if (!fontsLoaded) {
    return (
      <NativeBaseProvider theme={THEME}>
        <Heading>Loading</Heading>
      </NativeBaseProvider>
    );
  }

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar hidden />
      <Home />
    </NativeBaseProvider>
  );
}
