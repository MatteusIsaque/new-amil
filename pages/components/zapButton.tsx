import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import ZapBTN from './../img/wts.png'

export default function ZapButton() {

  return (
    <Box position='fixed' bottom='10px' right='10px' cursor='pointer' width={70} zIndex='100'>
      <Link href='https://wa.me/5511961062860'>
        <Image src={ZapBTN} alt='zap' />
      </Link>
    </Box>
  )
}