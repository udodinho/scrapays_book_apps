import { Box, FormControl, FormLabel, FormHelperText, Input, Textarea, Button } from "@chakra-ui/react";
import { Form } from "react-router-dom";

export default function FormInput({ action, updateName, updateDescription, name, value }) {
  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Book name:</FormLabel>
          <Input
            type="text"
            name="title"
            onChange={(e) => updateName(e.target.value)}
            value={value?.name}
            required
          />
          <FormHelperText>Enter a book name.</FormHelperText>
        </FormControl>

        <FormControl isRequired mb="40px">
          <FormLabel>Book description:</FormLabel>
          <Textarea
            placeholder="Enter book description..."
            name="description"
            onChange={(e) => updateDescription(e.target.value)}
            value={value?.description}
          />
        </FormControl>
        <Button onClick={action}>{name}</Button>
      </Form>
    </Box>
  );
}
