import { Center, Image, Stack, Text, chakra, shouldForwardProp } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'
import Link from 'next/link'

export const Card = ({ subText, projectName, projectShortDetail, projectUrl }: any) => {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  })

  return (
    <Center py={8} flexBasis="25%" minW="330px">
      <Link href={`/projects/${projectUrl}`}>
        <ChakraBox
          whileHover={{ scale: 1.03 }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 25,
          }}
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={'white'}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
          minH="500px"
          display={'flex'}
          flexDir="column"
        >
          <ChakraBox
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            display="flex"
            justifyContent="center"
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 7,
              left: 0,
              backgroundImage: `url(${'/images/placeHolder.jpeg'})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(30px)',
              },
            }}
          >
            <Image
              alt="Project Image"
              rounded={'lg'}
              height={230}
              width={'95%'}
              objectFit={'cover'}
              src={'/images/placeHolder.jpeg'}
            />
          </ChakraBox>
          <Stack pt={'2.5rem'} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textAlign="center">
              {subText}
            </Text>
            <Text fontSize={'2xl'} textAlign="center" fontWeight={900}>
              {projectName}
            </Text>
          </Stack>
          <Text my="auto" fontWeight={400} fontSize={'medium'} textAlign="center">
            {projectShortDetail}
          </Text>
          <Text as="i" color={'gray.500'} fontSize={'xs'} textAlign="center" bottom={'0'}>
            Click for more details.
          </Text>
        </ChakraBox>
      </Link>
    </Center>
  )
}
