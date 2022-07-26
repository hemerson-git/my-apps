import { Heading, IHeadingProps } from "native-base";

interface ClockCharProps extends IHeadingProps {
  char: string;
}

export function ClockChar({ char, ...rest }: ClockCharProps) {
  return (
    <Heading
      color="primary.500"
      fontSize="7xl"
      fontFamily="mono"
      fontWeight={400}
      w="10"
      textAlign="center"
      {...rest}
    >
      {char}
    </Heading>
  );
}
