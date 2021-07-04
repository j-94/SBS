import { HomeLink } from "components/home-link";

import { ThemeToggle } from "components/theme-toggle";
import { useColorModeValue, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import IframeResizer from "iframe-resizer-react";
function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

export default function Ss() {
  const router = useRouter();
  const isPreview = router.pathname.includes("preview");
  return (
    isPreview &&
    !inIframe() && (
      <Stack
        direction="column"
        pos="fixed"
        zIndex={1000}
        right={0}
        bottom={70}
        w={10}
        border="solid transparent"
        shadow="lg"
        roundedLeft="lg"
        bg={useColorModeValue("white", "gray.700")}
      >
        <HomeLink />
        <IframeResizer
          log
          src="https://test-3o42g415s-jasedgw.vercel.app/?m=Uc8nCBcqLWs"
          style={{ width: "1px", minWidth: "100%" }}
        />
        <ThemeToggle />
      </Stack>
    )
  );
}
