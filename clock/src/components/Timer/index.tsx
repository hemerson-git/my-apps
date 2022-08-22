import { Subscription } from "expo-modules-core";
import * as Notifications from "expo-notifications";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import {
  Button,
  Heading,
  HStack,
  IconButton,
  Pressable,
  useTheme,
  VStack,
} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";

import { ClockChar } from "../ClockChar";

import { useCountdown } from "../../contexts/CountdownContext";
import { getTimerNotification } from "../../utils/messages";

interface TimerProps {
  initialTime: number;
  intervalTime?: number;
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export function Timer({ initialTime, intervalTime }: TimerProps) {
  const { colors } = useTheme();
  const notificationListener = useRef() as MutableRefObject<Subscription>;
  const responseListener = useRef() as MutableRefObject<Subscription>;
  const [notification, setNotification] = useState(false);

  const {
    MINUTE,
    SECONDS,
    HOURS,
    startCountdown,
    handleStopCountdown,
    isActive,
    handleResetTimer,
    handleSetCountdown,
    hasFinished,
  } = useCountdown();

  // First time the component is rendered, wait to start the countdown
  useEffect(() => {
    if (!isActive && !hasFinished) {
      handleSetCountdown(initialTime, intervalTime);
    }
  }, [initialTime, intervalTime]);

  // Interval
  useEffect(() => {
    if (hasFinished && !isActive) {
      handleSetCountdown(initialTime, intervalTime);
      startCountdown();
    }
  }, [hasFinished, isActive]);

  useEffect(() => {
    if (hasFinished) {
      schedulePushNotification();
    }
  }, [hasFinished]);

  useEffect(() => {
    notificationListener.current =
      Notifications.addNotificationReceivedListener((response) => {
        console.log(response);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  async function schedulePushNotification() {
    const message = getTimerNotification({
      event: hasFinished ? "finishedTime" : "finishedInterval",
      locale: "en-US",
    });

    await Notifications.scheduleNotificationAsync({
      content: {
        title: message.title,
        body: message.body,
        data: message.data,
      },

      trigger: {
        seconds: message.trigger.seconds,
      },
    });
  }

  return (
    <VStack>
      <HStack alignItems="center" justifyContent="center">
        <Pressable flexDirection="row" onPress={() => {}} mb="4">
          {Number(HOURS) > 0 && (
            <>
              <ClockChar char={HOURS[0]} />
              <ClockChar char={HOURS[1]} />
              <ClockChar char=":" />
            </>
          )}

          <ClockChar char={MINUTE[0]} />
          <ClockChar char={MINUTE[1]} />
          <ClockChar char=":" />
          <ClockChar char={SECONDS[0]} />
          <ClockChar char={SECONDS[1]} />
        </Pressable>
      </HStack>

      <HStack>
        {isActive ? (
          <Button onPress={handleStopCountdown} flex={1} bg="primary.500">
            <HStack space="2" alignItems="center">
              <Heading fontSize="xl" color="white">
                Stop
              </Heading>

              <Ionicons name="pause" color="white" size={24} />
            </HStack>
          </Button>
        ) : (
          <Button onPress={startCountdown} flex={1} bg="primary.500">
            <HStack space="2" alignItems="center">
              <Heading fontSize="xl" color="white">
                Start
              </Heading>

              <Ionicons name="play" color="white" size={24} />
            </HStack>
          </Button>
        )}

        <IconButton
          icon={<Ionicons name="refresh" size={28} color={colors.red[500]} />}
          onPress={handleResetTimer}
          disabled={isActive}
        />
      </HStack>
    </VStack>
  );
}
