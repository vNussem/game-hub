import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Box } from "@chakra-ui/react";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};
