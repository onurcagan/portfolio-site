import { Text, Flex, Image, Stack, ComponentDefaultProps, Link } from '@chakra-ui/react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

import { useRouter } from 'next/router'

export default function ProjectPage() {
  const router = useRouter()
  const { projectName } = router.query

  const StyledText = (props: ComponentDefaultProps) => {
    const { children, ...otherProps } = props
    return (
      <Text
        w={['75%', '65%', '40%']}
        mx='auto'
        fontSize={'md'}
        textAlign='center'
        color='white'
        {...otherProps}
      >
        {children}
      </Text>
    )
  }

  switch (projectName) {
    case 'neoseq':
      var name: string | undefined = 'NeoSEQ by GeneoLab'
      var image: string | undefined =
        'https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGV8ZW58MHx8MHx8&w=1000&q=80'
      var description: ReactJSXElement | undefined = (
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
          team's efficiency and productivity.
        </StyledText>
      )
      break
    case 'elise':
      var name: string | undefined = 'Elise'
      var image: string | undefined =
        'https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGV8ZW58MHx8MHx8&w=1000&q=80'
      var description: ReactJSXElement | undefined = (
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
      var name: string | undefined = 'English Learning Assistant'
      var image: string | undefined =
        'https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGV8ZW58MHx8MHx8&w=1000&q=80'
      var description: ReactJSXElement | undefined = (
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
          the positive impact it has had on my fiancée's English skills.
        </StyledText>
      )
      break
    case 'recalculator':
      var name: string | undefined = 'ReCalculator'
      var image: string | undefined = '/images/recalculator.png'
      var description: ReactJSXElement | undefined = (
        <StyledText>
          <Text fontWeight={'extrabold'} display={'inline'}>
            ReCalculator
          </Text>{' '}
          is a modern calculator app built with WPF and C#. <br />
          <br /> It is designed to be fast and easy to use, with a modern and intuitive interface.
          Recalculator can perform all the basic arithmetic operations. <br />
          <br />
          Whether you're a student, a professional, or just someone who needs a calculator on a
          daily basis, Recalculator is the perfect tool for you.
          <br />
          <br /> Try it out today!
        </StyledText>
      )
      break
    case 'ahk-script':
      var name: string | undefined = 'Ticket Notifier'
      var image: string | undefined = '/images/ahk.webp'
      var description: ReactJSXElement | undefined = (
        <StyledText>
          <Text as='b' display={'inline'}>
            Ticket Notifier
          </Text>{' '}
          is an AutoHotkey script that I created to improve my company's workflow.
          <br />
          <br /> It automatically sends notifications to the relevant departments and people when
          important developments occur. This helps to ensure that everyone is kept up to date and
          can take the necessary action in a timely manner.
          <br />
          <br /> Ticket Notifier has significantly improved our team's efficiency and productivity,
          and I'm proud to have contributed to its development.
        </StyledText>
      )
      break
    default:
      // Find out what to do here
      break
  }
  return (
    <Flex
      bg={`url('/images/texture.svg'), linear-gradient(to top, black, #3a3838	 ) `}
      minHeight={'100vh'}
      flexDirection={'column'}
      justifyContent='center'
      py='1rem'
      gap={'2rem'}
      flexWrap='wrap'
    >
      <Text
        fontWeight={'extrabold'}
        w={['75%', '50%']}
        mx='auto'
        fontSize={['12vw', '10vw', '7vw', '5vw']}
        textAlign='center'
        bgGradient={'linear(to-r, #fe8c00,#f83600)'}
        bgClip={'text'}
      >
        {name}
      </Text>
      <Image rounded={'2xl'} maxW={['90vw', '50vw', '30vw']} mx='auto' src={image}></Image>
      {description}
    </Flex>
  )
}
