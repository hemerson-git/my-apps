import { VStack } from "native-base";

import { CountdownProvider } from "../../contexts/CountdownContext";

// COMPONENTS
import { Timer } from "../../components/Timer";
import { Header } from "../../components/Header";

export function Pomodoro() {
  const TIME = 25 * 60; // 25 minutes

  return (
    <CountdownProvider timeInSeconds={TIME}>
      <Header title="Pomodoro Timer" />

      <VStack
        flex={1}
        justifyContent="center"
        alignContent="center"
        bg="gray.900"
        px="4"
        borderTopRadius={48}
        mt="32"
      >
        <Timer />
      </VStack>
    </CountdownProvider>
  );
}
