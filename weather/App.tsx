import { Heading, VStack, NativeBaseProvider } from "native-base";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { THEME } from "./src/themes/styles";

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
      <VStack
        bgColor="primary.700"
        flex={1}
        alignItems="center"
        justifyContent="center"
      >
        <Heading color="primary.100">Hello World</Heading>
      </VStack>
    </NativeBaseProvider>
  );
}
