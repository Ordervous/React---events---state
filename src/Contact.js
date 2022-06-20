import React from 'react';

class Contact extends React.Component {
  render() {
    let { first_name, last_name, email, phone } = this.props.contact
    return (
      <tr>
        <td>{first_name} {last_name}</td>
        <td><a href={`mailto:${email}`}>{email}</a></td>
        <td>{phone}</td>
      </tr>
    )
  }
}

export default Contact