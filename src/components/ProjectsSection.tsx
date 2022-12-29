import { Center, Flex } from '@chakra-ui/react'
import { projectsData } from '../../data/projectsData'
import { Card } from './Card'

export const ProjectsSection = () => {
  return (
    <Center>
      <Flex
        position={'relative'}
        justify='center'
        gap='2rem'
        px='1rem'
        pt='5rem'
        minH='100vh'
        h='auto'
        w='100%'
        flexWrap='wrap'
      >
        {projectsData.map((props) => (
          <Card key={props.projectName} {...props} />
        ))}
      </Flex>
    </Center>
  )
}
