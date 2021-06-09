import {
  Box,
  ButtonGroup,
  ChakraProvider,
  Heading,
  Link,
  Radio,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Yup from "yup";
import {
  CheckboxContainer,
  CheckboxControl,
  CheckboxSingleControl,
  InputControl,
  NumberInputControl,
  PercentComplete,
  PinInputControl,
  RadioGroupControl,
  ResetButton,
  SelectControl,
  SliderControl,
  SubmitButton,
  SwitchControl,
  TextareaControl,
} from "formik-chakra-ui";
import Image from "next/image";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = (values) => {
  sleep(300).then(() => {
    window.alert(JSON.stringify(values, null, 2));
  });
};

const initialValues = {
  firstName: "",
  lastName: "",
  age: 0,
  employed: false,
  favoriteColor: "",
  toppings: ["tuna"],
  notes: "",
  employedd: false,
  select: "",
  foo: 23,
  bar: "",
};
const validationSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  age: Yup.number().required().min(18),
  employed: Yup.boolean().equals([true]),
  favoriteColor: Yup.string(),
  toppings: Yup.array().min(2),
  notes: Yup.string().required(),
  employedd: Yup.boolean().equals([true]),
  select: Yup.string().required(),
  foo: Yup.number(),
  bar: Yup.string().length(4),
});

const formikchakra = () => {
  return (
    <ChakraProvider>
      <Heading as="h1" size="xl" textAlign="center">
        Formik Chakra UI
      </Heading>
      <Box as="p" textAlign="center">
        Example using{" "}
        <Link href="https://github.com/kgnugur/formik-chakra-ui" isExternal>
          Formik Chakra UI{" "}
        </Link>
      </Box>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, values, errors }) => (
          <Box
            borderWidth="1px"
            rounded="lg"
            shadow="1px 1px 3px rgba(0,0,0,0.3)"
            maxWidth={800}
            p={6}
            m="10px auto"
            as="form"
            onSubmit={handleSubmit as any}
          >
            <InputControl name="firstName" label="First Name" />
            <InputControl name="lastName" label="Last Name" />
            <NumberInputControl
              name="age"
              label="Age"
              helperText="Helper text"
            />
            <CheckboxSingleControl name="employed">
              <Box
                as="button"
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                _hover={{ bg: "#ebedf0" }}
                _active={{
                  bg: "#dddfe2",
                  transform: "scale(0.98)",
                  borderColor: "#bec3c9",
                }}
                _focus={{
                  boxShadow:
                    "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                }}
                maxW={"445px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
              >
                <Box
                  h={"210px"}
                  bg={"gray.100"}
                  mt={-6}
                  mx={-6}
                  mb={6}
                  pos={"relative"}
                >
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    }
                    layout={"fill"}
                  />
                </Box>
                <Stack>
                  <Heading
                    color={useColorModeValue("gray.700", "white")}
                    fontSize={"2xl"}
                    fontFamily={"body"}
                  >
                    Rennovation
                  </Heading>
                </Stack>
              </Box>
            </CheckboxSingleControl>
            <RadioGroupControl name="favoriteColor" label="Favorite Color">
              <Radio value="#ff0000">Red</Radio>
              <Radio value="#00ff00">Green</Radio>
              <Radio value="#0000ff">Blue</Radio>
            </RadioGroupControl>
            <CheckboxContainer name="toppings" label="Toppings">
              <CheckboxControl name="toppings1" value="chicken">
                Chicken
              </CheckboxControl>
              <CheckboxControl name="toppings" value="ham">
                Ham
              </CheckboxControl>
              <CheckboxControl name="toppings" value="mushrooms">
                Mushrooms
              </CheckboxControl>
              <CheckboxControl name="toppings" value="cheese">
                Cheese
              </CheckboxControl>
              <CheckboxControl name="toppings" value="tuna">
                Tuna
              </CheckboxControl>
              <CheckboxControl name="toppings" value="pineapple">
                Pineapple
              </CheckboxControl>
            </CheckboxContainer>
            <TextareaControl name="notes" label="Notes" />
            <SwitchControl name="employedd" label="Employed" />
            <SelectControl
              label="Select label"
              name="select"
              selectProps={{ placeholder: "Select option" }}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </SelectControl>
            <SliderControl name="foo" sliderProps={{ max: 40 }} />
            <PinInputControl
              name="bar"
              pinAmount={4}
              pinInputProps={{ size: "sm" }}
            />

            <PercentComplete />
            <ButtonGroup>
              <SubmitButton>Submit</SubmitButton>
              <ResetButton>Reset</ResetButton>
            </ButtonGroup>

            <Box as="pre" marginY={10}>
              {JSON.stringify(values, null, 2)}
              <br />
              {JSON.stringify(errors, null, 2)}
            </Box>
          </Box>
        )}
      </Formik>
    </ChakraProvider>
  );
};

export default formikchakra;
