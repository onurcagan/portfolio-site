import { Flex } from '@chakra-ui/react'
import { Card } from './Card'

export const ProjectsSection = () => {
  return (
    <Flex
      position={'relative'}
      flexDir={['column', 'column', 'column', 'column', 'row']}
      justify='center'
      gap='2rem'
      px='1rem'
      pt='5rem'
      minH='100vh'
      h='auto'
      w='100%'
    >
      <Card
        projectShortDetail={`This product is about automating a medical process. I worked on front and the back-end of this application.`}
        subText={'Desktop App - C# · WPF'}
        projectName={'GENEO'}
      />
      <Card
        projectShortDetail={
          'This site was developed to generate random English words and provide definitions, example sentences, synonyms and pronunciations.'
        }
        subText={'CRA Site - TS · React Query'}
        projectName={'English Learning Assistant'}
      />
      <Card
        projectShortDetail={
          'A script I wrote to notify employees about the arrival of new tickets which saves the need to manually refresh and be present by the computer.'
        }
        subText={'Automation - AutoHotkey · Slack Bot'}
        projectName={'Ticket Notifier Script'}
      />
      <Card
        projectShortDetail={'A quick calculator app I built using WPF to get the hang of things.'}
        subText={'Learning Project - C# · WPF'}
        projectName={'ReCalculator'}
      />
    </Flex>
  )
}
