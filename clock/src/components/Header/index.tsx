import { Heading, HStack, Text, View } from "native-base";
import LottieView from "lottie-react-native";

import WorkingAnimation from "../../assets/working.json";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <HStack
      h={32}
      w="full"
      bg="primary.500"
      justifyContent="center"
      position="absolute"
      top={0}
      right="0"
    >
      <LottieView
        source={WorkingAnimation}
        autoPlay
        style={{
          width: "100%",
          height: "auto",
          top: -100,
          position: "absolute",
        }}
      ></LottieView>

      <HStack h={32} alignItems="center" justifyContent="center" flex={1}>
        <View
          backgroundColor="primary.500"
          opacity={0.8}
          position="absolute"
          top={0}
          h={48}
          w="full"
        ></View>

        <Heading color="white" fontSize={28}>
          {title}
        </Heading>
      </HStack>
    </HStack>
  );
}
