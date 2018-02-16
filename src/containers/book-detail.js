import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderBook() {
      return this.props.activeBook.title;
  }

  render() {
    if (!this.props.activeBook){
      return (
        <div>No book selected yet ...</div>
      );
    }

    return (
      <div>
        <h3> Details : </h3>
        { this.renderBook() }
      </div>
    );
  }

}

// w/e is returned ends up as a prop in the object CONNECTED to this function
function mapStateToProps(state) { //state is a global state managed by reducers, specifically the root reducer
  return {
    activeBook: state.activeBook
  };
}

//here we have a prop called this.props.selectBook available in our container connected : BookList
//we also have a prop called this.props.books that contains the data (the books)
export default connect(mapStateToProps)(BookDetail);
