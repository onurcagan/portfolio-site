import { Box, Center, Flex, Text } from '@chakra-ui/react'

export const Section2 = () => {
  return (
    <Center bg={'cyan.800'} height={'100vh'}>
      <Flex flexDirection={'column'} mb={'1rem'} mr={['5rem', null, null, '20rem']} ml={['5rem', null, null, '20rem']}>
        <Center>
          <Text fontSize={'3xl'} marginBottom={'1rem'} color={'gray.400'}>
            Another Section
          </Text>
        </Center>

        <Box fontSize={'sm'} textAlign={'center'} color={'gray.400'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel laoreet purus. Quisque quis congue turpis,
          eget vehicula dolor. Donec varius pretium lorem vel auctor. Nunc eu facilisis quam. Curabitur lobortis leo sit amet sem
          vulputate pellentesque. Etiam sit amet sem volutpat magna ullamcorper mollis. Donec placerat rhoncus metus, quis egestas
          quam molestie ut. Nam tristique pharetra semper.
        </Box>
      </Flex>
    </Center>
  )
}
