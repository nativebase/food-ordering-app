import * as React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Box, Link, Text } from "native-base";
import { Form, Formik } from "formik";
import { FormControl } from "native-base";
import { FormLabel } from "native-base";
import { FormHelperText } from "native-base";
import { FormErrorMessage } from "native-base";
import { Stack } from "native-base";
import { Center } from "native-base";
import { Input } from "native-base";
import { Button } from "native-base";
import { Alert } from "native-base";
import { AlertTitle } from "native-base";
import { AlertDescription } from "native-base";
import { AlertCloseButton } from "native-base";
import { Heading } from "native-base";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../types";
export default function Login({
  navigation,
}: StackScreenProps<RootStackParamList, "SignUp">) {
  return (
    <Center color="black" mt={8} m="auto" alignItems="center">
      <Heading marginBottom="20px" color="gray.500">
        Login
      </Heading>
      <Formik
        validateOnBlur
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            console.log(values.email, "%%%s");
            //@ts-ignore
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            //@ts-ignore
            errors.email = "Invalid email address";
          }
          console.log(values);
          console.log(errors);
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("inn submitt", values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Stack space={5} pl="20px" pr="20px">
            <FormControl isRequired isInvalid w="100%">
              <Input
                w="100%"
                _focus={{}}
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                variant="underlined"
                onChangeText={handleChange("email")}
                value={values.email}
              />
              {errors.email ? (
                <FormErrorMessage paddingLeft="2">
                  {errors.email}
                </FormErrorMessage>
              ) : null}
            </FormControl>
            <FormControl isRequired isInvalid>
              <Input
                w="100%"
                id="password"
                variant="underlined"
                placeholder="Password"
                type="password"
                name="password"
                onChangeText={handleChange("password")}
                value={values.password}
              />
            </FormControl>
            <Button
              variant={"solid"}
              onPress={() => handleSubmit()}
              disabled={isSubmitting}
            >
              Submit
            </Button>
            <Box alignItems="center">
              <Text style={styles.text}>Not Registerd yet?</Text>
              <Button
                onPress={() => navigation.replace("SignUp")}
                style={styles.link}
              >
                <Text style={styles.linkText}>Register Now</Text>
              </Button>
            </Box>
          </Stack>
        )}
      </Formik>
    </Center>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  link: {
    paddingVertical: 0,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
  text: {
    alignItems: "center",
    marginTop: 15,
  },
});
