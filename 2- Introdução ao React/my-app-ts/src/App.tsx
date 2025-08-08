import {
  ChakraProvider,
  Input,
  defaultSystem,
  Box,
  Center,
} from "@chakra-ui/react";
import { login } from "./services/codigo-e-teste-login/login";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box minHeight="100vh" backgroundColor=" #87CEEB" padding="25px">
        <Center>
          <Box
            width="75vh"
            backgroundColor="white"
            borderRadius="25px"
            padding="15px"
            margin="45px"
          >
            <Center>
              <h1>Faça login</h1>
            </Center>
            <Input padding="10px" placeholder="Email" />
            <Input padding="10px" placeholder="Password" />
            <Center>
              <button
                onClick={login}
                style={{
                  backgroundColor: "#90e9ffff",
                  borderRadius: "25px",
                  padding: "5px 20px 10px",
                  marginTop: "10px",
                  color: "white",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Entrar
              </button>
            </Center>
          </Box>
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default App;
