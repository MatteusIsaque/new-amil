import {
  Box,
  Text,
  Flex,
  Input,
  Stack,
  Grid,
  GridItem,
  useMediaQuery,
  Textarea,
} from "@chakra-ui/react";
import ButtonCompoent from "./components/button";

import TextAndButton from "./components/textAndIcon";
import Image from "next/image";

import Logo from "./img/ami.jpeg";
import Dowload from "./img/download.jpg";
import mobile from "./img/mobile.jpeg";
import Capa from "./img/capa.jpg";

import Link from "next/link";
import { FormEvent, useState } from "react";
import axios from "axios";
import Router from "next/router";
import ZapButton from "./components/zapButton";

export default function Index() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [name, setName] = useState<String>();
  const [number, setNumber] = useState<Number>();
  const [email, setEmail] = useState<String>();
  const [message, setMessage] = useState<String>();

  async function handleForm(e: FormEvent) {
    e.preventDefault();
    await axios.post(`https://main-form.herokuapp.com/ticonnected`, {
      emailTo: "marcioapqueiroz@gmail.com",
      title: "campanha isaques estúdios",
      domain: "https://new-amil.vercel.app/",
      name,
      phone: number,
      email,
    });
    e;
    Router.push("/obrigado");
  }

  return (
    <Box as="main">
      <Flex
        h="120px"
        w="100%"
        justifyContent="center"
        alignItems="center"
        bgColor="white"
      >
        <Image alt="logo-amil" src={Logo} height={100} />
      </Flex>

      <Flex
        px="10%"
        w="100%"
        py={{ base: "10px", sm: "20px" }}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        bgColor="teal.500"
        color="white"
      >
        <Text
          as="h1"
          fontSize={{ base: "20px", sm: "24px" }}
          fontWeight="700"
          textAlign="center"
        >
          Cote agora mesmo sem compromisso!
        </Text>
        <Text textAlign="center">
          Realize sua cotação expressa que um profissional de amil dental
          entrará em contato com você!
        </Text>
      </Flex>

      <Grid
        id="form"
        style={{ backgroundImage: `url(${Capa.src})` }}
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        px="10%"
        py={{ base: "50px", md: "200px" }}
      >
        <GridItem
          py={{ base: "20px", sm: "60px", lg: "75px" }}
          px={{ base: "20px", sm: "40px", lg: "75px" }}
          bgColor="teal.500"
        >
          <Stack
            as="form"
            onSubmit={handleForm}
            spacing="4"
            textAlign="center"
            color="teal.500"
          >
            <Text
              fontSize={{ base: "22px", sm: "24px" }}
              fontWeight="800"
              lineHeight="30px"
              color="#e8BD00"
            >
              PLANOS A PARTIR DE 1,00$ POR DIA
            </Text>
            <Text color="white">
              Deixe a baixo o que procura no seu plano para fazermos uma
              simulação
            </Text>
            <Input
              placeholder="nome"
              type="text"
              bgColor="white"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              placeholder="número com DDD"
              type="number"
              bgColor="white"
              onChange={(e) => {
                setNumber(Number(e.target.value));
              }}
            />
            <Input
              placeholder="email"
              type="email"
              bgColor="white"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Textarea
              placeholder="nos conte o que você procura"
              bgColor="white"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <ButtonCompoent
              bgColor="#e8BD00"
              color="white"
              color_hover="white"
              text="Solicitar cotação"
              type="submit"
            />
          </Stack>
        </GridItem>
      </Grid>

      <Flex
        bgColor="teal.500"
        flexDirection="column"
        color="white"
        px="10%"
        py={{ base: "50px", md: "100px" }}
        textAlign="center"
      >
        <Text mt="24px" mb="14px" fontSize="30px" fontWeight="700">
          Coberturas
        </Text>
        <Text mb="40px">
          O plano amil dental oferece cobertura integral para todos os
          procedimentos do Rol ANS(agência nacional de saúde suplementar) e mais
          procedimentos extras, nas seguintes especialidades
        </Text>

        <Grid
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
          gridTemplateRows="1fr"
        >
          <GridItem>
            <TextAndButton text="Consultas" />
            <TextAndButton text="Limpeza" />
            <TextAndButton text="Restaurações" />
            <TextAndButton text="Cirurgias" />
            <TextAndButton text="Extrações" />
          </GridItem>
          <GridItem>
            <TextAndButton text="Próteses" />
            <TextAndButton text="Ortodontia" />
            <TextAndButton text="Emergências" />
            <TextAndButton text="Trat. Gengiva" />
            <TextAndButton text="Radiografias" />
          </GridItem>
          <GridItem>
            <TextAndButton text="Trat. de canal" />
            <TextAndButton text="Radiografias" />
            <TextAndButton text="Odontopediatria" />
            <TextAndButton text="Documentação" />
            <TextAndButton text="E Outros!" />
          </GridItem>
        </Grid>
      </Flex>

      <Box mt="120px">
        <Text
          mt="24px"
          mb="14px"
          fontSize="30px"
          fontWeight="700"
          textAlign="center"
        >
          Escolha o plano certo para você!
        </Text>

        <Flex
          mx="10%"
          justifyContent="space-around"
          my="100px"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Flex
            width={{ md: "350px", xl: "450px" }}
            flexDirection="column"
            p="20px"
            borderStyle="solid"
            borderWidth="1px"
            borderColor="teal.500"
            boxShadow="2xl"
          >
            <Text
              my="14px"
              fontWeight="700"
              fontSize={{ base: "30px", lg: "40px" }}
              color="teal.500"
            >
              Pessoa Física
            </Text>

            <Box my="35px">
              <Text fontSize="20px">Documentação Ortodôntica</Text>
              <Text fontSize="20px">Extração Dente do Siso</Text>
              <Text mb="20px" fontSize="20px">
                Tratamento de "Canal"
              </Text>
              <Text fontWeight="700" as="i">
                +227 procedimentos
              </Text>
            </Box>

            <Box>
              <Text fontSize="20px">A partir de:</Text>
              <Text fontSize={{ base: "40px", lg: "60px" }} fontWeight={700}>
                R$ 39,90
              </Text>
              <Text fontSize="20px">por mês/vida</Text>
            </Box>
            <Link style={{ width: "100%" }} href="/?couter=#form">
              <ButtonCompoent w="100%" mt="40px" text="Falar com corretor" />
            </Link>
          </Flex>

          <Flex
            width={{ md: "350px", xl: "450px" }}
            mt={{ base: "75px", md: "0px" }}
            flexDirection="column"
            p="20px"
            borderStyle="solid"
            borderWidth="1px"
            borderColor="teal.500"
            boxShadow="2xl"
          >
            <Text
              mt="14px"
              fontWeight="700"
              fontSize={{ base: "30px", lg: "40px" }}
              color="teal.500"
            >
              Empresas
            </Text>
            <Text fontSize="18px" color="teal.500">
              Nacional | de 2 a 99 vidas | Clássico
            </Text>

            <Box my="35px">
              <Text fontSize="20px">Documentação Ortodôntica</Text>
              <Text fontSize="20px">Extração Dente do Siso</Text>
              <Text mb="20px" fontSize="20px">
                Tratamento de "Canal"
              </Text>
              <Text fontWeight="700" as="i">
                +227 procedimentos
              </Text>
            </Box>

            <Box>
              <Text fontSize="20px">A partir de:</Text>
              <Text fontSize={{ base: "40px", lg: "60px" }} fontWeight={700}>
                R$ 19,90
              </Text>
              <Text fontSize="20px">por mês/vida</Text>
            </Box>

            <Link style={{ width: "100%" }} href="/?couter=#form">
              <ButtonCompoent w="100%" mt="40px" text="Falar com corretor" />
            </Link>
          </Flex>
        </Flex>
      </Box>

      <Box bgColor="teal.500" w="100%" textAlign="center" color="white" py="2">
        <Text fontSize="14px">
          Todos os direitos reservados aos seus criadores
        </Text>
      </Box>
      <ZapButton />
    </Box>
  );
}
