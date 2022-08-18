import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { JetBrainsMono_400Regular } from '@expo-google-fonts/jetbrains-mono';
import { NativeBaseProvider, StatusBar, Text, useTheme } from "native-base";
import React from "react";

import { Home } from "./src/pages/Home";
import { THEME } from "./src/themes/styles";
import { Loading } from "./src/components/Loading";
import { Pomodoro } from "./src/pages/Pomodoro";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    JetBrainsMono_400Regular,
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
      <Pomodoro />
    </NativeBaseProvider>
  );
}
