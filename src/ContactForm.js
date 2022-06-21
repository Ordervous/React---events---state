import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class ContactForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        first_name: "",
        last_name: "",
        email: "",
        phone: ""
      }

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
  }

  handleSubmit() {
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
        </Form.Group>
        <Button type="submit">Add Contact</Button>
      </Form>
    )
  }
}

export default ContactForm;
