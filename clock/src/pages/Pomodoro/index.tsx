import { useEffect, useState } from "react";
import {
  Heading,
  HStack,
  IconButton,
  ScrollView,
  Slider,
  Text,
  useTheme,
  VStack,
} from "native-base";

import {
  CountdownProvider,
  useCountdown,
} from "../../contexts/CountdownContext";
import Icon from "@expo/vector-icons/Feather";

// COMPONENTS
import { Timer } from "../../components/Timer";
import { Header } from "../../components/Header";
import WorkingAnimation from "../../assets/working.json";

export function Pomodoro() {
  const { colors } = useTheme();
  const { isActive } = useCountdown();
  const [maxTime, setMaxTime] = useState(25);
  const [intervalTime, setIntervalMaxTime] = useState(5);
  const [isShowingSettings, setIsShowingSettings] = useState(false);

  let TIME = maxTime * 60; // 25 minutes
  let INTERVAL = intervalTime * 60; // 5 minutes

  return (
    <CountdownProvider timeInSeconds={TIME}>
      <Header title="Pomodoro Timer" animation={WorkingAnimation} />

      <ScrollView bg="gray.900" mt="32" borderTopRadius={48}>
        <VStack flex={1} px="4">
          <VStack alignItems="flex-end" py={"8"} px="2">
            <IconButton
              width={"12"}
              mb="4"
              icon={
                <Icon name="settings" size={24} color={colors.primary[500]} />
              }
              onPress={() => setIsShowingSettings(!isShowingSettings)}
            />

            {isShowingSettings && (
              <VStack w="full" mb="4">
                <VStack px="4" space="4" mb="8">
                  <Heading color="white" fontSize="md">
                    Working Time:
                  </Heading>

                  <HStack w="full" space="4">
                    <Slider
                      size="md"
                      defaultValue={25}
                      maxValue={50}
                      minValue={15}
                      color="primary.500"
                      onChangeEnd={(value) => setMaxTime(value)}
                      flex={1}
                    >
                      <Slider.Track bg="primary.500">
                        <Slider.FilledTrack bg="primary.500" />
                      </Slider.Track>

                      <Slider.Thumb bg="primary.500" isDisabled={isActive} />
                    </Slider>

                    <Text color="white" fontSize="md">
                      {maxTime}
                    </Text>
                  </HStack>
                </VStack>

                <VStack px="4" space="4">
                  <Heading color="white" fontSize="md">
                    Interval Time:
                  </Heading>

                  <HStack w="full" space="4">
                    <Slider
                      size="md"
                      defaultValue={5}
                      maxValue={15}
                      minValue={0}
                      color="primary.500"
                      onChangeEnd={(value) => setIntervalMaxTime(value)}
                      flex={1}
                    >
                      <Slider.Track bg="primary.500">
                        <Slider.FilledTrack bg="primary.500" />
                      </Slider.Track>

                      <Slider.Thumb bg="primary.500" />
                    </Slider>

                    <Text color="white" fontSize="md">
                      {intervalTime}
                    </Text>
                  </HStack>
                </VStack>
              </VStack>
            )}
          </VStack>

          <VStack
            justifyContent="center"
            px="4"
            mt={!isShowingSettings ? "24" : "0"}
          >
            <Timer initialTime={TIME} intervalTime={INTERVAL} />
          </VStack>
        </VStack>
      </ScrollView>
    </CountdownProvider>
  );
}
