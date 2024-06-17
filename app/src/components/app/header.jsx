import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Container,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Link,
  useColorModeValue,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FiUser, FiMail, FiLogOut, FiMoon, FiSun } from "react-icons/fi";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Logo } from "@/components/common/logo";
import { useAuth } from "@/hooks/auth";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { logout } = useAuth();

  return (
    <>
      <Box bg={useColorModeValue("brand.50", "gray.900")} px={12}>
        <Flex h={24} alignItems={"center"} justifyContent={"space-between"}>
          <Link href="/app/dashboard">
            <Logo height={35} />
          </Link>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={4}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"ghost"}
                  cursor={"pointer"}
                  color={"brand.900"}
                  borderRadius={"4px"}
                  _hover={{ bg: "transparent" }}
                >
                  <Avatar name="Segun Adebayo" bg={"brand.900"} />
                </MenuButton>

                <MenuList alignItems={"center"}>
                  <Text
                    textStyle="sm"
                    px={4}
                    whiteSpace="nowrap"
                    color="fg.muted"
                  >
                    Logged in as <br />
                    <strong color={"brand.900"}>afolabi@weevite.de</strong>
                  </Text>
                  <MenuDivider />
                  <MenuItem icon={<FiMail />}>
                    <Link href="/app/dashboard">Manage Occasions</Link>
                  </MenuItem>
                  <MenuItem icon={<FiUser />}>Account Settings</MenuItem>
                  <MenuDivider />
                  <MenuItem
                    icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
                    onClick={toggleColorMode}
                  >
                    {colorMode === "light" ? "Night Theme" : "Day Theme"}
                  </MenuItem>
                  <MenuItem icon={<FiLogOut />} onClick={logout}>
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
