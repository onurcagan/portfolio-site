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
          projectShortDetail={'An E-Commerce site that is under construction.'}
          subText={'E-Commerce - NextJS · React · ChakraUI'}
          projectName={'Elise'}
          projectUrl={'elise'}
        />
        <Card
          projectShortDetail={`Automates a medical process. I worked on front and the back-end of this application.`}
          subText={'Desktop App - C# · WPF'}
          projectName={'NeoSEQ'}
          projectUrl={'neoseq'}
        />
        <Card
          projectShortDetail={
            'Generates random English words and provides definitions, example sentences, synonyms and pronunciations.'
          }
          subText={'CRA Site - TS · React Query'}
          projectName={'English Learning Assistant'}
          projectUrl={'english-learning-assistant'}
        />

        <Card
          projectShortDetail={
            'Notifies employees about the arrival of new tickets which saves the need to manually refresh and be present by the computer.'
          }
          subText={'Automation - AHK · Slack Bot'}
          projectName={'Ticket Notifier Script'}
          projectUrl={'ahk-script'}
        />
        <Card
          projectShortDetail={'A quick calculator app I built using WPF to get the hang of things.'}
          subText={'Learning Project - C# · WPF'}
          projectName={'ReCalculator'}
          projectUrl={'recalculator'}
        />
      </Flex>
    </Center>
  )
}
