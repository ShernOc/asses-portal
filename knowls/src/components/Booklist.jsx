import React, { useState, useEffect } from 'react';

// fetching the data. 
function BooksList() {
    const [books, setBooks] = useState([]);

    // GOOGLE API BOOKS: 
  const fetchBooks = async (query) => {
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};

// Example usage
fetchBooks('JavaScript')
.then(books => {
  console.log('Books:', books);
});

    useEffect(() => {
          axios.get('http://localhost:5000/api/books')
            .then(response => {
              setBooks(response.data);
            })
            .catch(error => {
              console.error('There was an error fetching the books!', error);
            });
        }, []);
      
        return (
          <div>
            <h2>Books List</h2>
            <ul>
              {books.map(book => (
                <li key={book.id}>{book.title} - Bought by: {book.user}</li>
              ))}
            </ul>
          </div>
        );
      }

export default BooksList;

