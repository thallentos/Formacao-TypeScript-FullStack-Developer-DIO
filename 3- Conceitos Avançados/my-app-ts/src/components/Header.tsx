import { Box, Center, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box backgroundColor="#87CEEB" borderBottom="1px solid white">
      <Center>
        <Text fontSize="3x1" color={"white"}>
          Thallentos Bank
        </Text>
      </Center>
    </Box>
  );
};
