import { Heading, NativeBaseProvider, StatusBar, VStack } from "native-base";
import React from "react";
import { Home } from "./src/pages/Home";
import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";

import { THEME } from "./src/themes/styles";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    <NativeBaseProvider>
      <Heading>Loading...</Heading>
    </NativeBaseProvider>;
  }

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar translucent backgroundColor="transparent" />
      <Home />
    </NativeBaseProvider>
  );
}
