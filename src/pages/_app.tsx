import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ChakraProvider } from "@chakra-ui/react";
import { themeconst } from "./chakra/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={themeconst}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  );
}
