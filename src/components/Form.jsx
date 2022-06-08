import {  Box, Button, Flex, FormControl,  FormLabel, Grid, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import Card from "./Card";

const CardForm = () => {
  const [form, setForm] = useState({});
   console.log(form)
   const onchange = (e) => {
     let { name, value } = e.target;
     // console.log(type, name, value, checked, files)
       setForm({
         ...form,
         [name]: value,
       });
     
   };

   const handleOnSubmit = (e) => {
     e.preventDefault();
     
      axios
        .post("http://localhost:8080/formData", {
          ...form,
        })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (err) {
          console.log(err);
        });
   };
  return (
    <Flex flexDirection="column">
      <h3>Payment details</h3>
      <FormControl w="30%" margin="auto" onSubmit={handleOnSubmit}>
        <FormLabel htmlFor="email">Customer Name</FormLabel>
        <Input
          id="email"
          type="text"
          name="username"
          value={form.name}
          onChange={onchange}
          borderBottom="2px solid pink"
          border="none"
          borderRadius="none"
        />

        <FormLabel htmlFor="email">card number</FormLabel>
        <Input
          id="number"
          type="number"
          name="age"
          value={form.age}
          onChange={onchange}
          borderBottom="2px solid pink"
          border="none"
          borderRadius="none"
        />
        <Grid templateColumns="repeat(3,1fr)" gap="5">
          <Box>
            <FormLabel htmlFor="email">Expiry Month</FormLabel>
            <Input
              id="number"
              type="number"
              name="expiry"
              value={form.expiry}
              onChange={onchange}
              borderBottom="2px solid pink"
              border="none"
              borderRadius="none"
            />
          </Box>
          <Box>
            <FormLabel htmlFor="email">Expiry Year</FormLabel>
            <Input
              id="number"
              type="number"
              name="expiryyear"
              value={form.expiryyear}
              onChange={onchange}
              borderBottom="2px solid pink"
              border="none"
              borderRadius="none"
            />
          </Box>
          <Box>
            <FormLabel htmlFor="email">cvv</FormLabel>
            <Input
              id="number"
              type="number"
              name="cvv"
              value={form.cvv}
              onChange={onchange}
              borderBottom="2px solid pink"
              border="none"
              borderRadius="none"
            />
          </Box>
        </Grid>
        <Button colorScheme="teal" marginTop="30px" size="md" type="submit">
          Button
        </Button>
      </FormControl>
    </Flex>
  );
};

export default CardForm;
