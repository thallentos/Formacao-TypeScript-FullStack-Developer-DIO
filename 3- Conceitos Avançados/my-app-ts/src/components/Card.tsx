import { Box, Center, Input } from "@chakra-ui/react";
import { login } from "../services/login";
import DButton from "./DButton";
import { useState } from "react";

export const Card = () => {
  const [email, setEmail] = useState("");

  return (
    <Box backgroundColor="#ffffffff" borderRadius="25px" padding="15px">
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <Input
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input placeholder="Senha" />
      <Center>
        <DButton onClick={() => login(email)}></DButton>
      </Center>
    </Box>
  );
};
