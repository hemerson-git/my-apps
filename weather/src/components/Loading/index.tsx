import { VStack } from "native-base";
import { Text } from "react-native";

export function Loading() {
  return (
    <VStack flex={1}>
      <Text>Loading...</Text>
    </VStack>
  );
}
