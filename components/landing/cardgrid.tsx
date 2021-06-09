import React from "react";
import { Box, useColorModeValue, SimpleGrid, GridItem } from "@chakra-ui/react";

import ServiceCard from "./servicecard";

export default function CardGrid() {
  return (
    <Box bg={useColorModeValue("gray.50", "inherit")} p={5}>
      <Box>
        <SimpleGrid
          display={{ base: "initial", md: "grid" }}
          columns={{ md: 2 }}
          spacing={{ md: 6 }}
        >
          <GridItem colSpan={{ md: 1 }}>
            <SimpleGrid columns={6} spacing={5}>
              <Box as={GridItem} colSpan={[6, 3]}>
                <ServiceCard />
              </Box>
              <Box as={GridItem} colSpan={[6, 3]}>
                <ServiceCard />
              </Box>
            </SimpleGrid>
          </GridItem>
          <GridItem colSpan={{ md: 1 }}>
            <SimpleGrid columns={6} spacing={5}>
              <Box as={GridItem} colSpan={[6, 3]}>
                <ServiceCard />
              </Box>
              <Box as={GridItem} colSpan={[6, 3]}>
                <ServiceCard />
              </Box>
            </SimpleGrid>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
