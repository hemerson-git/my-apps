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
  PlusMinus,
  Repeat,
} from "phosphor-react-native";
import { useCalcProvider } from "../../contexts/CalcContext";

import { removeBegginingZero } from "../../utils/calculator";

interface ButtonContainerProps extends IBoxProps {}

interface ButtonFunctionsProps {
  ac: () => {};
  back: () => {};
  minus: string;
  plus: string;
  divide: string;
  multiply: string;
  equals: () => {};
}

export function ButtonContainer({ ...rest }: ButtonContainerProps) {
  const { handleSetExpression, expression, handleSetResult } =
    useCalcProvider();

  const buttonFunc = {
    ac: () => {
      handleSetExpression("0");
      handleSetResult("");
    },

    back: () => {
      if (expression !== "0" && expression.length !== 1) {
        handleSetExpression(expression.slice(0, -1));
        return;
      }

      if (expression.length === 1) {
        handleSetExpression("0");
        return;
      }
    },

    plusminus: () => {
      if (expression !== "0" && !isNaN(Number(expression))) {
        const newExpression = eval(expression) * -1;
        handleSetExpression(newExpression.toString());
      }
    },

    minus: "-",
    plus: "+",
    divide: "/",
    multiply: "*",
    dot: ".",
    equals: () => {
      const lastItem = expression[expression.length - 1];

      if (!isNaN(Number(lastItem))) {
        const total = eval(expression);
        handleSetResult(total);
        handleSetExpression(expression);
      }
    },
  };

  function handlePress(value: string) {
    const parcedValue = value
      .toLowerCase()
      .trim() as keyof ButtonFunctionsProps;

    if (expression === "0" && value === "0") {
      return;
    }

    console.log(parcedValue);

    // Remove zero from the beginning of the expression
    if (!!expression && !isNaN(Number(value))) {
      const numberWithoutBegginingZero = removeBegginingZero(expression);
      console.log("Number", numberWithoutBegginingZero);
      handleSetExpression(numberWithoutBegginingZero + value);
      return;
    }

    if (isNaN(Number(value)) && typeof buttonFunc[parcedValue] !== "function") {
      if (isNaN(Number(expression[expression.length - 1]))) {
        const newExpression = expression.slice(0, -1) + buttonFunc[parcedValue];
        handleSetExpression(newExpression);
        return;
      }

      handleSetExpression(expression + buttonFunc[parcedValue]);
      return;
    }

    // Execute the button function
    if (typeof buttonFunc[parcedValue] === "function") {
      //@ts-ignore
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
          onPress={() => handlePress("plusminus")}
          value="plusMinus"
          icon={PlusMinus}
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
        <CustomButton value="1" icon={Repeat} />
        <CustomButton value="0" onPress={() => handlePress("0")} />
        <CustomButton value="." onPress={() => handlePress("dot")} />
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
