import { EditIcon, DeleteIcon } from "@chakra-ui/icons"
import { Box, SimpleGrid, Text, Flex, Heading, Card, CardHeader, CardBody, CardFooter, HStack, Divider, Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useQuery } from "@apollo/client"
import { BOOKS_QUERY } from "../Query"
import { DELETE_BOOK_MUTATION } from '../Mutation'
import { useMutation } from '@apollo/client'
import { useNavigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"

export default function Dashboard() {
  const { data, error } = useQuery(BOOKS_QUERY);
  const { isAuthenticated } = useAuth0();

  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const [deleteBook, {mutationerror}] = useMutation(DELETE_BOOK_MUTATION,{
    refetchQueries: [
      {query: BOOKS_QUERY},
      'books'
    ],
  });

  useEffect(() => {
    if(data){
      setBooks(data.books)
    }

    if(error){
      console.log(error)
    }
  }, [data]);

  const removeBook = (id) => {
    deleteBook({
      variables:{
        id
      }
    })
   
    if(mutationerror){
      console.log(mutationerror)
    }
    
  }

  const setBookDetails = (book) => {
    let { id, description, name } = book;
    localStorage.setItem('ID', id);
    localStorage.setItem('Name', name)
    localStorage.setItem('Description', description)
    navigate("/update")
  }

  return (
    <SimpleGrid spacing={10} minChildWidth={300}>
      {console.log(books)}
      {books && books.map(book => (
        <Card key={book.id} borderTop="8px" borderColor="34495E" bg="white">

          <CardHeader color="#34495E">
            <Flex gap={5}>
              <Box>
                <Heading as="h3" size="sm">Book: {book.name}</Heading>
              </Box>
            </Flex>
          </CardHeader>

          <CardBody color="gray.500">
          <Text as="h3">Description:</Text>
            <Text>{book.description}</Text>
          </CardBody>

          <Divider borderColor="gray.400" />

          <CardFooter>
            <HStack>
             {isAuthenticated && <Button onClick={()=> removeBook(book.id)} variant="ghost" leftIcon={<DeleteIcon />}>Delete</Button>}
              {isAuthenticated && <Button variant="ghost" leftIcon={<EditIcon />} onClick={()=> setBookDetails(book)}>Edit</Button>}
            </HStack>
          </CardFooter>

        </Card>
      ))}
    </SimpleGrid>
  )
}
