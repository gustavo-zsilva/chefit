import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import theme from '../styles/theme';

const pageTheme = extendTheme(theme);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={pageTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
