import { useRef, useState } from "react";
import { Text, useTheme, VStack } from "native-base";

// COMPONENTS
import LottieView, {
  AnimatedLottieViewProps,
  AnimationObject,
} from "lottie-react-native";

// TYPES
import { ForecastProps } from "../../types/hg";

// UTILS
import {
  getWeatherImage,
  WeatherImageProps,
} from "../../utils/weather_animations";

interface DailyCardProps {
  weatherInfo: ForecastProps;
}

export function DailyCard({ weatherInfo }: DailyCardProps) {
  const { colors } = useTheme();

  const animation = useRef(null);
  const [animationSource, setAnimationSource] = useState<
    string | AnimationObject | { uri: string }
  >();

  if (weatherInfo) {
    const { condition } = weatherInfo;
    const image = getWeatherImage(condition);
    if (!animationSource) setAnimationSource(image);
  }

  return (
    <VStack
      bg="primary.500"
      alignItems="center"
      py={2}
      borderRadius={"xl"}
      w={24}
      mr={2}
    >
      <Text fontSize={32} color="primary.100">
        {weatherInfo?.max}º
      </Text>

      {animationSource && (
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 80,
            height: 80,
            backgroundColor: colors.primary[500],
          }}
          source={animationSource}
        />
      )}

      <Text color="primary.100" fontSize={18}>
        {weatherInfo?.date}
      </Text>
    </VStack>
  );
}
