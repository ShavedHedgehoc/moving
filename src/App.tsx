import { AbsoluteCenter, Box, Theme, Link, Flex, Heading } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";

function App() {
  return (
    <Theme appearance="dark">
      <Box w="100vw" h="100vh">
        <AbsoluteCenter>
          <Flex flexDir={"column"} gap={2} justifyContent={"center"} alignItems={"center"}>
            <Heading size="5xl">Внимание!</Heading>
            <Heading size="4xl">Приложение переехало на новый сервер</Heading>
            <Heading size="2xl">
              <Link href="http://192.168.0.48" variant="plain" colorPalette="teal">
                http://192.168.0.48 <LuExternalLink />
              </Link>
            </Heading>
            <Heading size="2xl">{`(Нажмите на ссылку для перехода)`}</Heading>
          </Flex>
        </AbsoluteCenter>
      </Box>
    </Theme>
  );
}

export default App;
