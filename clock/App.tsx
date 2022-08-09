import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { NativeBaseProvider, StatusBar, Text, useTheme } from "native-base";
import React from "react";

import { Home } from "./src/pages/Home";
import { THEME } from "./src/themes/styles";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <NativeBaseProvider theme={THEME}>
        <Loading />
      </NativeBaseProvider>
    );
  }

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar translucent backgroundColor="transparent" />
      <Home />
    </NativeBaseProvider>
  );
}
