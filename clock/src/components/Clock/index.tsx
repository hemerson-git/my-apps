import { HStack, Text } from "native-base";
import { useEffect, useState } from "react";
import { getParsedTime } from "../../utils/parseTimeToString";

import { ClockChar } from "../ClockChar";

export function Clock() {
  let TIME = getParsedTime(new Date());
  const [hours, setHours] = useState(TIME.hours);
  const [minutes, setMinutes] = useState(TIME.minutes);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      TIME = getParsedTime(new Date());
      setHours(TIME.hours);
      setMinutes(TIME.minutes);
      setOpacity(Number(TIME.seconds) % 2 ? 1 : 0.5);
    }, 1000);

    return () => clearInterval(interval);
  }, [TIME]);

  return (
    <HStack alignItems="flex-end" position="relative">
      <ClockChar char={hours[0]} />
      <ClockChar char={hours[1]} />
      <ClockChar char=":" opacity={opacity} />
      <ClockChar char={minutes[0]} />
      <ClockChar char={minutes[1]} />
      <Text
        color="primary.500"
        mb="3.5"
        ml="1.5"
        fontSize="md"
        position="absolute"
        right="-32"
        bottom="0"
      >
        {Number(TIME.hours) > 12 ? "PM" : "AM"}
      </Text>
    </HStack>
  );
}
