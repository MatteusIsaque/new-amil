import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { theme } from './../styles/theme'

import TagManager from 'react-gtm-module'


export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-M5J8FT3'
    }


    TagManager.initialize(tagManagerArgs)

  })


  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
