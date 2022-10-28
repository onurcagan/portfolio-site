import { Box, Center, Container, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Section1 } from '../components/Section1'
import { Section2 } from '../components/Section2'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Flex minHeight={'100vh'} flexDirection={'column'} background={'black'}>
        <Header />
        <Section1 />
        <Section2 />
        <Footer />
      </Flex>
    </>
  )
}
