import { useRef } from "react";
import { Text, VStack } from "native-base";

// COMPONENTS
import LottieView from "lottie-react-native";

// TYPES
import { ForecastProps } from "../../types/hg";

interface DailyCardProps {
  weatherInfo: ForecastProps;
}

export function DailyCard({ weatherInfo }: DailyCardProps) {
  const animation = useRef();

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
        {weatherInfo?.max}º
      </Text>

      <Text mt={3} color="primary.100" fontSize={18}>
        {weatherInfo?.date}
      </Text>
    </VStack>
  );
}
