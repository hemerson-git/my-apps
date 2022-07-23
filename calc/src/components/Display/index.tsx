import { Heading, IBoxProps, Text, VStack } from "native-base";
import { useCalcProvider } from "../../contexts/CalcContext";

interface DisplayProps extends IBoxProps {
  result?: string;
  expression?: string;
}

export function Display({ ...rest }: DisplayProps) {
  const { expression, result } = useCalcProvider();

  return (
    <VStack bg="gray.800" rounded="md" py={4} px={8} {...rest}>
      <Text color="gray.300" fontSize={24} textAlign="right">
        {expression}
      </Text>

      <Heading color="gray.200" fontSize={32} mb={4} textAlign="right">
        {result}
      </Heading>
    </VStack>
  );
}
