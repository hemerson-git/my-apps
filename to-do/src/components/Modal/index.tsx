import { ReactNode } from "react";
import {
  Modal as PrimaryModal,
  IModalProps,
  TextField,
  useTheme,
} from "native-base";

interface ModalProps extends IModalProps {
  isOpen: boolean;
  setModalVisible: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, children, setModalVisible }: ModalProps) {
  const { colors } = useTheme();

  return (
    <PrimaryModal
      isOpen={isOpen}
      closeOnOverlayClick
      onClose={setModalVisible}
      _backdrop={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
      bg="transparent"
    >
      <PrimaryModal.Content>
        <PrimaryModal.CloseButton />
        <PrimaryModal.Header>Hello</PrimaryModal.Header>

        <PrimaryModal.Body>{children}</PrimaryModal.Body>
      </PrimaryModal.Content>
    </PrimaryModal>
  );
}
