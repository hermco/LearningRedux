export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    data: book
  };
}
