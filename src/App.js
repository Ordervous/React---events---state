import React from 'react';
import Stack from 'react-bootstrap/Stack'
import ContactList from './ContactList'
import ContactSummary from './ContactSummary'
import ContactActions from './ContactActions'
// import Contact from './Contact.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [] };
    this.onNewContact = this.onNewContact.bind(this);
    this.handleContactSelected = this.handleContactSelected.bind(this);

  }

  onNewContact(contact) {
    this.setState((state) => {
      return {
        contacts: state.contacts.concat(contact)
      }
    })
  }

  handleContactSelected(email) {
    this.setState((state) => {
      return {
        selected: email
      }
    })
  }

  render() {
    return (
      <Stack gap={3} className="col-md-10 mx-auto">
        <ContactActions onNewContact={this.onNewContact}/>
        <ContactList contacts={this.state.contacts} onContactSelected={this.handleContactSelected}/>
        <ContactSummary contacts={this.state.contacts} />
      </Stack>
    )
  }
}

export default App;
