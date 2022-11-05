import { Flex } from '@chakra-ui/react'
import { About } from '../components/About'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ScrollToTop } from '../components/ScrollToTop'
import { Section1 } from '../components/Section1'
import { Section2 } from '../components/Section2'

export default function Home() {
  return (
    <>
      <Flex minHeight={'100vh'} flexDirection={'column'} background={'black'} overflow="auto">
        <div id="about">
          <Header />
          <About />
        </div>
        <div id="section1">
          <Section1 />
        </div>
        <div id="section2">
          <Section2 />
        </div>
        <Footer />
        <ScrollToTop />
      </Flex>
    </>
  )
}
