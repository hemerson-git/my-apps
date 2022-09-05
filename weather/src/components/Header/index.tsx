import { Heading, HStack, Text } from "native-base";
import { Feather } from "@expo/vector-icons";

// Types
import { WeatherResponseProps, ResultsProps } from "../../types/hg";

interface HeaderProps {
  cityName: string;
}

export function Header({ cityName }: HeaderProps) {
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
        {cityName}
      </Text>
    </HStack>
  );
}
