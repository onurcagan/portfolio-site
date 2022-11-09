import { Box, Center } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Center mx={['null', '2rem', '5rem', '10rem']} bg={'black'} marginTop={'auto'} roundedTop="2xl">
      <Box color={'gray.400'}>© 2022 - Onur Çağan </Box>
    </Center>
  )
}
