import { Center, Flex } from '@chakra-ui/react'
import { projectsData } from '../../data/projectsData'
import { photos } from '../../data/photos'
import { Card } from './Card'

export const ProjectsSection = () => {
  return (
    <Center>
      <Flex position={'relative'} justify="center" gap="2rem" px="1rem" pt="5rem" minH="100vh" h="auto" w="100%" flexWrap="wrap">
        {projectsData.map((props, index) => (
          <Card key={props.projectName} photo={photos[index]} {...props} />
        ))}
      </Flex>
    </Center>
  )
}
