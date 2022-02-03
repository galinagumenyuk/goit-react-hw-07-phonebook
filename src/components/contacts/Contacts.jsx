import React from "react";
import { ContactItem, DeleteButton, Contact } from "./Contacts.styled";
import { useSelector } from "react-redux";
import { useFetchContactsQuery, useDeleteContactsMutation } from "../../contactsSlice";
import { SpinnerDiamond} from 'spinners-react';


const Contacts = () => {

  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [deleteContacts] = useDeleteContactsMutation();

  const contactsFilter = useSelector(state => {
    const { filter } = state.contacts;
    const normalizedFilter = filter.toLowerCase();
    let filteredContacts = [];
    if (contacts) {
      filteredContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
      );
    };
    return filteredContacts;
  })
  
  return (
    <>
      {isFetching && <SpinnerDiamond size="300" secondaryColor='#ffffff' color=" #A2D9CE" speed='80'/>}
      {contacts && <ContactItem>
      {contactsFilter.map((contact) => (
        <Contact key={contact.id}>
          <span>{contact.name}:</span>
          <span>{contact.phone}</span>
          <DeleteButton
            type="button"
            onClick={()=>deleteContacts(contact.id)}
          >
            Delete
          </DeleteButton>
        </Contact>
      ))}
    </ContactItem>}</>
  );
};

export default Contacts;
