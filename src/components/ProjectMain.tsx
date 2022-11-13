import { Center, Flex, Image, Text } from '@chakra-ui/react'

export const ProjectMain = () => {
  return (
    <>
      <Flex h='100vh' gap='2rem' alignItems={'center'} justifyContent='center' flexDir={'column'}>
        <Text fontSize={['lg', '3xl']} color={'white'} px='1rem' textAlign='center'>
          Ayy, you got here way too early, relax a little.
        </Text>
        <Text fontSize={['md', '2xl']} color={'white'} px='1.5rem' textAlign='center'>
          We'll let the boss know you're here.
        </Text>
        <Image mt='1rem' src='/images/uc.png' />
      </Flex>
    </>
  )
}
