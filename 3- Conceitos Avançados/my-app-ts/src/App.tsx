/**
 * Descomente isso tudo. Só comentei, porque tava vermelho aqui no VS Code
 */

import {useState} from 'react'
import { ChakraProvider, Box, defaultSystem } from "@chakra-ui/react";
import { Card } from "./components/Card";
import { Layout } from "./components/Layout";
function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Layout>
        <Box padding="25px">
          <Card id={0} paragraph={''} details={''} />
        </Box>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
