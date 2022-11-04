import { Avatar, Box, Button, Flex, Icon, IconButton, Spacer } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import Link from 'next/link'

export const Header = () => {
  const [display, setDisplay] = useState('none')

  return (
    <Box bg={'blackAlpha.100'} height={'12vh'}>
      <Flex mb={'1rem'} ml={'2rem'} mr={'2rem'} mt={'1rem'}>
        <Avatar h={['4rem', '6rem', '8rem', null]} w={'auto'} src="/images/coolicon.jpg" />
        <Spacer />
        <Flex mb={'1.3rem'} alignItems={'center'} gap={'0.2rem'} display={['none', 'flex', 'flex', 'flex']}>
          <Button colorScheme={'red'} color={'gray.400'} variant={'ghost'}>
            Home
          </Button>
          <Button colorScheme={'red'} color={'gray.400'} variant={'ghost'}>
            Projects
          </Button>
          <Button colorScheme={'red'} color={'gray.400'} variant={'ghost'}>
            Contact Me
          </Button>
        </Flex>
        <IconButton
          display={['flex', 'none', 'none', 'none']}
          size={'md'}
          aria-label="Open Menu"
          alignSelf={'center'}
          icon={<HamburgerIcon />}
          onClick={() => setDisplay('flex')}
        />
        <Flex
          top={'0'}
          left={'0'}
          pos={'fixed'}
          bgColor={'gray.800'}
          zIndex={'30'}
          height={'100vh'}
          width={'100vw'}
          display={display}
          flexDir={'column'}
          gap={'3rem'}
          overflow={'auto'}
        >
          <IconButton
            colorScheme={'purple'}
            mt="1rem"
            ml={'auto'}
            mr="2rem"
            size={'sm'}
            width={'1rem'}
            aria-label="Close Icon"
            icon={<CloseIcon />}
            onClick={() => setDisplay('none')}
          />
          <Flex flexDir="column" pr="2rem" pl="2rem" gap={'3rem'}>
            <Button colorScheme="purple" size={'lg'}>
              Home
            </Button>
            <Button colorScheme="purple" size={'lg'}>
              Projects
            </Button>
            <Button colorScheme="purple" size={'lg'}>
              Contact Me
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
