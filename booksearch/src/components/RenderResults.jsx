import React from 'react'
import Bookcard from './Bookcard'

function RenderResults({results}) {
  return (
    <section id="results">
      {results.map((result, index) => (
        <Bookcard key={index} book={result} />
      ))}
    </section>
  )
}

export default RenderResults