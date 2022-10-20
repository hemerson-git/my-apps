import { IButtonProps, Button as PrimaryButton } from "native-base";

interface ButtonProps extends IButtonProps {
  title: string;
  onPress: () => void;
}

export function Button({ title, onPress }: ButtonProps) {
  return <PrimaryButton onPress={onPress}>{title}</PrimaryButton>;
}
