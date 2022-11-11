import { Container, Stack, Flex, Image, Text } from '@chakra-ui/react'

export const About = () => {
  return (
    <>
      <Flex
        h="88vh"
        w="100%"
        flexDir={['column', 'column', 'row']}
        gap="1rem"
        pos="relative"
        textAlign={'left'}
        justifyContent="center"
      >
        <Flex w="100%" flexDir={'column'} mx="auto" pt={['3rem', '3rem', null]}>
          <Text
            as="b"
            fontSize={['2rem', '2rem', '4.5rem', '5rem']}
            textAlign="left"
            ml={['auto', 'auto', '5rem']}
            mr={['auto', 'auto', null]}
            bgGradient={'linear(to-b, #8A2387,#E94057,#F27121)'}
            bgClip={'text'}
            size="lg"
            zIndex="4"
          >
            Hi.
            <br />
          </Text>
          <Text
            as="em"
            fontSize={['1.5rem', '1.5rem', '2rem', '3.8rem']}
            textAlign="center"
            ml="auto"
            mr={['auto', 'auto', '5rem']}
            my={[null, null, 'auto']}
            color="gray.50"
            size="lg"
            zIndex="4"
            display={'inline-block'}
          >
            I&apos;m{' '}
            <Text
              fontSize={['1.8rem', '1.8rem', '3rem', '4rem']}
              as="b"
              display={'inline-block'}
              bgGradient={'linear(to-r, #fe8c00,#f83600)'}
              bgClip={'text'}
            >
              Onur.
            </Text>{' '}
            <br />
          </Text>
          <Text
            as="i"
            fontSize={['1.5rem', '1.5rem', '1.9rem', '3rem']}
            textAlign="center"
            ml={['auto', 'auto', '5rem']}
            mr={['auto', 'auto', null]}
            mb={['null', 'null', '2rem']}
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
          src="/images/profile1.webp"
          maxH="88vh"
          minH="30vh"
          objectFit={'contain'}
          w={[null, null, '100%']}
          maxW={[null, null, '100%']}
          zIndex={'2'}
          bottom="0"
          mt="auto"
          mx="auto"
          pos={['relative', 'relative', 'absolute']}
          justifySelf="end"
        />
      </Flex>
    </>
  )
}
