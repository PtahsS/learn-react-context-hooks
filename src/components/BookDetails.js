import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookDetails = ({ book }) => {
    const { removeBook } = useContext(BookContext);
    console.log("book", book);
    return (
        <li onClick={() =>{
            console.log("book.id", book.id);
            removeBook(book.id)
        } }>
            <div className='title'>{book.title}</div>
            <div className='author'>{book.author}</div>

        </li>
    )
}

export default BookDetails