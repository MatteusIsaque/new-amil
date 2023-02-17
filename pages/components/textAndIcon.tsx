import { Flex, Icon, Text, FlexProps } from '@chakra-ui/react'
import { BsCheckLg } from 'react-icons/bs'

interface TextAndButton extends FlexProps {
  text: string
}

export function TextAndButton({text, ...rest}:TextAndButton) {

  return (
    <Flex justifyContent='center' alignItems='center' {...rest}>
      <Icon as={BsCheckLg} />
      <Text ml='4px' fontSize='22px' fontWeight='700'>
        {text}
      </Text>
    </Flex>
  )
}