import { Text } from '@chakra-ui/react'
import Link from 'next/link'
import { ReactElement } from 'react'
import { StyledText } from '../components/StyledText'
import { getProjectDetailReturnTypes } from '../types/projectData'

// TODO: Replace this with placing these stuff in objects instead of this long switch statement.
/**
 *
 * @param projectName name of the project.
 * @returns an object with name, image, description values.
 */
export function getProjectDetail(projectName: string): getProjectDetailReturnTypes {
  // undefined is set because otherwise I get an error saying "Variable name/image/description is used before being assigned."
  let name: string | undefined
  let image: string | undefined
  let description: ReactElement | undefined

  switch (projectName) {
    case 'neoseq':
      name = 'NeoSEQ by GeneoLab'
      image =
        'https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGV8ZW58MHx8MHx8&w=1000&q=80'
      description = (
        <StyledText>
          <Text as='b'>NEOseq</Text> is a cutting-edge genomic data analysis platform that I was
          heavily involved in developing as a front-end engineer. <br />
          <br /> I was responsible for designing and implementing the user interface, as well as
          integrating the front-end with the back-end. <br />
          <br /> NEOseq provides real-time processing and interpretation of genomic data,
          clinical-based analysis modules, and a coverage tool to guarantee precision at the
          nucleotide level. It also offers personalized reports on nutrition, sports,
          pharmacogenomics, and infection susceptibility. <br />
          <br /> I am proud of my contributions to the development of NEOseq and its impact on our
          team&lsquo;s efficiency and productivity.
        </StyledText>
      )
      break
    case 'elise':
      name = 'Elise'
      image =
        'https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGV8ZW58MHx8MHx8&w=1000&q=80'
      description = (
        <StyledText>
          <Text as='b' display={'inline'}>
            Elise
          </Text>{' '}
          is an e-commerce website built with NextJS and ChakraUI. It is currently under
          construction, but you can visit it{' '}
          <Link href='https://onurs-ecommerce-site.netlify.app/' color={'orange'}>
            here
          </Link>
          . <br />
          <br /> Elise will be a modern and user-friendly platform for buying and selling products
          online. It will feature a clean and intuitive interface, fast and secure payment
          processing, and a wide range of products to choose from. <br />
          <br />
          Stay tuned for more updates as I continue to develop and improve Elise.
        </StyledText>
      )
      break
    case 'english-learning-assistant':
      name = 'English Learning Assistant'
      image =
        'https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGV8ZW58MHx8MHx8&w=1000&q=80'
      description = (
        <StyledText>
          I developed{' '}
          <Text as='b' display={'inline'}>
            English Learning Assistant
          </Text>{' '}
          as a tool to help my fiancée improve her English skills. <br />
          <br /> The website generates random English words, along with their definitions, synonyms,
          and pronunciations, to provide a comprehensive learning experience. I built English
          Learning Assistant using a variety of APIs to access the necessary data, which allowed me
          to gain experience working with different APIs and integrate them into a single project.
          <br />
          <br />
          English Learning Assistant has proven to be an effective learning tool, and I am proud of
          the positive impact it has had on my fiancée&lsquo;s English skills.
        </StyledText>
      )
      break
    case 'recalculator':
      name = 'ReCalculator'
      image = '/images/recalculator.png'
      description = (
        <StyledText>
          <Text as='b' display={'inline'}>
            ReCalculator
          </Text>{' '}
          is a modern calculator app built with WPF and C#. <br />
          <br /> It is designed to be fast and easy to use, with a modern and intuitive interface.
          Recalculator can perform all the basic arithmetic operations. <br />
          <br />
          Whether you&lsquo;re a student, a professional, or just someone who needs a calculator on
          a daily basis, Recalculator is the perfect tool for you.
          <br />
          <br /> Try it out today!
        </StyledText>
      )
      break
    case 'ahk-script':
      name = 'Ticket Notifier'
      image = '/images/ahk.webp'
      description = (
        <StyledText>
          <Text as='b' display={'inline'}>
            Ticket Notifier
          </Text>{' '}
          is an AutoHotkey script that I created to improve my company&lsquo;s workflow.
          <br />
          <br /> It automatically sends notifications to the relevant departments and people when
          important developments occur. This helps to ensure that everyone is kept up to date and
          can take the necessary action in a timely manner.
          <br />
          <br /> Ticket Notifier has significantly improved our team&lsquo;s efficiency and
          productivity, and I&lsquo;m proud to have contributed to its development.
        </StyledText>
      )
      break
  }
  return { name, image, description }
}
