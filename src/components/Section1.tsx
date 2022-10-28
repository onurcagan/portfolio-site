import { Box, Center, Container, Flex, Text } from '@chakra-ui/react'

export const Section1 = () => {
  return (
    <>
      <Center bg={'red.800'} height={'88vh'} alignItems={'center'}>
        <Flex flexDirection={'column'} marginRight={'300px'} marginLeft={'300px'}>
          <Center>
            <Text marginBottom={'100px'} fontSize={'3xl'} color={'gray.400'}>
              A Section
            </Text>
          </Center>
          <Box textAlign={'center'} color={'gray.400'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel laoreet purus. Quisque quis congue turpis,
            eget vehicula dolor. Donec varius pretium lorem vel auctor. Nunc eu facilisis quam. Curabitur lobortis leo sit amet
            sem vulputate pellentesque. Etiam sit amet sem volutpat magna ullamcorper mollis. Donec placerat rhoncus metus, quis
            egestas quam molestie ut. Nam tristique pharetra semper. Mauris porttitor arcu congue dolor posuere, nec aliquet
            lectus imperdiet. Maecenas egestas facilisis dignissim. Mauris risus neque, accumsan id euismod non, blandit ornare
            quam. Integer finibus congue leo ut placerat. Nullam iaculis felis vel consequat dapibus. Praesent vel urna
            pellentesque, eleifend sem interdum, tempor enim. Maecenas nec imperdiet tellus.
          </Box>
        </Flex>
      </Center>
    </>
  )
}
