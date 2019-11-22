import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default class CreateStudent extends Component {

  
constructor(props) {
    super(props)
    this.state ={
        name:'',
        email:'',
        id:''
    }
    
}

  render() {
    return (<div class="form-wrapper">
      <Form onSubmit={this.onSubmit.bind(this)}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value= {this.state.name} onChange={this.handleStudentNameChange.bind(this)}/>
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.sh}/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Student
        </Button>
      </Form>
    </div>);
  }


  handleStudentNameChange(e){
    this.setState({name:e.target.value});
  }

  handleEmailChange(e){
      this.setState({email :e.target.value});
  }

  handleIDChange(e){
      
    this.setState({id :e.target.value});
  }
  onSubmit(e) {
    e.preventDefault()

    console.log(`Student successfully created!`);
    console.log(`Name: ${this.state.name}`);
    console.log(`Email: ${this.state.email}`);
    console.log(`Roll no: ${this.state.rollno}`);

    this.setState({name: '', email: '', rollno: ''})
  }
}