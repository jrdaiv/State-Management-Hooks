import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const ContactList = () => {
  const { contacts, selectedContact, setSelectedContact } = useContext(UserContext);

  const handleClick = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} onClick={() => handleClick(contact)}>
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
