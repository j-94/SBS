import React from "react";
import { Box, useColorModeValue, SimpleGrid, GridItem } from "@chakra-ui/react";

import ServiceCard from "./servicecard";

export default function CardGrid() {
  return (
    <Box p={5}>
      <Box>
        <SimpleGrid
          display={{ base: "initial", md: "grid" }}
          columns={{ md: 2 }}
          spacing={{ md: 6 }}
        >
          <GridItem colSpan={{ md: 1 }}>
            <SimpleGrid columns={6} spacing={5}>
              <Box as={GridItem} colSpan={[6, 3]}>
                <ServiceCard
                  address="https://res.cloudinary.com/j94/image/upload/v1623324399/C__Users_Calc_Documents_66_Lindsay_Rd_Recovery_1_-1_2_rkcf0t.png"
                  name="Design"
                  link="/design"
                />
              </Box>
              <Box as={GridItem} colSpan={[6, 3]}>
                <ServiceCard
                  address="https://images.unsplash.com/photo-1608283832972-7402dc32545e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1557&q=80"
                  name="Build"
                  link="/build"
                />
              </Box>
            </SimpleGrid>
          </GridItem>
          <GridItem colSpan={{ md: 1 }}>
            <SimpleGrid columns={6} spacing={5}>
              <Box as={GridItem} colSpan={[6, 3]}>
                <ServiceCard
                  address="https://images.unsplash.com/photo-1524666037164-2f32a6c1dfea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  name="Plan"
                  link="/plan"
                />
              </Box>
              <Box as={GridItem} colSpan={[6, 3]}>
                <ServiceCard
                  address="https://images.unsplash.com/photo-1471199336425-8966ccc0a907?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  name="Develop"
                  link="/develop"
                />
              </Box>
            </SimpleGrid>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
