import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    return this.props.books.map( book => {
      return (
        <li
          onClick={ () => this.props.selectBook(book) }
          key={book.title}
          className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }

}

// w/e is returned ends up as a prop in the object CONNECTED to this function
function mapStateToProps(state) { //state is a global state managed by reducers, specifically the root reducer
  return {
    books: state.books
  };
}

// w/e is returned ends up as a prop in the object CONNECTED to this function
function mapDispatchToProps(dispatch) { //dispatch allows the action executed to be DISPATCHED to all the reducers
  return bindActionCreators ({ selectBook: selectBook}, dispatch); //whenever selectBook is called (upon selection), the action associated here is called
}

//here we have a prop called this.props.selectBook available in our container connected : BookList
//we also have a prop called this.props.books that contains the data (the books)
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
