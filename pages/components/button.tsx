import { Button, ButtonProps } from '@chakra-ui/react'

interface ButtonPropsComponent extends ButtonProps {
  text: string
  bgColor?: string
  color?: string
  color_hover?: string
}

export default function ButtonCompoent({ text, bgColor = 'teal.500', color = 'white', color_hover, ...rest }: ButtonPropsComponent) {
  return (
    <Button id="button" type='submit' bgColor={bgColor} color={color} transition='0.5s' _hover={{ bgColor: 'teal.600', color: color_hover, transition: '0.5s' }} {...rest}>
      {text}
    </Button>
  )
}