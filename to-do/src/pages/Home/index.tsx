import { useState } from "react";
import {
  Box,
  Heading,
  HStack,
  Input,
  Pressable,
  ScrollView,
  Text,
  useTheme,
  VStack,
  useToast,
} from "native-base";

import { Modal } from "../../components/Modal";
import { Button } from "../../components/Button";

interface ToDoProps {
  title: string;
  description: string;
  isComplete?: boolean;
}

export function Home() {
  const { colors } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [todoList, setTodoList] = useState<ToDoProps[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const toast = useToast();

  function handleOpenModal() {
    setIsOpen((prevState) => !prevState);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  function handleCreateTodo() {
    const newToDo = {
      title,
      description,
      isClosed: false,
    };

    setTodoList((prevState) => [...prevState, newToDo]);

    setTitle("");
    setDescription("");
    toast.show({
      description: "Success",
      backgroundColor: colors.green[500],
    });
    setIsOpen(false);
  }

  return (
    <VStack
      bg="primary.700"
      minH="full"
      alignItems="center"
      p="4"
      pt="0"
      safeArea
    >
      <Heading color="white" textTransform="uppercase" mb="4">
        To-do
      </Heading>

      <ScrollView>
        {todoList.map((todo, index) => (
          <Text color="white" fontSize="lg" key={`${index}`}>
            {todo.title}
          </Text>
        ))}
      </ScrollView>

      <HStack>
        <Pressable
          bg="green.700"
          w="80%"
          alignItems="center"
          justifyContent="center"
          py="2"
          rounded="4"
          _pressed={{
            backgroundColor: colors.green[300],
          }}
          onPress={handleOpenModal}
        >
          <Text color="white" fontWeight="bold" fontSize="md">
            Create new
          </Text>
        </Pressable>
      </HStack>

      <Modal isOpen={isOpen} setModalVisible={handleCloseModal}>
        <Box mb="4">
          <Text mb="2" fontWeight="bold">
            Title:
          </Text>

          <Input placeholder="Example" value={title} onChangeText={setTitle} />
        </Box>

        <Box mb="4">
          <Text mb="2" fontWeight="bold">
            Description:
          </Text>

          <Input
            placeholder="Example"
            multiline
            numberOfLines={8}
            value={description}
            onChangeText={setDescription}
          />
        </Box>

        <Button title="Add New to-do" onPress={handleCreateTodo} />
      </Modal>
    </VStack>
  );
}
