import React, { useState } from 'react'

function SearchBar({onSearch}) {

  const [search, setSearch] = useState('')
  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  /* Brukte ChatGPT for å skape handleSubmit */
  const handleSubmit = (event) => {
    event.preventDefault()
    if (search.length >= 3) {
      fetchBooks(search)
    }
  }

  /* Brukte dette som inspirasjon for const fetchBooks 
  https://stackoverflow.com/questions/51274161/fetching-book-title-from-google-books-api-with-isbn */
  const fetchBooks = async (word) => {
    const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(word)}`)
    const data = await response.json()
    onSearch(data.docs)
  }

  return (
    /* Brukte forelesnings-materiale for form-struktur og input */
    <section>
        <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleChange} placeholder="Søk her..."/>
        <button type="submit">Søk</button>
        </form>
    </section>
  )
}

export default SearchBar