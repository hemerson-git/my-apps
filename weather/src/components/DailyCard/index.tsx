import { Text, VStack } from "native-base";
import { Feather } from "@expo/vector-icons";

import { ForecastProps } from "../../types/hg";

interface DailyCardProps {
  weatherInfo: ForecastProps;
}

export function DailyCard({ weatherInfo }: DailyCardProps) {
  return (
    <VStack
      bg="primary.500"
      alignItems="center"
      py={2}
      borderRadius={"xl"}
      w={24}
      mr={2}
    >
      <Text fontSize={32} color="primary.100" mb={3}>
        {weatherInfo.max}º
      </Text>

      <Feather name="sun" size={48} />

      <Text mt={3} color="primary.100" fontSize={18}>
        {weatherInfo.date}
      </Text>
    </VStack>
  );
}
