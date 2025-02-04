import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const ContactDetails = () => {
  const { selectedContact } = useContext(UserContext);

  if (!selectedContact) {
    return <div>Please select a contact to see the details.</div>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {selectedContact.name}</p>
      <p>Email: {selectedContact.email}</p>
      <p>Phone: {selectedContact.phone}</p>
    </div>
  );
};

export default ContactDetails;
