import { Container, Stack, Flex, Image, Text } from '@chakra-ui/react'

export const About = () => {
  return (
    <>
      <Flex
        h='88vh'
        w='100%'
        flexDir={['column', 'column', 'row']}
        gap='1rem'
        pos='relative'
        textAlign={'left'}
        justifyContent='center'
        mb='0.1rem' // to prevent the bottom bit of the photo showing up on the projects section
        position='relative'
      >
        <Flex
          w='100%'
          flexDir={'column'}
          mx='auto'
          pt={['3rem', '3rem', null]}
          mt={['5vw', '10vw']}
          mb='auto'
        >
          <Text
            fontWeight={'extrabold'}
            fontSize={['2rem', '2rem', '3.5rem', '4rem']}
            textAlign={['center', 'left']}
            ml={['auto', 'auto', '10vw']}
            mr={['auto', 'auto', null]}
            bgGradient={'linear(to-b, #8A2387,#E94057,#F27121)'}
            bgClip={'text'}
            zIndex='4'
          >
            Hi.
            <br />
          </Text>
          <Text
            fontSize={['1.8rem', '1.8rem', '2.3rem', '3.2rem']}
            textAlign={['center', 'left']}
            ml={['auto', 'auto', '10vw']}
            mr={['auto', 'auto', null]}
            color='gray.50'
            zIndex='4'
            display={'inline-block'}
          >
            I&apos;m{' '}
            <Text
              fontSize={['1.8rem', '1.8rem', '2.3rem', '3.2rem']}
              as='b'
              display={'inline-block'}
              bgGradient={'linear(to-r, #fe8c00,#f83600)'}
              bgClip={'text'}
              textAlign={['center', 'left']}
            >
              Onur.
            </Text>{' '}
            <br />
          </Text>
          <Text
            fontSize={['1.5rem', '1.5rem', '1.5rem', '2rem']}
            textAlign={['center', 'left']}
            ml={['auto', 'auto', '10vw']}
            mr={['auto', 'auto', null]}
            mb={['null', 'null', '2rem']}
            color='gray.50'
            zIndex='4'
          >
            A Software Developer!
          </Text>
        </Flex>
        <Image
          className='image'
          alt='A portrait photo of me.'
          src='/images/profile1.webp'
          maxH={['60vh', '70vh', '88vh']}
          minH='30vh'
          objectFit={'contain'}
          w={[null, null, '100vw']}
          maxW={[null, null, '100vw']}
          zIndex={'2'}
          bottom='0'
          mt='auto'
          pl={[null, null, '15rem', '20rem']}
          mx={['auto', 'auto', null]}
          pos={['relative', 'relative', 'absolute']}
          // justifySelf='end'
        />
      </Flex>
    </>
  )
}
