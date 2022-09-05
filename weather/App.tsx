import { Heading, VStack, NativeBaseProvider, StatusBar } from "native-base";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { THEME } from "./src/themes/styles";
import { Home } from "./src/pages/Home";

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

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
