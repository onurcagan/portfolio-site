import { Center, Flex } from "@chakra-ui/react";
import { ProjectMain } from "../components/ProjectMain";

export default function SomeComponent() {
  return <Flex bgGradient={'linear(to-b, black, #030303)'} minHeight={'100vh'} flexDirection={'column'} overflow="auto">
    <Center>
      <ProjectMain />
    </Center>
  </Flex>
}