export default function(state = null, action) { //if state undefinied, it's set to null
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.data;
      break;
    default:
      //ain't doing nothing here
      break;
  }
  return state;
}
