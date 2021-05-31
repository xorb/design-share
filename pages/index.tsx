import { Box, Flex } from "@chakra-ui/layout";
import { NextSeo } from "next-seo";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <NextSeo
        title="My first design"
        description="My first design"
        openGraph={{
          url: "https://www.google.com",
          title: "My first design",
          description:
            "How to create amazing designs from scratch. From master to zero!!!",
          images: [
            {
              url: "https://i.ibb.co/THCMMNy/drawing-26.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://i.ibb.co/THCMMNy/drawing-26.png",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
            { url: "https://i.ibb.co/THCMMNy/drawing-26.png" },
            { url: "https://i.ibb.co/THCMMNy/drawing-26.png" },
          ],
          site_name: "Amazing Designs",
        }}
      />
      <Flex height="100vh" flexDirection="column" background="gray.900">
        <Navbar />

        <Flex
          flex={1}
          alignItems="center"
          justifyContent="center"
          padding="0 1rem 2rem"
        >
          <img
            style={{ maxHeight: "calc(100vh - 200px)" }}
            height={"100%"}
            src={"https://i.ibb.co/THCMMNy/drawing-26.png"}
          />
        </Flex>
      </Flex>
    </>
  );
}
