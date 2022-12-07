import { Center, Flex } from '@chakra-ui/react'
import { ProjectMain } from '../src/components/ProjectMain'

export default function SomeComponent() {
  return (
    <Flex
      bg={`url('/images/texture.svg'), linear-gradient(to top, black, #3a3838	 ) `}
      minHeight={'100vh'}
      flexDirection={'column'}
      alignContent={'center'}
      justifyContent='center'
    >
      <ProjectMain />
    </Flex>
  )
}
