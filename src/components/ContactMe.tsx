import { Button, Center, Divider, Flex, Input, Stack, Text, Textarea } from '@chakra-ui/react'

export const ContactMe = () => {
  return (
    <Center height={'100vh'} w="100%" maxW="100%" mb="3rem" zIndex="5">
      <Flex flexDirection={'column'} mb={'1rem'} gap="2rem" pos="relative">
        <Text as="b" fontSize={['6xl', '7xl']} color={'gray.400'}>
          Let&apos;s talk.
        </Text>
        {/* <Text textAlign={'center'} my="1rem" color={'gray.400'}>
          ۞
        </Text> */}
        <Flex flexDir={'column'} gap="1rem" px="1rem" alignContent={'center'} justifyContent="center">
          <Input color="gray.400" placeholder="Name"></Input>
          <Input color="gray.400" placeholder="Email"></Input>
          <Textarea color="gray.400" placeholder="Message" h="8rem" maxH="13rem"></Textarea>
          <Center>
            <Button w="auto" mt="1em">
              Submit
            </Button>
          </Center>
        </Flex>
      </Flex>
    </Center>
  )
}
