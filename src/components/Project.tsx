import { Image, Center, Flex, Stack, Text } from '@chakra-ui/react'

export const Project = ({
  style,
  gradientStyle = 'linear',
  gradientDirection = false,
  gradientColor1,
  gradientColor2,
  projectName,
  textColor = 'blackAlpha.700',
}: any) => {
  return (
    <>
      <Center
        rounded={'3xl'}
        style={style}
        bgGradient={
          gradientDirection
            ? `${gradientStyle}(${gradientDirection}, ${gradientColor1}, ${gradientColor2})`
            : `${gradientStyle}(${gradientColor1}, ${gradientColor2})`
        }
      >
        {/* <Image
          rounded={'3xl'}
          src={`/images/${bg}`}
          w="100%"
          h="100%"
          alt="project photo"
          zIndex={'-1'}
          position="absolute"
        ></Image> */}
        <Flex flexDir={'column'} textAlign={'center'} w="80%">
          <Text fontSize={'7xl'} color={textColor}>
            {projectName}
          </Text>
          <Text mt="1rem" fontSize={'3xl'} color={textColor}>
            Some more small detail about the project.
          </Text>
          <Text mt="3rem" fontSize={'xl'} color={textColor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Flex>
      </Center>
    </>
  )
}
