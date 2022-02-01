import React from "react";
import { ContactItem, DeleteButton, Contact } from "./Contacts.styled";
// import { useDispatch, useSelector } from "react-redux";
import { useFetchContactsQuery, useDeleteContactsMutation} from "../../contactsSlice";

const Contacts = () => {

  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [deleteContacts] = useDeleteContactsMutation();


  // const dispatch = useDispatch();

  // const contacts = useSelector(state => {
  //   const { filter, items } = state.contacts;
  //   const normalizedFilter = filter.toLowerCase();
  //   const filteredContacts = items.filter(item =>
  //     item.name.toLowerCase().includes(normalizedFilter)
  //   );
  //   return filteredContacts;
  // })
  
  return (
    <>
      {isFetching && <p>Loading...</p>}
      {contacts && <ContactItem>
      {contacts.map((contact) => (
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
