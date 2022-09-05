import { Heading, HStack, Text } from "native-base";
import { Feather } from "@expo/vector-icons";

export function Header() {
  return (
    <HStack alignItems="center" justifyContent="space-between" px={2}>
      <Heading
        color="white"
        fontFamily={"body"}
        size={"xl"}
        fontWeight="medium"
      >
        Clima
      </Heading>

      <Text color="white" alignItems="center">
        <Feather name="map-pin" size={18} /> {` `}
        Vitória da Conquista, BA
      </Text>
    </HStack>
  );
}
