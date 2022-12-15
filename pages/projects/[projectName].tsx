import { Text, Flex, Image, ComponentDefaultProps, Link, chakra, shouldForwardProp, Skeleton } from '@chakra-ui/react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { isValidMotionProp, motion } from 'framer-motion'

import { useRouter } from 'next/router'
import { useState } from 'react'

export default function ProjectPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const router = useRouter()
  const { projectName } = router.query

  const ChakraButton = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  })

  const StyledText = (props: ComponentDefaultProps) => {
    const { children, ...otherProps } = props
    return (
      <Text w={['75%', '65%', '40%']} mx="auto" fontSize={'md'} textAlign="center" color="white" {...otherProps}>
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
          <Text as="b">NEOseq</Text> is a cutting-edge genomic data analysis platform that I was heavily involved in developing as
          a front-end engineer. <br />
          <br /> I was responsible for designing and implementing the user interface, as well as integrating the front-end with
          the back-end. <br />
          <br /> NEOseq provides real-time processing and interpretation of genomic data, clinical-based analysis modules, and a
          coverage tool to guarantee precision at the nucleotide level. It also offers personalized reports on nutrition, sports,
          pharmacogenomics, and infection susceptibility. <br />
          <br /> I am proud of my contributions to the development of NEOseq and its impact on our team&lsquo;s efficiency and
          productivity.
        </StyledText>
      )
      break
    case 'elise':
      var name: string | undefined = 'Elise'
      var image: string | undefined =
        'https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGV8ZW58MHx8MHx8&w=1000&q=80'
      var description: ReactJSXElement | undefined = (
        <StyledText>
          <Text as="b" display={'inline'}>
            Elise
          </Text>{' '}
          is an e-commerce website built with NextJS and ChakraUI. It is currently under construction, but you can visit it{' '}
          <Link href="https://onurs-ecommerce-site.netlify.app/" color={'orange'}>
            here
          </Link>
          . <br />
          <br /> Elise will be a modern and user-friendly platform for buying and selling products online. It will feature a clean
          and intuitive interface, fast and secure payment processing, and a wide range of products to choose from. <br />
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
          <Text as="b" display={'inline'}>
            English Learning Assistant
          </Text>{' '}
          as a tool to help my fiancée improve her English skills. <br />
          <br /> The website generates random English words, along with their definitions, synonyms, and pronunciations, to
          provide a comprehensive learning experience. I built English Learning Assistant using a variety of APIs to access the
          necessary data, which allowed me to gain experience working with different APIs and integrate them into a single
          project.
          <br />
          <br />
          English Learning Assistant has proven to be an effective learning tool, and I am proud of the positive impact it has had
          on my fiancée&lsquo;s English skills.
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
          <br /> It is designed to be fast and easy to use, with a modern and intuitive interface. Recalculator can perform all
          the basic arithmetic operations. <br />
          <br />
          Whether you&lsquo;re a student, a professional, or just someone who needs a calculator on a daily basis, Recalculator is
          the perfect tool for you.
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
          <Text as="b" display={'inline'}>
            Ticket Notifier
          </Text>{' '}
          is an AutoHotkey script that I created to improve my company&lsquo;s workflow.
          <br />
          <br /> It automatically sends notifications to the relevant departments and people when important developments occur.
          This helps to ensure that everyone is kept up to date and can take the necessary action in a timely manner.
          <br />
          <br /> Ticket Notifier has significantly improved our team&lsquo;s efficiency and productivity, and I&lsquo;m proud to
          have contributed to its development.
        </StyledText>
      )
      break
    default:
      // TODO: Find out what to do here
      break
  }
  return (
    <Flex
      bg={`url('/images/texture.svg'), linear-gradient(to top, black, #3a3838	 ) `}
      minHeight={'100vh'}
      flexDirection={'column'}
      justifyContent="center"
      alignItems={'center'}
      py="1rem"
      gap={'2rem'}
      flexWrap="wrap"
    >
      <ChakraButton
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
        border="1px"
        borderColor={'gray'}
        mt=".5rem"
        px={'15px'}
        py="8px"
        rounded={'lg'}
        bgGradient="linear(to-br, #fe8c00,#f83600)"
        color="white"
        w="auto"
        _hover={{
          bgGradient: 'linear(to top left, #fe8c00,#f83600)',
          color: 'white',
        }}
        userSelect="none"
        onClick={() => router.push('/#projects-section')}
      >
        <Text as="i" fontSize="md">
          Go Back
        </Text>
      </ChakraButton>

      <Text
        fontWeight={'extrabold'}
        w={['75%', '50%']}
        mx="auto"
        fontSize={['2.5rem', '3rem']}
        textAlign="center"
        bgGradient={'linear(to-r, #fe8c00,#f83600)'}
        bgClip={'text'}
      >
        {name}
      </Text>

      <Skeleton isLoaded={isLoaded} fadeDuration={2}>
        <Image
          rounded={'2xl'}
          maxW={['80vw', '50vw', '30vw']}
          mx="auto"
          src={image}
          alt="project photo"
          onLoad={() => setIsLoaded(true)}
        ></Image>
      </Skeleton>

      {description}
    </Flex>
  )
}
