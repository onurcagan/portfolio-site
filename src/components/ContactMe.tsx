import { Box, Center, Flex, Text } from '@chakra-ui/react'

export const ContactMe = () => {
  return (
    <Center height={'100vh'} rounded="3xl" mx={'3rem'} mb="3rem">
      <Flex flexDirection={'column'} mb={'1rem'} mx={['5rem', null, null, '20rem']}>
        <Center>
          <Text as="b" fontSize={'7xl'} mb={'1rem'} mr="10" color={'gray.400'} textAlign={'center'}>
            Let&apos;s talk.
          </Text>
        </Center>
      </Flex>
    </Center>
  )
}
