import { createContext, useState } from "react";
import uuid from "react-uuid";

export const BookContext = createContext();

const BookContextProvider = props => {
    const [books, setBooks] = useState([
        { title: 'Funny sumo', author: 'Robinson', id: 1 },
        { title: 'After midnight', author: 'Kirbenko', id: 2 },
    ])

    const addBook = (title, author) => {
        setBooks([...books, { title, author, id: uuid() }])
    }

    const removeBook = id => setBooks(books.filter(book => book.id != id))


    return (
        <BookContext.Provider value={{ books, setBooks, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;