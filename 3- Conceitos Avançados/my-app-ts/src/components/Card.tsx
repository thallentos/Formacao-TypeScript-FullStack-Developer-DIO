import { Box, Center, Input } from "@chakra-ui/react";
import { login } from "../services/login";
import DButton from "./DButton";
import { useState, useEffect } from "react";
import { api } from "../api";

interface UserData {
  email: string;
  password: string;
  name: string;
}

export const Card = () => {
  const [email, setEmail] = useState<string>("");
  const [userData, setUserData] = useState<null | UserData>();

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };
    getData();
  }, []);

  return (
    <Center>
      <Box
        backgroundColor="#ffffffff"
        borderRadius="25px"
        padding="15px"
        width={"70vh"}
      >
        {/*{userData === null || (userData === undefined && <h1>Loading...</h1>)}*/}
        <Center>
          <h1 color="#87CEEB">Faça o login</h1>
        </Center>
        <Input
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          marginBottom={"3px"}
          marginTop={"5px"}
        />
        <Input placeholder="Senha" marginBottom={"5px"} />
        <Center>
          <DButton onClick={() => login(email)}></DButton>
        </Center>
      </Box>
    </Center>
  );
};
