import { ComponentDefaultProps, Text } from '@chakra-ui/react'

export const StyledText = (props: ComponentDefaultProps) => {
  const { children, ...otherProps } = props
  return (
    <Text
      w={['75%', '65%', '40%']}
      mx='auto'
      fontSize={'md'}
      textAlign='center'
      color='white'
      {...otherProps}
    >
      {children}
    </Text>
  )
}
