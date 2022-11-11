import { Center, Flex, SimpleGrid } from '@chakra-ui/react'
import { Card } from './Card'

export const ProjectsSection = () => {
  return (
    <Flex
      position={'relative'}
      flexDir={['column', 'column', 'column', 'column', 'row']}
      justify="center"
      gap="2rem"
      px="1rem"
      pt="5rem"
      minH="100vh"
      h="auto"
      w="100%"
    >
      <Card />
      <Card />
      <Card />
      <Card />
    </Flex>
  )
}
