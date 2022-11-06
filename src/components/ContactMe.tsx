import { Button, Center, Divider, Flex, Input, Stack, Text, Textarea } from '@chakra-ui/react'

export const ContactMe = () => {
  return (
    <Center height={'100vh'} rounded="3xl" mx={'3rem'} mb="3rem">
      <Flex flexDirection={'column'} mb={'1rem'} mx={['5rem', null, null, '20rem']} alignItems="center">
        <Text as="b" fontSize={'7xl'} mb={'3rem'} color={'gray.400'}>
          Let&apos;s talk.
        </Text>
        <Divider color={'gray.400'} mt="-2rem" mb={'2rem'} mr="auto" ml="1rem" w="40%" />
        <Divider color={'gray.400'} mt="-2rem" mb={'2rem'} ml="auto" mr="1rem" w="40%" />
        <Text color={'gray.400'} mt="7.1rem" position="absolute">
          ۞
        </Text>

        <Center rounded={'md'} boxSize={'sm'}>
          <Flex flexDir={'column'} gap="1rem">
            <Input color="gray.400" placeholder="Name"></Input>
            <Input color="gray.400" placeholder="Email"></Input>
            <Textarea color="gray.400" placeholder="Message" h="8rem" maxH="13rem"></Textarea>
            <Center>
              <Button w="auto" mt="1em">
                Submit
              </Button>
            </Center>
          </Flex>
        </Center>
      </Flex>
    </Center>
  )
}
