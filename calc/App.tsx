import { useState } from "react";
import { NativeBaseProvider, StatusBar, Text, VStack } from "native-base";
import { THEME } from "./src/themes/themes";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { Display } from "./src/components/Display";
import { ButtonContainer } from "./src/components/ButtonContainer";

import CalcProvider, { useCalcProvider } from "./src/contexts/CalcContext";

export default function App() {
  const { expression } = useCalcProvider();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <NativeBaseProvider theme={THEME}>
        <VStack bg="gray.700">
          <Text>Loading...</Text>
        </VStack>
      </NativeBaseProvider>
    );
  }

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar animated />

      <CalcProvider>
        <VStack bg="gray.900" flex={1} p={4} space={8}>
          <Display result={""} expression={expression} flex={1} />

          <ButtonContainer flex={3} />
        </VStack>
      </CalcProvider>
    </NativeBaseProvider>
  );
}
