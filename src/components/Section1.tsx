import { Box, Center, Container, Flex, Image, Text } from '@chakra-ui/react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export const Section1 = () => {
  const autoplay = Autoplay({ delay: 1000, stopOnInteraction: false, stopOnMouseEnter: true })
  const [emblaRef] = useEmblaCarousel({ loop: false, align: 'center' }, [autoplay])
  const emblaSlideStyles = { flex: '0 0 auto' }
  return (
    <>
      <Center bg={'red.800'} height={'88vh'} alignItems={'center'}>
        <div className="embla" ref={emblaRef} style={{ overflow: 'hidden' }}>
          <Flex className="embla__container" style={{ gap: '50vw', height: '75vh' }}>
            <Image fontSize="3xl" className="embla__slide" style={emblaSlideStyles} alt="first image" src="/images/first.jpg" />
            <Image fontSize="3xl" className="embla__slide" style={emblaSlideStyles} alt="second image" src="/images/second.jpg" />
            <Image fontSize="3xl" className="embla__slide" style={emblaSlideStyles} alt="third image" src="/images/third.jfif" />
          </Flex>
        </div>
      </Center>
    </>
  )
}
