import { Box, useColorModeValue } from "@chakra-ui/react";

export default function CardText() {
  return (
    <Box
      borderRadius="lg"
      mb={6}
      p={3}
      textAlign="center"
      css={{ backdropFilter: "blur(10px)" }}
      bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
      color={useColorModeValue("black.500", "white.200")}
    >
      Olá, Eu sou um desenvolvedor Web e Mobile
    </Box>
  );
}
