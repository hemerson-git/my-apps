import "expo-dev-client";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { NativeBaseProvider, StatusBar, Text, VStack } from "native-base";

import { THEME } from "./src/themes/styles";

import { Routes } from "./src/routes/main";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <NativeBaseProvider>
        <Text>Loading..</Text>
      </NativeBaseProvider>
    );
  }

  return (
    <NativeBaseProvider theme={THEME}>
      <VStack flex={1} bg="primary.700">
        <StatusBar hidden />
        <Routes />
      </VStack>
    </NativeBaseProvider>
  );
}
