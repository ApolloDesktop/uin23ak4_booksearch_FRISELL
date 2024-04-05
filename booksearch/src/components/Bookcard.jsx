import React from 'react'

function Bookcard({book}) {

  const bookImage = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`

  return (
    /* Brukte ChatGPT for {}-calls og amazon_id struktur */
    <section id="bookcardResult">
      <div id="bookImage">
        <img src={bookImage} alt="cover" />
      </div>
      <article id="bookDesc">
        <h2>{book.title}</h2>
        <h3>Forfatter: {book.author_name && book.author_name.join(', ')}</h3>
        <p>Utgivelsesår: {book.first_publish_year}</p>
        <p>Gjennomsnittlig Vurdering: {book.average_rating || 'N/A'}</p>
        {/* Fikset error-meldinger med innlegg:
        https://stackoverflow.com/questions/58329895/how-can-i-avoid-vulnerability-with-target-blank-in-a-hyperlink */}
        <a href={`https://www.amazon.com/s?k=${book.amazon_id}`} target="_blank" rel="noopener noreferrer">Finn boken på Amazon</a>
      </article>
    </section>
  )
}

export default Bookcard