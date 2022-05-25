import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetails from './BookDetails';

const BookList = () => {
    const { books, setBooks } = useContext(BookContext);
    return books.length ? (
        <div className='book-list'>
            <ul>
                {books.map(book => <BookDetails key={book.id} book={book} />)}
            </ul>
        </div>
    ) : (
        <div className='empty'>No books for free. Hello free time</div>
    )
}

export default BookList
