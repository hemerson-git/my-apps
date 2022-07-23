import { useEffect, useState } from "react";
import { HStack, IBoxProps, VStack } from "native-base";
import { CustomButton } from "../CustomButton";
import {
  Backspace,
  Divide,
  X,
  Minus,
  Plus,
  Equals,
  Percent,
} from "phosphor-react-native";
import { useCalcProvider } from "../../contexts/CalcContext";

interface ButtonContainerProps extends IBoxProps {}

export function ButtonContainer({ ...rest }: ButtonContainerProps) {
  const [result, setResult] = useState("");
  const { handleSetExpression, expression, handleSetResult } =
    useCalcProvider();

  const buttonFunc = {
    ac: () => {
      handleSetExpression("0");
      handleSetResult("");
    },
    back: () => handleSetExpression(expression.slice(0, -1)),
    minus: () => handleSetExpression(expression + "-"),
    plus: () => handleSetExpression(expression + "+"),
    divide: () => handleSetExpression(expression + "/"),
    multiply: () => handleSetExpression(expression + "*"),
    equals: () => {
      const total = eval(expression);
      handleSetResult(total);
      handleSetExpression(expression);
    },
  };

  function handlePress(value: string) {
    const parcedValue = value.toLowerCase().trim() as keyof typeof buttonFunc;
    const exceptions = ["ac", "back", ".", "="];

    if (expression === "0" && !isNaN(Number(parcedValue))) {
      const num = Number(parcedValue);
      console.log(num);
      handleSetExpression(num.toString());
      return;
    }

    if (isNaN(Number(value)) && !exceptions.includes(parcedValue)) {
      handleSetExpression(expression.slice(0, -1));
    }

    if (typeof buttonFunc[parcedValue] === "function") {
      buttonFunc[parcedValue]();
      return;
    }

    handleSetExpression(expression + value);
  }

  useEffect(() => {
    handleSetExpression(expression);
  }, [expression]);

  return (
    <VStack
      bg="gray.800"
      rounded="xl"
      p={4}
      {...rest}
      justifyContent="space-between"
    >
      <HStack space={6}>
        <CustomButton
          onPress={() => handlePress("AC")}
          value="AC"
          theme="primary"
        />

        <CustomButton
          onPress={() => handlePress("back")}
          value="back"
          icon={Backspace}
          theme="primary"
        />

        <CustomButton
          onPress={() => handlePress("percent")}
          value="%"
          icon={Percent}
          theme="primary"
        />

        <CustomButton
          value="\"
          icon={Divide}
          theme="secondary"
          onPress={() => handlePress("divide")}
        />
      </HStack>

      <HStack space={6}>
        <CustomButton value="7" onPress={() => handlePress("7")} />
        <CustomButton value="8" onPress={() => handlePress("8")} />
        <CustomButton value="9" onPress={() => handlePress("9")} />
        <CustomButton
          value="x"
          icon={X}
          theme="secondary"
          onPress={() => handlePress("multiply")}
        />
      </HStack>

      <HStack space={6}>
        <CustomButton value="4" onPress={() => handlePress("4")} />
        <CustomButton value="5" onPress={() => handlePress("5")} />
        <CustomButton value="6" onPress={() => handlePress("6")} />
        <CustomButton
          value="-"
          icon={Minus}
          theme="secondary"
          onPress={() => handlePress("minus")}
        />
      </HStack>

      <HStack space={6}>
        <CustomButton value="1" onPress={() => handlePress("1")} />
        <CustomButton value="2" onPress={() => handlePress("2")} />
        <CustomButton value="3" onPress={() => handlePress("3")} />
        <CustomButton
          value="+"
          icon={Plus}
          theme="secondary"
          onPress={() => handlePress("plus")}
        />
      </HStack>

      <HStack space={6}>
        <CustomButton value="1" icon={Backspace} />
        <CustomButton value="." />
        <CustomButton value="3" />
        <CustomButton
          value="="
          icon={Equals}
          theme="secondary"
          onPress={() => handlePress("equals")}
        />
      </HStack>
    </VStack>
  );
}
