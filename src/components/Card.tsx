import { Center, Box, Image, Stack, Heading, Text, Flex } from '@chakra-ui/react'
export const Card = ({ subText, projectName, projectShortDetail }: any) => {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
        minH='440px'
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
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
              filter: 'blur(20px)',
            },
          }}
        >
          <Image
            alt='Project Image'
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={'/images/placeHolder.jpeg'}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'}>
            {subText}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {projectName}
          </Heading>
        </Stack>
        <Flex alignItems={'center'} justifyContent='center'>
          <Text
            fontWeight={400}
            fontSize={'medium'}
            textAlign='center'
            alignItems={'flex-end'}
            w='100%'
            my={'auto'}
          >
            {projectShortDetail}
          </Text>
        </Flex>
      </Box>
    </Center>
  )
}
