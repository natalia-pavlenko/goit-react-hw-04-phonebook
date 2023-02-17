import React, { Component } from 'react';
import PropTypes from "prop-types";
import { FormWrapper,
  FormDiv,
  FormLabel,
  FormText,
  FormBtn,
  FormInput,
} from './ContactForm.styled'
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };
  render() {
    const { name, number } = this.state;
   
    return (
      
      <FormWrapper>
        <form onSubmit={this.handleSubmit}>
          <FormDiv>
            <FormLabel htmlFor="name">
              <FormText>Name</FormText>
              <FormInput
                id="name"
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChange}
              />
            </FormLabel>
          </FormDiv>
          <FormDiv>
            <FormLabel htmlFor="number">
              <FormText> Number</FormText>
              <FormInput
                id="number"
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChange}
              />
            </FormLabel>
          </FormDiv>
          <FormBtn type="submit">Add contact</FormBtn>
        </form>
      </FormWrapper>
    );
  }
}
export default ContactForm;

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  
};