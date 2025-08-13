import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface IDButton {
  onClick: MouseEventHandler;
}

export const DButton = ({ onClick }: IDButton) => {
  return (
    <Button
      onClick={onClick}
      backgroundColor="#87CEEB"
      size="sm"
      width="75%"
      marginTop="10px"
    >
      Entrar
    </Button>
  );
};

export default DButton;
