import './App.css'
import RenderResults from './components/RenderResults'
import SearchBar from './components/SearchBar'
import React, { useState, useEffect } from 'react'

function App() {

  const [library, setLibrary] = useState([])

  /* Brukte forelesning-materiale & ChatGPT for å skape fetch for alle bøker */
  useEffect(() => {
    const fetchBondBooks = async () => {
      try {
        const response = await fetch('https://openlibrary.org/search.json?q=james+bond')
        const data = await response.json()
        setLibrary(data.docs)
      } catch (error) {
        console.error('Det oppsto ett problem:', error)
      }
    }

    fetchBondBooks()
  }, [])

  return (
    <main>
      <header>
        <h1>Velkommen til API Boksøk!</h1>
        <p>Vennligst skriv inn en tittel og klikk søk.</p>
      </header>
        <SearchBar onSearch={setLibrary} />
        <RenderResults results={library} />
    </main>
  )
}

export default App