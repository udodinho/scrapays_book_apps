import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { CREATE_BOOK_MUTATION } from '../Mutation'
import { useMutation } from '@apollo/client'
import { BOOKS_QUERY } from '../Query'
import InputForm from '../components/FormInput'

export default function Create() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const [createBook, {error}] = useMutation(CREATE_BOOK_MUTATION, {
    refetchQueries: [
      {query: BOOKS_QUERY},
      'books'
    ],
  });

  function addBook(){
    createBook({
      variables:{
        name,
        description
      }
    })

    if(error){
      console.log(error)
    }
    return navigate('/')
  }

  return (
    <InputForm action={addBook} updateName={setName} updateDescription={setDescription} name="CREATE BOOK"/>
  )
}
