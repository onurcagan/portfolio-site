import { Center, Flex } from '@chakra-ui/react'
import { Card } from './Card'

export const ProjectsSection = () => {
  return (
    <Center>
      <Flex
        position={'relative'}
        // flexDir={['column', 'column', 'column', 'column', 'row']}
        // display={['flex', 'flex', 'flex', 'grid', 'grid']}
        // gridTemplateColumns={'repeat(3, 1fr)'}
        justify='center'
        gap='2rem'
        px='1rem'
        pt='5rem'
        minH='100vh'
        h='auto'
        w='100%'
        flexWrap='wrap'
      >
        <Card
          projectShortDetail={`Automates a medical process. I worked on front and the back-end of this application.`}
          subText={'Desktop App - C# · WPF'}
          projectName={'GENEO'}
        />
        <Card
          projectShortDetail={
            'Generates random English words and provides definitions, example sentences, synonyms and pronunciations.'
          }
          subText={'CRA Site - TS · React Query'}
          projectName={'English Learning Assistant'}
        />
        <Card
          projectShortDetail={
            'Notifies employees about the arrival of new tickets which saves the need to manually refresh and be present by the computer.'
          }
          subText={'Automation - AHK · Slack Bot'}
          projectName={'Ticket Notifier Script'}
        />
        <Card
          projectShortDetail={'A quick calculator app I built using WPF to get the hang of things.'}
          subText={'Learning Project - C# · WPF'}
          projectName={'ReCalculator'}
        />
        <Card
          projectShortDetail={
            "Elise is an E-Commerce project I've been meaing to have a go at for a long while and I've finally got the chance. Authentication and Global State Management stuff will be fun."
          }
          subText={'E-Commerce - NextJS · React · ChakraUI'}
          projectName={'Elise'}
        />
      </Flex>
    </Center>
  )
}
