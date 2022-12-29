import { Text, Flex, Image, chakra, shouldForwardProp, Skeleton } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { getProjectDetail } from '../../src/helper/getProjectDetail'

export default function ProjectPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const router = useRouter()
  const { projectName } = router.query
  const { name, image, description } = getProjectDetail(projectName as string)

  const ChakraButton = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  })
  return (
    <Flex
      bg={`url('/images/texture.svg'), linear-gradient(to top, black, #3a3838	 ) `}
      minHeight={'100vh'}
      flexDirection={'column'}
      justifyContent='center'
      alignItems={'center'}
      py='1rem'
      gap={'2rem'}
      flexWrap='wrap'
    >
      <ChakraButton
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
        border='1px'
        borderColor={'gray'}
        mt='.5rem'
        px={'15px'}
        py='8px'
        rounded={'lg'}
        bgGradient='linear(to-br, #fe8c00,#f83600)'
        color='white'
        w='auto'
        _hover={{
          bgGradient: 'linear(to top left, #fe8c00,#f83600)',
          color: 'white',
        }}
        userSelect='none'
        onClick={() => router.push('/#projects-section')}
      >
        <Text as='i' fontSize='md'>
          Go Back
        </Text>
      </ChakraButton>

      <Text
        fontWeight={'extrabold'}
        w={['75%', '50%']}
        mx='auto'
        fontSize={['2.5rem', '3rem']}
        textAlign='center'
        bgGradient={'linear(to-r, #fe8c00,#f83600)'}
        bgClip={'text'}
      >
        {name}
      </Text>

      <Skeleton isLoaded={isLoaded} fadeDuration={2}>
        <Image
          rounded={'2xl'}
          maxW={['80vw', '50vw', '30vw']}
          mx='auto'
          src={image}
          alt='project photo'
          onLoad={() => setIsLoaded(true)}
        ></Image>
      </Skeleton>

      {description}
    </Flex>
  )
}
