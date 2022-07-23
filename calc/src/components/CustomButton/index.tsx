import { ReactNode } from "react";
import { IPressableProps, Pressable, Text, useTheme } from "native-base";
import { IconProps } from "phosphor-react-native";

interface CustomButtonProps extends IPressableProps {
  value: string;
  theme?: "primary" | "secondary" | "info";
  children?: ReactNode;
  icon?: React.ElementType<IconProps>;
}

export function CustomButton({
  value,
  theme = "info",
  icon: Icon,
  ...rest
}: CustomButtonProps) {
  const { colors } = useTheme();

  const color = {
    primary: colors.primary[500],
    secondary: colors.secondary[500],
    info: colors.gray[300],
  };

  return (
    <Pressable
      h={16}
      flex={1}
      alignItems="center"
      justifyContent="center"
      bg="gray.900"
      shadow="7"
      rounded="2xl"
      _pressed={{ opacity: 0.7 }}
      {...rest}
    >
      {Icon ? (
        // @ts-ignore
        <Icon size={24} color={color[theme]} />
      ) : (
        <Text color={color[theme]} fontSize="xl" fontWeight="bold">
          {value}
        </Text>
      )}
    </Pressable>
  );
}
