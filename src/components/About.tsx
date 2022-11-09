import { Container, Stack, Flex, Image, Text } from '@chakra-ui/react'

export const About = () => {
  return (
    <>
      <Flex h="88vh" w="100%" flexDir={['column', 'row']} gap="1rem" pos="relative" textAlign={'left'} justifyContent="center">
        <Flex w="100%" flexDir={'column'} pt={['2rem', null]}>
          <Text
            as="b"
            fontSize={['2.5rem', '8xl']}
            textAlign="left"
            ml={['auto', '5rem']}
            mr={['auto', null]}
            color="gray.50"
            size="lg"
            zIndex="4"
          >
            Hi.
            <br />
          </Text>
          <Text
            as="em"
            fontSize={['1.5rem', '7xl']}
            textAlign="left"
            ml="auto"
            mr={['auto', '5rem']}
            my={[null, 'auto']}
            color="gray.50"
            size="lg"
            zIndex="4"
          >
            I&apos;m <strong>Onur.</strong> <br />
          </Text>
          <Text
            as="i"
            fontSize={['1.5rem', '6xl']}
            textAlign="left"
            ml={['auto', '5rem']}
            mr={['auto', null]}
            mb={['null', '2rem']}
            color="gray.50"
            size="lg"
            zIndex="4"
          >
            A Software Developer.
          </Text>
        </Flex>
        <Image
          className="image"
          alt="A portrait photo of me."
          src="/images/profile.png"
          maxH="88vh"
          minH="50vh"
          objectFit={'contain'}
          w={[null, '100%']}
          maxW={[null, '100%']}
          zIndex={'2'}
          bottom="0"
          mx="auto"
          pos={['relative', 'absolute']}
          justifySelf="center"
        />
      </Flex>
    </>
  )
}
