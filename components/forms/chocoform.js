import { useForm } from "react-hook-form";
import React from "react";
import {
  FormErrorMessage,

  chakra,
  Box,
  Flex,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  FormHelperText,
  Textarea,
  Avatar,
  Icon,
  Button,
  VisuallyHidden,
  Select,
  Checkbox,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";

export default function HookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (

    <Box mt={[20, 20]}>
      <SimpleGrid
        display={{ base: "initial", md: "grid" }}
        columns={{ md: 3 }}
        spacing={{ md: 6 }}
      >
        <GridItem colSpan={{ md: 1 }}>
          <Box px={[4, 0]}>
            <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
              Personal Information
              </Heading>
            <Text
              mt={1}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Use a permanent address where you can receive mail.
              </Text>
          </Box>
        </GridItem>
        <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
          <form onSubmit={handleSubmit(onSubmit)}

            method="POST"
            shadow="base"
            rounded={[null, "md"]}
            overflow={{ sm: "hidden" }}
          >
            <Stack
              px={4}
              py={5}
              p={[null, 6]}
              bg={useColorModeValue("white", "gray.700")}
              spacing={6}
            >
              <SimpleGrid columns={6} spacing={6}>
                <FormControl isInvalid={errors.name} as={GridItem} colSpan={[6, 3]}>
                  <FormLabel
                    fontSize="sm"
                    fontWeight="md"
                    color={useColorModeValue("gray.700", "gray.50")}
                  >
                    First name
                    </FormLabel>
                  <Input
                    type="text"
                    name="first_name"
                    id="first_name"
                    autoComplete="given-name"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"{...register("name", {
                      required: "This is required",
                      minLength: { value: 4, message: "Minimum length should be 4" }
                    })}
                  />
                  <FormErrorMessage>
                    {errors.name && errors.name.message}
                  </FormErrorMessage>

                </FormControl>

                <FormControl isInvalid={errors.name} as={GridItem} colSpan={[6, 3]}>
                  <FormLabel
                    fontSize="sm"
                    fontWeight="md"
                    color={useColorModeValue("gray.700", "gray.50")}
                  >
                    Last name
                    </FormLabel>
                  <Input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                  />
                </FormControl>

                <FormControl isInvalid={errors.name} as={GridItem} colSpan={[6, 4]}>
                  <FormLabel
                    for="email_address"
                    fontSize="sm"
                    fontWeight="md"
                    color={useColorModeValue("gray.700", "gray.50")}
                  >
                    Email address
                    </FormLabel>
                  <Input
                    type="text"
                    name="email_address"
                    id="email_address"
                    autoComplete="email"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                  />
                </FormControl>

                <FormControl isInvalid={errors.name} as={GridItem} colSpan={[6, 3]}>
                  <FormLabel
                    for="country"
                    fontSize="sm"
                    fontWeight="md"
                    color={useColorModeValue("gray.700", "gray.50")}
                  >
                    Country / Region
                    </FormLabel>
                  <Select
                    id="country"
                    name="country"
                    autoComplete="country"
                    placeholder="Select option"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </Select>
                </FormControl>

                <FormControl isInvalid={errors.name} as={GridItem} colSpan={6}>
                  <FormLabel
                    for="street_address"
                    fontSize="sm"
                    fontWeight="md"
                    color={useColorModeValue("gray.700", "gray.50")}
                  >
                    Street address
                    </FormLabel>
                  <Input
                    type="text"
                    name="street_address"
                    id="street_address"
                    autoComplete="street-address"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                  />
                </FormControl>

                <FormControl isInvalid={errors.name} as={GridItem} colSpan={[6, 6, null, 2]}>
                  <FormLabel
                    for="city"
                    fontSize="sm"
                    fontWeight="md"
                    color={useColorModeValue("gray.700", "gray.50")}
                  >
                    City
                    </FormLabel>
                  <Input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="city"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                  />
                </FormControl>

                <FormControl isInvalid={errors.name} as={GridItem} colSpan={[6, 3, null, 2]}>
                  <FormLabel
                    for="state"
                    fontSize="sm"
                    fontWeight="md"
                    color={useColorModeValue("gray.700", "gray.50")}
                  >
                    State / Province
                    </FormLabel>
                  <Input
                    type="text"
                    name="state"
                    id="state"
                    autoComplete="state"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                  />
                </FormControl>

                <FormControl isInvalid={errors.name} as={GridItem} colSpan={[6, 3, null, 2]}>
                  <FormLabel
                    for="postal_code"
                    fontSize="sm"
                    fontWeight="md"
                    color={useColorModeValue("gray.700", "gray.50")}
                  >
                    ZIP / Postal
                    </FormLabel>
                  <Input
                    type="text"
                    name="postal_code"
                    id="postal_code"
                    autoComplete="postal-code"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                  />
                </FormControl>
              </SimpleGrid>
            </Stack>
            <Box
              px={{ base: 4, sm: 6 }}
              py={3}
              bg={useColorModeValue("gray.50", "gray.900")}
              textAlign="right"
            >
              <Button
                type="submit"
                isLoading={isSubmitting}
                colorScheme="brand"
                _focus={{ shadow: "" }}
                fontWeight="md"
              >
                Save
                </Button>
            </Box>
          </form >



        </GridItem>
      </SimpleGrid>
    </Box>


  );
}
