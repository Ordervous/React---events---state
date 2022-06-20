import React from 'react';
import Stack from 'react-bootstrap/Stack'
import ContactList from './ContactList'

function App() {
  return (
    <Stack gap={3} className="col-md-10 mx-auto">
      <ContactList />
    </Stack>
  );
}

export default App;
