import React from 'react';
import AddBook from './components/Addbooks';
import BookList from './components/Booklist';

const App = () => {
  return (
    <div>
      <h1>BOOK MANAGEMENT SYSTEM</h1>
      <h1>You can Add the Books here</h1>
      <AddBook />
      <BookList />
    </div>
  );
};

export default App;