import { Container, Flex, Image } from '@chakra-ui/react'
import { About } from '../src/components/About'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import { ScrollToTop } from '../src/components/ScrollToTop'
import { ContactMe } from '../src/components/ContactMe'
import { ProjectsSection } from '../src/components/ProjectsSection'

export default function Home() {
  return (
    <>
      <Container
        px='0'
        bg={`url('/images/texture.svg'), linear-gradient(to bottom, black, #3a3838, black	 ) `}
        minH={'100vh'}
        maxW='100vw'
      >
        <Flex flexDirection={'column'} maxW='100%' justifyContent={'center'} alignContent='center'>
          <div id='about'>
            <Container px='0' h='100vh' maxW='100%' pos='absolute'>
              <Image
                src='/images/animation.svg'
                alt='background animation'
                zIndex={'1'}
                h='100vh'
                w='100%'
                maxW='100%'
                objectFit='cover'
              />
            </Container>
            <Header />
            <About />
          </div>
          <div id='projects-section'>
            <ProjectsSection />
          </div>
          <div id='contact-me'>
            <ContactMe />
          </div>
          <Footer />
          <ScrollToTop />
        </Flex>
      </Container>
    </>
  )
}
