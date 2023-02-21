import { useState } from 'react';
// import PropTypes from 'prop-types';
import {
  FormWrapper,
  FormDiv,
  FormLabel,
  FormText,
  FormBtn,
  FormInput,
} from './ContactForm.styled';

// const useLocalStorage = (key, defaultValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem) ?? 'defaultValue';
//   });

//   useEffect(() => {
//      window.localStorage.setItem(key, JSON.stringify(state));
//    }, [key, state]);
//    return [state, setState];
//  };

const ContactForm = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    console.log(event.target);
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
  };

    return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </FormLabel>
        </FormDiv>
        <FormBtn type="submit">Add contact</FormBtn>
      </form>
    </FormWrapper>
  );
};


// ContactForm.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.string,
//   handleChange: PropTypes.func,
//   handleSubmit: PropTypes.func,
// };

export default ContactForm;