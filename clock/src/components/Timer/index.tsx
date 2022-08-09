import { useState } from "react";
import { Button, HStack, Pressable, Text, useTheme, VStack } from "native-base";
import RNDateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";

import { ClockChar } from "../ClockChar";

export function Timer() {
  const { colors } = useTheme();
  const [showPicker, setShowPicker] = useState(false);
  const [time, setTime] = useState("");

  function handleSetTimer() {
    setShowPicker(!showPicker);

    if (showPicker) {
      DateTimePickerAndroid.open;
      console.log("teste");
    }

    DateTimePickerAndroid.dismiss;
  }

  return (
    <VStack>
      <Text>Timer</Text>

      <HStack>
        <Pressable
          flexDirection="row"
          onPress={() => DateTimePickerAndroid.open}
        >
          <ClockChar char="0" />
          <ClockChar char="0" />
          <ClockChar char=":" />
          <ClockChar char="0" />
          <ClockChar char="0" />
          <ClockChar char=":" />
          <ClockChar char="0" />
          <ClockChar char="0" />
        </Pressable>
      </HStack>

      <Button onPress={handleSetTimer}>
        <Text>Set Timer</Text>
      </Button>

      {showPicker && (
        <RNDateTimePicker
          value={new Date()}
          accentColor={colors.primary[500]}
          mode="time"
        />
      )}
    </VStack>
  );
}
