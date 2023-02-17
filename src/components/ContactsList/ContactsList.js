import PropTypes from 'prop-types';
import { ContactsUl, ContactsItem,ContactsText, ContactsSpan, ContactsBtn, ContactsDiv } from './ContactsList.styled';
const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ContactsUl>
      {contacts.map(({id, name, number}) => {
        return (
          <ContactsItem key={id}>
            <ContactsDiv>
            <ContactsText>
              <ContactsSpan> {name}</ContactsSpan>: <ContactsSpan>{number}</ContactsSpan>
            </ContactsText>
            <ContactsBtn type="button" onClick={() => onDelete(id)}>
              delete
            </ContactsBtn>
            </ContactsDiv>
          </ContactsItem>
        );
      })}
    </ContactsUl>
  );
};
export default ContactsList;

ContactsList.protoTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
