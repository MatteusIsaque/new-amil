import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import ButtonCompoent from "./components/button";



export default function Obrigado() {

  return (
    <Flex h='100vh' w='100%' justifyContent='center' alignItems='center' flexDirection='column'>
      <Text fontSize='24px' mb='10px'>Obrigado, retornaremos o contato em breve.</Text>
      <Link href='/'>
        <ButtonCompoent text='Voltar ao início' />
      </Link>
    </Flex>
  )
}