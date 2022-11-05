import { Box, Center, Flex, Text } from '@chakra-ui/react'

export const Section2 = () => {
  return (
    <Center bg="gray.700" height={'100vh'} rounded="3xl" mx={'3rem'} mb="3rem">
      <Flex flexDirection={'column'} mb={'1rem'} mx={['5rem', null, null, '20rem']}>
        <Center>
          <Text fontSize={'3xl'} marginBottom={'1rem'} color={'gray.400'} textAlign={'center'}>
            Another Section
          </Text>
        </Center>

        <Box fontSize={'lg'} textAlign={'center'} color={'gray.400'}>
          Yeeha!
        </Box>
      </Flex>
    </Center>
  )
}
