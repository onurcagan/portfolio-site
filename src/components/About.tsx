import { Center, Flex, Image, Text } from '@chakra-ui/react'

export const About = () => {
  return (
    <>
      <Flex h="88vh">
        <Image
          display={'flex'}
          src="/images/animation.svg"
          alt="background animation"
          position={'absolute'}
          w="100%"
          maxH="88vh"
          zIndex={'0'}
        />
        <Center w={'100%'} maxH="88vh">
          <Flex mx="3rem" maxWidth={'100%'}>
            <Center>
              <Flex flexDir={'column'} mr="-30rem">
                <Text as="b" fontSize={'8xl'} color="gray.50" size="lg" zIndex="4">
                  Hi.
                </Text>
                <Text as="em" fontSize={'7xl'} color="gray.50" size="lg" zIndex="4">
                  I&apos;m <strong>Onur.</strong>
                </Text>
                <Text as="i" fontSize={'7xl'} color="gray.50" size="lg" zIndex="4">
                  A Web Developer.
                </Text>
              </Flex>
            </Center>
            <Image
              borderRadius={'none'}
              alt="A photo of me running super fast."
              src="/images/profile.png"
              maxH="88vh"
              maxWidth="100%"
              zIndex={'2'}
            ></Image>
          </Flex>
        </Center>
      </Flex>
    </>
  )
}
