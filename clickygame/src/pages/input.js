import React, {Component} from 'react';

import {Textbox, Button} from "../../src/components/Form"

import Container from "../../src/components/Container"


class Input extends Component {
state = {
  name: "",
  email: "",
  phone: "",

}

handleInputChange = (event) => {

      const {name, value} = event.target

     this.setState({
        [name]:value   
     })

}


handleFormSubmit = (event) => {

      console.log("name:" , this.state.name, "email: ", this.state.email, "phone: ", this.state.phone)

}

  render(){
    return (
     <Container>
  
      name:  <Textbox  textboxname="name" textboxvalue={this.state.name} handleInputChange = {this.handleInputChange} />
      email:  <Textbox textboxname="email" textboxvalue={this.state.email} handleInputChange = {this.handleInputChange} />
      phone:   <Textbox textboxname="phone" textboxvalue={this.state.phone} handleInputChange = {this.handleInputChange} />
      <Button handleFormSubmit = {this.handleFormSubmit}>Submit</Button>
       
     
      
     </Container>
        
  
        )
    }
}

export default Input
