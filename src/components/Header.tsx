import { Avatar, Box, Button, Flex, Spacer, Stack } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Box bg={'blackAlpha.100'} height={'12vh'}>
      <Flex marginBottom={'30px'} marginLeft={'200px'} marginRight={'200px'} marginTop={'30px'}>
        <Avatar
          height={'100px'}
          width={'auto'}
          src="https://papik.pro/en/uploads/posts/2022-06/1655733841_1-papik-pro-p-cool-avatar-pictures-1.jpg"
        />
        <Spacer />
        <Flex alignItems={'center'} gap={'50px'}>
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
      </Flex>
    </Box>
  )
}
