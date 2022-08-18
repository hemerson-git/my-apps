import { VStack } from "native-base";

import { CountdownProvider } from "../../contexts/CountdownContext";

// COMPONENTS
import { Timer } from "../../components/Timer";
import { Header } from "../../components/Header";
import WorkingAnimation from "../../assets/working.json";

export function Pomodoro() {
  const TIME = 25 * 60; // 25 minutes
  const INTERVAL = 5 * 60; // 5 minutes

  return (
    <CountdownProvider timeInSeconds={TIME}>
      <Header title="Pomodoro Timer" animation={WorkingAnimation} />

      <VStack
        flex={1}
        justifyContent="center"
        alignContent="center"
        bg="gray.900"
        px="4"
        borderTopRadius={48}
        mt="32"
      >
        <Timer initialTime={TIME} intervalTime={INTERVAL} />
      </VStack>
    </CountdownProvider>
  );
}
