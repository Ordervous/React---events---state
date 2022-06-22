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

    handleChange(event) {
        console.log(`${event.target.name}: ${event.target.value}`)
        //     let newState = {}
        //   if (event.target.name === "first_name") { newState.first_name = event.target.value }
        //   if (event.target.name === "last_name") { newState.last_name = event.target.value }
        //   if (event.target.name === "email") { newState.email = event.target.value }
        //   if (event.target.name === "phone") { newState.phone = event.target.value }
        // Since the target sname matches the attribute we can reduce to just this =>
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.onSubmit(this.state)
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
                <Form.Select className="mb-3" value={this.state.country} onChange={this.handleChange}>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Mexico">Mexico</option>
                </Form.Select>
                <Form.Control className="mb-3" as="textarea" value={this.state.comment} onChange={this.handleChange} />


                <Button type="submit">Add Contact</Button>
            </Form>
        )
    }
}

export default ContactForm;
