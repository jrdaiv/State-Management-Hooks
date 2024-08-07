
import {createContext}from 'react'


const UserContext = createContext({
    contacts: [],
    selectedContact: null,
    setContacts: () => {},
    setSelectedContact: () => {}
})

export default UserContext