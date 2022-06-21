import React from 'react'
import { faker } from '@faker-js/faker';
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

class ContactActions extends React.Component {
  constructor(props) {
    super(props)
    this.handleGenerateContact = this.handleGenerateContact.bind(this)
    // this.generateContact = this.generateContact.bind(this)
  }

  generateContact() {
    let firstName = faker.name.firstName()
    let lastName = faker.name.lastName()
    return {
      first_name: firstName,
      last_name: lastName,
      email: faker.internet.exampleEmail(firstName, lastName),
      phone: faker.phone.phoneNumber()
    }
  }

  handleGenerateContact() {
    this.props.onNewContact(this.generateContact())
  }

  render() {
    return <Stack direction='horizontal' gap={3}>
    <Button onClick={this.handleGenerateContact}>
      Generate Contact
    </Button>
    </Stack>
  }
}

export default ContactActions