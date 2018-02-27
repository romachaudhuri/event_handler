// "use strict"
import React from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postBooks,deleteBooks} from '../../actions/booksActions';
import {findDOMNode} from 'react-dom';

class BooksForm extends React.Component{

    handleSubmit(){
       const book=[{
        title:findDOMNode(this.refs.title).value, 
        description:findDOMNode(this.refs.description).value, 
       price:findDOMNode(this.refs.price).value, 
       }]
        this.props.postBooks(book);
    }

    render(){
        return(
        <Well>
          <Panel>
              <h6>DETAILS</h6>
              <FormGroup controlId="title">
                <ControlLabel>Full Name</ControlLabel>
                <FormControl
                type="text"
                placeholder="Full Name"
                ref="title" />
              </FormGroup>

                <FormGroup controlId="Description">
                <ControlLabel>Description</ControlLabel>
                <FormControl
                type="text"
                placeholder="Enter Description"
                ref="description" />
              </FormGroup>

                <FormGroup controlId="price">
                <ControlLabel>Age</ControlLabel>
                <FormControl
                type="text"
                placeholder="Enter age"
                ref="price" />
              </FormGroup>
              <Button onClick={this.handleSubmit.bind(this)}bsStyle="primary">SAVE </Button>
              </Panel>  
        </Well>
        )
    }
}
function mapStateToProps(state){
    return{
        books:state.books.books 
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        postBooks,
        deleteBooks
    },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);