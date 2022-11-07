import { IconButton, Button, Center, Container, Flex, Image, Text } from '@chakra-ui/react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Project } from './Project'

export const Section1 = () => {
  const autoplay = Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [autoplay])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index: any) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const emblaSlideStyles = { flex: '0 0 100%', maxWidth: '100%', marginRight: '2rem', marginLeft: '2rem' }

  return (
    <>
      <Center height={'100vh'} alignItems={'center'} p="1rem" rounded="3xl" mx="3rem">
        <Flex className="embla" overflow="hidden" maxHeight="100%" rounded="3xl" position="relative">
          <Flex className="embla__viewport" rounded={'3xl'} ref={emblaRef}>
            <Flex className="embla__container" h={['100vh', '80vh', '70vh', '70vh']} w={['100vw', '80vw', '70vw', '70vw']}>
              <Project
                style={emblaSlideStyles}
                bg="bg1.png"
                projectName="English Learning Assistant"
                gradientStyle="linear"
                gradientDirection="to-tr"
                gradientColor1="#000000"
                gradientColor2="#130F40"
                textColor="gray.400"
              />
              <Project
                style={emblaSlideStyles}
                bg="bg2.png"
                projectName="GENEO"
                textColor="gray.400"
                gradientStyle="linear"
                gradientDirection="to-bl"
                gradientColor1="#000"
                gradientColor2="#A55C1B"
              />
              <Project
                style={emblaSlideStyles}
                bg="bg3.png"
                projectName="AHK Script"
                textColor="gray.400"
                gradientStyle="radial"
                gradientColor1="#474747"
                gradientColor2="#000000"
              />
            </Flex>
          </Flex>
          <IconButton
            variant="unstyled"
            icon={<ArrowLeftIcon color="gray.300" alignSelf={'center'} verticalAlign="center" />}
            aria-label="previous button"
            size="lg"
            fontSize="4xl"
            className="embla__prev"
            onClick={scrollPrev}
            position="absolute"
            alignSelf="center"
            left="5"
          />
          <IconButton
            variant="unstyled"
            icon={<ArrowRightIcon color="gray.300" alignSelf={'center'} verticalAlign="center" />}
            aria-label="next button"
            size="lg"
            fontSize="4xl"
            className="embla__next"
            onClick={scrollNext}
            position="absolute"
            alignSelf="center"
            right="5"
          />
        </Flex>
      </Center>
    </>
  )
}
