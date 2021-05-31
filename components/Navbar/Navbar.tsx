import { Button, Flex, ButtonGroup, Grid } from "@chakra-ui/react";
import { DownloadIcon, LogoIcon } from "./NavbarIcons";

function Navbar() {
  const downloadImage = () => {
    console.log("donload");
  };

  return (
    <Grid
      fontFamily="Mukta"
      height="70px"
      color="#fff"
      padding="0 1rem"
      flex="none"
      gridTemplateColumns="180px 1fr 180px"
    >
      <Flex alignItems="center">
        <LogoIcon height="36px" />
      </Flex>
      <Flex color="whiteAlpha.800" justifyContent="center" alignItems="center">
        <span>My first design</span>
      </Flex>
      <Flex alignItems="center" justifyContent="flex-end">
        <ButtonGroup spacing={3}>
          <DownloadIcon style={{ color: "#fff" }} onClick={downloadImage} />
          <Button color="gray.600">
            <a style={{ outline: "none" }} href="https://editor.backium.co">
              Edit Design
            </a>
          </Button>
        </ButtonGroup>
      </Flex>
    </Grid>
  );
}

export default Navbar;
