import { Box, Text, Flex, Input, Stack, Grid, GridItem, useMediaQuery } from '@chakra-ui/react'
import ButtonCompoent from './components/button'

import TextAndButton from './components/textAndIcon'
import Image from 'next/image'

import Logo from './img/ami.jpg'
import Dowload from './img/download.jpg'
import mobile from './img/mobile.jpeg'
import Capa from './img/capa.jpg'


import Link from 'next/link'
import { FormEvent, useState } from 'react'
import axios from 'axios'
import Router from 'next/router'

export default function Index() {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
  const [name, setName] = useState<String>()
  const [number, setNumber] = useState<Number>()
  const [email, setEmail] = useState<String>()



  async function handleForm(e:FormEvent){

    e.preventDefault()
   await axios.post(`${process.env.FORM_LINK}/ticonnected`, {
      emailTo: "matteus.isaque28@gmail.com",
      title: "campanha isaques estúdios",
      domain:"https://new-amil.vercel.app/",
      name,
      phone: number,
      email
    })

    Router.reload()
  }

  return (
    <Box as='main'>
      <Flex h='100px' w='100%' justifyContent='center' alignItems='center' bgColor='#494fff'>
        <Image alt='logo-amil' src={Logo} height={100} />
      </Flex>

      <Flex px='10%' w='100%' py='20px' justifyContent='center' alignItems='center' flexDirection='column' bgColor='teal.500' color='white'>
        <Text as='h1' fontSize='24px' fontWeight='700' textAlign='center'>Cote agora mesmo sem compromisso!</Text>
        <Text textAlign='center'>Realize sua cotação expressa que um profissional de amil dental entrará em contato com você!</Text>
      </Flex>

      <Grid id='form'
        style={{ backgroundImage: `url(${Capa.src})` }}
        gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }} px='10%' py={{ base: '100px', md: '200px' }}>
        <GridItem py={{ base: '40px', sm: '60px', lg: '75px' }} px={{ base: '20px', sm: '40px', lg: '75px' }} bgColor='teal.500'>
          <Stack as='form' onSubmit={handleForm} spacing='4' textAlign='center' color='teal.500'>
            <Text fontSize='24px' fontWeight='800' color='white'>PLANOS A PARTIR DE 1,00$ POR DIA</Text>
            <Text color='white'>Contrate agora e comece a usar em 24H</Text>
            <Input placeholder='nome' type='text' bgColor='white' onChange={(e)=>{setName(e.target.value)}} />
            <Input placeholder='numero' type='number' bgColor='white' onChange={(e)=>{setNumber(Number(e.target.value))}}/>
            <Input placeholder='email' type='email' bgColor='white' onChange={(e)=>{setEmail(e.target.value)}}/>
            <ButtonCompoent bgColor='white' color='teal.500' color_hover='white' text='enviar' type='submit' />
          </Stack>
        </GridItem>
      </Grid>

      <Flex bgColor='teal.500' flexDirection='column' color='white' px='10%' py={{ base: '50px', md: '100px' }} textAlign='center'>
        <Text mt='24px' mb='14px' fontSize='30px' fontWeight='700'>Coberturas</Text>
        <Text mb='40px'>O plano amil dental oferece cobertura integral para todos os procedimentos do Rol ANS(agência nacional de saúde suplementar) e mais procedimentos extras, nas seguintes especialidades</Text>

        <Grid gridTemplateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gridTemplateRows='1fr'>
          <GridItem>
            <TextAndButton text='Consultas' />
            <TextAndButton text='Limpeza' />
            <TextAndButton text='Restaurações' />
            <TextAndButton text='Cirurgias' />
            <TextAndButton text='Extrações' />
          </GridItem>
          <GridItem>
            <TextAndButton text='Próteses' />
            <TextAndButton text='Ortodontia' />
            <TextAndButton text='Emergências' />
            <TextAndButton text='Trat. Gengiva' />
            <TextAndButton text='Radiografias' />
          </GridItem>
          <GridItem>
            <TextAndButton text='Trat. de canal' />
            <TextAndButton text='Radiografias' />
            <TextAndButton text='Odontopediatria' />
            <TextAndButton text='Documentação' />
            <TextAndButton text='E Outros!' />
          </GridItem>
        </Grid>
      </Flex>

      <Box mt='120px'>
        <Text mt='24px' mb='14px' fontSize='30px' fontWeight='700' textAlign='center'>Escolha o plano certo para você!</Text>

        <Flex mx='10%' justifyContent='space-around' my='100px' flexDirection={{ base: 'column', md: 'row' }}>

          <Flex width={{ md: '350px', xl: '450px' }} flexDirection='column' p='20px' borderStyle='solid' borderWidth='1px' borderColor='teal.500' boxShadow='2xl'>
            <Text my='14px' fontWeight='700' fontSize={{ base: '30px', lg: '40px' }} color='teal.500'>Pessoa Física</Text>

            <Box my='35px'>
              <Text fontSize='20px'>Documentação Ortodôntica</Text>
              <Text fontSize='20px'>Extração Dente do Siso</Text>
              <Text mb='20px' fontSize='20px'>Tratamento de "Canal"</Text>
              <Text fontWeight='700' as='i'>+227 procedimentos</Text>
            </Box>

            <Box>
              <Text fontSize='20px'>A partir de:</Text>
              <Text fontSize={{ base: '40px', lg: '60px' }} fontWeight={700}>R$ 39,90</Text>
              <Text fontSize='20px'>por mês/vida</Text>
            </Box>
            <Link style={{ width: '100%' }} href='https://wa.me/5511961062860'>
              <ButtonCompoent w='100%' mt='40px' text='Falar com atendente' />
            </Link>
          </Flex>

          <Flex width={{ md: '350px', xl: '450px' }} mt={{ base: '75px', md: '0px' }} flexDirection='column' p='20px' borderStyle='solid' borderWidth='1px' borderColor='teal.500' boxShadow='2xl'>
            <Text mt='14px' fontWeight='700' fontSize={{ base: '30px', lg: '40px' }} color='teal.500'>Empresas</Text>
            <Text fontSize='18px' color='teal.500'>Nacional | de 2 a 99 vidas | Clássico</Text>

            <Box my='35px'>
              <Text fontSize='20px'>Documentação Ortodôntica</Text>
              <Text fontSize='20px'>Extração Dente do Siso</Text>
              <Text mb='20px' fontSize='20px'>Tratamento de "Canal"</Text>
              <Text fontWeight='700' as='i'>+227 procedimentos</Text>
            </Box>

            <Box>
              <Text fontSize='20px'>A partir de:</Text>
              <Text fontSize={{ base: '40px', lg: '60px' }} fontWeight={700}>R$ 19,90</Text>
              <Text fontSize='20px'>por mês/vida</Text>
            </Box>

            <Link style={{ width: '100%' }} href='https://wa.me/5511961062860'>
              <ButtonCompoent w='100%' mt='40px' text='Falar com atendente' />
            </Link>
          </Flex>

        </Flex>
      </Box>

      {
        isLargerThan768 ?
          <Link href='/?couter=#form'>
            <Box id='end' style={{ backgroundImage: `url(${Dowload.src})` }} w='100%' h='350px'>
            </Box>
          </Link>
          :
          <Link href='/?couter=#form'>
            <Box id='end' style={{ backgroundImage: `url(${mobile.src})` }} w='100%' h='350px'>
            </Box>
          </Link>
      }
      <Box bgColor='teal.500' w='100%' textAlign='center' color='white' py='2'>
        <Text fontSize='14px'>Todos os direitos reservados aos seus criadores</Text>
      </Box>
    </Box>
  )
}