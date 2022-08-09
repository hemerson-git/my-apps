import { Heading, Text, VStack } from "native-base";
import LottieView from "lottie-react-native";

import LoadingAnimation from "../../assets/day-and-night.json";

export function Loading() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" bg="gray.900">
      <LottieView
        source={LoadingAnimation}
        style={{ width: 200, height: 200 }}
        autoPlay
      />

      <Heading color="gray.100">Loading...</Heading>
    </VStack>
  );
}
