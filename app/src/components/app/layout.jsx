import { Box, Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Protected } from "@/router/protected";
import { Header } from "@/components/app/header";

export const App = () => {
  return (
    <>
      <Protected>
        <Header />

        <Box>
          <Container maxW={{ md: "8xl", lg: "8xl", xl: "7xl" }} py={12}>
            <Outlet />
          </Container>
        </Box>
      </Protected>
    </>
  );
};
