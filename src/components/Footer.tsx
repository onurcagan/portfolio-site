import { Box, Center } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Center mx={['null', 'null', '3rem', '3rem']} bg={'gray.900'} marginTop={'auto'} roundedTop="full">
      <Box color={'gray.400'}>© 2022 Onur Çağan - All Rights Reserved. </Box>
    </Center>
  )
}
