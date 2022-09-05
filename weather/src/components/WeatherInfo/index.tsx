import { Box, Column, HStack, Text, View } from "native-base";
import { Feather } from "@expo/vector-icons";

export function WeatherInfo() {
  return (
    <HStack justifyContent="space-between" py={8}>
      <Column>
        <Text color="white">
          <Feather name="wind" size={14} />
          {` `}3 Km/h
        </Text>

        <Text color="white">
          <Feather name="droplet" size={14} />
          {` `}80%
        </Text>
      </Column>

      <Box flexDirection="row" alignItems="center">
        <Column mr={4}>
          <Text color="white">Max 18º</Text>
          <Text color="white">Min 7º</Text>
        </Column>

        <Text fontSize="4xl" color="white">
          10º
        </Text>
      </Box>
    </HStack>
  );
}
