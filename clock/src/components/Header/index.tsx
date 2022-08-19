import { Heading, HStack, Text, View } from "native-base";
import LottieView from "lottie-react-native";

interface HeaderProps {
  title: string;
  animation: any;
}

export function Header({ title, animation }: HeaderProps) {
  return (
    <HStack
      h={32}
      w="full"
      justifyContent="center"
      position="absolute"
      top={0}
      right="0"
    >
      <LottieView
        source={animation ?? ""}
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
          opacity={0.5}
          position="absolute"
          top={0}
          h={48}
          w="full"
        ></View>

        <Heading
          color="white"
          fontSize={28}
          fontFamily={"heading"}
          fontWeight={700}
        >
          {title}
        </Heading>
      </HStack>
    </HStack>
  );
}
