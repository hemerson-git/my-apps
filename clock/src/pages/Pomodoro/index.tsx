import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Pressable,
  Slider,
  Text,
  useTheme,
  VStack,
} from "native-base";

import { CountdownProvider } from "../../contexts/CountdownContext";
import Icon from "@expo/vector-icons/Feather";

// COMPONENTS
import { Timer } from "../../components/Timer";
import { Header } from "../../components/Header";
import WorkingAnimation from "../../assets/working.json";

export function Pomodoro() {
  const { colors } = useTheme();
  const [maxTime, setMaxTime] = useState(25);
  const [intervalTime, setIntervalMaxTime] = useState(5);

  let TIME = maxTime * 60; // 25 minutes
  let INTERVAL = intervalTime * 60; // 5 minutes

  return (
    <CountdownProvider timeInSeconds={TIME}>
      <Header title="Pomodoro Timer" animation={WorkingAnimation} />

      <VStack
        flex={1}
        alignContent="center"
        bg="gray.900"
        px="4"
        borderTopRadius={48}
        mt="32"
      >
        <VStack alignItems="flex-end" py={"8"} px="2">
          <IconButton
            justifyContent="flex-end"
            width={"12"}
            mb="4"
            icon={
              <Icon name="settings" size={24} color={colors.primary[500]} />
            }
          />

          <VStack px="4" space="4" mb="8">
            <Heading color="white" fontSize="md">
              Working Time:
            </Heading>

            <HStack w="full" space="4">
              <Slider
                size="md"
                defaultValue={25}
                maxValue={59}
                minValue={15}
                color="primary.500"
                onChange={(value) => setMaxTime(value)}
                flex={1}
              >
                <Slider.Track bg="primary.500">
                  <Slider.FilledTrack bg="primary.500" />
                </Slider.Track>

                <Slider.Thumb bg="primary.500" />
              </Slider>

              <Text color="white" fontSize="md">
                {maxTime}
              </Text>
            </HStack>
          </VStack>

          <VStack px="4" space="4">
            <Heading color="white" fontSize="md">
              Working Time:
            </Heading>

            <HStack w="full" space="4">
              <Slider
                size="md"
                defaultValue={25}
                maxValue={15}
                minValue={0}
                color="primary.500"
                onChange={(value) => setMaxTime(value)}
                flex={1}
              >
                <Slider.Track bg="primary.500">
                  <Slider.FilledTrack bg="primary.500" />
                </Slider.Track>

                <Slider.Thumb bg="primary.500" />
              </Slider>

              <Text color="white" fontSize="md">
                {maxTime}
              </Text>
            </HStack>
          </VStack>
        </VStack>

        <VStack flex={1} justifyContent="center" px="4">
          <Timer initialTime={TIME} intervalTime={INTERVAL} />
        </VStack>
      </VStack>
    </CountdownProvider>
  );
}
