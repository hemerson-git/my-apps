import { VStack } from "native-base";
import { Timer } from "../../components/Timer";
import { CountdownProvider } from "../../contexts/CountdownContext";

export function Pomodoro() {
  return (
    <CountdownProvider>
      <VStack
        flex={1}
        justifyContent="center"
        alignContent="center"
        bg="gray.900"
      >
        <Timer time={60} />
      </VStack>
    </CountdownProvider>
  );
}
