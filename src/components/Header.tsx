import { Box, Button, Center, Flex, IconButton } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import Link from 'next/link'

export const Header = () => {
  const [display, setDisplay] = useState('none')

  return (
    <Box bg={'blackAlpha.100'} maxHeight={'12vh'} height="12vh" display={'flex'} verticalAlign={'center'}>
      <Flex maxHeight={'100%'} mr="3rem" gap={'3rem'} display={['none', 'flex', 'flex', 'flex']} ml="auto" alignItems={'center'}>
        <Link href="#about">
          <Button colorScheme={'blackAlpha'} color={'gray.400'} variant={'link'}>
            Home
          </Button>
        </Link>
        <Link href="#section1">
          <Button colorScheme={'blackAlpha'} color={'gray.400'} variant={'link'}>
            Projects
          </Button>
        </Link>
        <Link href="#section2">
          <Button colorScheme={'blackAlpha'} color={'gray.400'} variant={'link'}>
            Contact Me
          </Button>
        </Link>
      </Flex>

      <Flex mb={'1rem'} ml={'auto'} mr={'2rem'} mt={'1rem'} display={['flex', 'none', 'none', 'none']}>
        <IconButton
          display={['flex', 'none', 'none', 'none']}
          size={'md'}
          aria-label="Open Menu"
          alignSelf={'center'}
          icon={<HamburgerIcon />}
          colorScheme="purple"
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
          <Flex flexDir="column" pr="2rem" pl="2rem" gap={'3rem'} alignItems="center">
            <Link href="#about">
              <Button colorScheme="purple" size={'lg'} minWidth="60vw" onClick={() => setDisplay('none')}>
                Home
              </Button>
            </Link>
            <Link href="#section1">
              <Button colorScheme="purple" size={'lg'} minWidth="60vw" onClick={() => setDisplay('none')}>
                Projects
              </Button>
            </Link>
            <Link href="#section2">
              <Button colorScheme="purple" size={'lg'} minWidth="60vw" onClick={() => setDisplay('none')}>
                Contact Me
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
