import { Text, VStack } from "native-base";
import { Feather } from "@expo/vector-icons";

export function DailyCard() {
  return (
    <VStack
      bg="primary.500"
      alignItems="center"
      px={4}
      py={2}
      borderRadius={"xl"}
      mr={2}
    >
      <Text fontSize={48} color="primary.100" mb={3}>
        24º
      </Text>

      <Feather name="sun" size={48} />

      <Text mt={3} color="primary.100" fontSize={18}>
        Amanhã
      </Text>
    </VStack>
  );
}
