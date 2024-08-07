import React, { useState } from 'react'
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetails';
import UserContext from './context/UserContext';


const App = () => {
  const [contacts, setContacts] = useState([
    {name: 'John Doe', email: 'john@example.com', phone: '000000000000' },
    {name: 'Jane Smith', email: 'jane@example.com', phone: '111111111111' },
    {name: 'Bob Johnson', email: 'bob@example.com', phone: '222222222222' },
    {name: 'Alice Brown', email: 'alice@example.com', phone: '333333333333' },
  ]);

  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div>
      <UserContext.Provider value={{ contacts, setContacts, selectedContact, setSelectedContact }}>
        <ContactList />
        {selectedContact && <ContactDetail />}
      </UserContext.Provider>
    </div>
  );
}

export default App;