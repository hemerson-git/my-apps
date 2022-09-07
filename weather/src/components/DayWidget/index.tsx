import { useEffect, useRef, useState } from "react";
import { Heading, HStack, Row, Text, useTheme, VStack } from "native-base";
import LottieView, { AnimationObject } from "lottie-react-native";
import { Feather } from "@expo/vector-icons";

// TYPES
import { ResultsProps } from "../../types/hg";
import {
  getWeatherImage,
  WeatherImageProps,
} from "../../utils/weather_animations";

interface DayWidgetProps {
  condition: ResultsProps;
}

export function DayWidget({ condition }: DayWidgetProps) {
  const animation = useRef(null);
  const { colors } = useTheme();

  const [animationSource, setAnimationSource] = useState<
    string | AnimationObject | { uri: string } | undefined
  >();

  useEffect(() => {
    console.log(condition);

    if (condition) {
      const { condition_slug } = condition;

      const image = getWeatherImage({
        condition: condition_slug,
      } as unknown as WeatherImageProps);

      setAnimationSource(image);
    }
  }, [condition, animationSource]);

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" mb={4}>
      <Heading color="primary.100">{condition.description}</Heading>

      {animationSource && (
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 200,
            backgroundColor: colors.primary[700],
          }}
          source={animationSource}
        />
      )}

      <HStack justifyContent="space-between" w="full" px={4}>
        <VStack alignItems="center">
          <Feather name="sunrise" color={colors.primary[100]} size={24} />
          <Text color="primary.100" mb={2}>
            {condition.sunrise}
          </Text>
        </VStack>

        <VStack alignItems="center">
          <Feather name="sunset" color={colors.primary[100]} size={24} />
          <Text color="primary.100" mb={2}>
            {condition.sunset}
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
}
