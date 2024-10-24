const initialState = {
        books: []
      };
      
      const bookReducer = (state = initialState, action) => {
        switch (action.type) {
          case 'ADD_BOOK':
            return {
              ...state,
              books: [...state.books, action.payload]
            };
          case 'DELETE_BOOK':
            return {
              ...state,
              books: state.books.filter(book => book.id !== action.payload)
            };
          case 'EDIT_BOOK':
            return {
              ...state,
              books: state.books.map(book => 
                book.id === action.payload.id ? action.payload.updatedBook : book
              )
            };
          default:
            return state;
        }
      };
      
      export default bookReducer;