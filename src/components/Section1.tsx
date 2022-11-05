import { IconButton, Button, Center, Container, Flex, Image, Text } from '@chakra-ui/react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

export const Section1 = () => {
  const autoplay = Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [autoplay])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index: any) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const emblaSlideStyles = { flex: '0 0 100%', maxWidth: '100%', marginRight: '20px', marginLeft: '20px' }
  return (
    <>
      <Center height={'100vh'} alignItems={'center'} p="1rem" rounded="3xl" mx="3rem">
        <Flex className="embla" overflow="hidden" maxHeight="100%" rounded="3xl" position="relative">
          <Flex className="embla__viewport" rounded={'3xl'} ref={emblaRef}>
            <Flex className="embla__container" h={['100vh', '80vh', '70vh', '70vh']} w={['100vw', '80vw', '70vw', '70vw']}>
              <Image
                fontSize="3xl"
                className="embla__slide"
                style={emblaSlideStyles}
                alt="first image"
                src="/images/first.jpg"
                rounded="3xl"
                w="100%"
              />
              <Image
                fontSize="3xl"
                className="embla__slide"
                style={emblaSlideStyles}
                alt="second image"
                src="/images/second.jpg"
                rounded="3xl"
              />
              <Image
                fontSize="3xl"
                className="embla__slide"
                style={emblaSlideStyles}
                alt="third image"
                src="/images/third.jfif"
                rounded="3xl"
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
            left="2"
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
            right="2"
          />
        </Flex>
      </Center>
    </>
  )
}
