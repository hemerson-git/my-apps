import { VStack } from "native-base";
import { Feather } from "@expo/vector-icons";

export function DayWidget() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" mb={4}>
      <Feather name="sunset" size={200} />
    </VStack>
  );
}
