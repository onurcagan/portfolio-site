import {
  Button,
  Center,
  chakra,
  Flex,
  Input,
  shouldForwardProp,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'

export const ContactMe = () => {
  const ChakraButton = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  })
  return (
    <Center height={'100vh'} w='100%' maxW='100%' mb='3rem' zIndex='5'>
      <Flex flexDirection={'column'} mb={'1rem'} gap='2rem' pos='relative'>
        <Text
          as='b'
          fontSize={['6xl', '7xl']}
          bgGradient={'linear(to-r, #fe8c00,#f83600)'}
          bgClip={'text'}
        >
          Let&apos;s talk.
        </Text>
        <Flex
          flexDir={'column'}
          gap='1rem'
          px='1rem'
          alignContent={'center'}
          justifyContent='center'
        >
          <Input
            color='gray.400'
            colorScheme={'orange'}
            placeholder='Name'
            _focus={{ borderColor: 'orange' }}
          ></Input>

          <Input
            color='gray.400'
            colorScheme={'orange'}
            placeholder='Email'
            _focus={{ borderColor: 'orange' }}
          ></Input>
          <Textarea
            color='gray.400'
            colorScheme={'orange'}
            placeholder='Message'
            h='8rem'
            maxH='13rem'
            _focus={{ borderColor: 'orange' }}
          ></Textarea>
          <Center>
            <ChakraButton
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              border='.5px'
              px={'30px'}
              py='10px'
              rounded={'md'}
              bgColor='gray.50'
              color='black'
              w='auto'
              mt='1em'
              _hover={{
                bgGradient: 'linear(to right, #fe8c00,#f83600)',
                color: 'white',
              }}
              userSelect='none'
            >
              Submit
            </ChakraButton>
          </Center>
        </Flex>
      </Flex>
    </Center>
  )
}
