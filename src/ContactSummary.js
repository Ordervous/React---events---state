import React from 'react'
import Alert from 'react-bootstrap/Alert'

class ContactSummary extends React.Component {
  render() {
    return (
      <div>
       { this.props.contacts.length ?
         <Alert variant="success">Total Number of Contacts: {this.props.contacts.length}</Alert> :
         <Alert variant="warning">Sorry, no contacts found :(</Alert>}
      </div>)
    }
  }

export default ContactSummary