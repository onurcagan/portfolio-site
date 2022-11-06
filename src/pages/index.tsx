import { Flex } from '@chakra-ui/react'
import { About } from '../components/About'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ScrollToTop } from '../components/ScrollToTop'
import { Section1 } from '../components/Section1'
import { ContactMe } from '../components/ContactMe'

export default function Home() {
  return (
    <>
      <Flex bgGradient={'linear(to-b, black, #030303)'} minHeight={'100vh'} flexDirection={'column'} overflow="auto">
        <div id="about">
          <Header />
          <About />
        </div>
        <div id="section1">
          <Section1 />
        </div>
        <div id="contactme">
          <ContactMe />
        </div>
        <Footer />
        <ScrollToTop />
      </Flex>
    </>
  )
}
