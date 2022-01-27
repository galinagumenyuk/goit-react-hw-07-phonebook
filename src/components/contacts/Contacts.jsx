import React from "react";
import { ContactItem, DeleteButton, Contact } from "./Contacts.styled";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions";

const Contacts = () => {

  const dispatch = useDispatch();

  const contacts = useSelector(state => {
    const { filter, items } = state.contacts;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = items.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
    return filteredContacts;
  })

  const onDelete = (id) => dispatch(actions.deleteContact(id));

  return (
    <ContactItem>
      {contacts.map((contact) => (
        <Contact key={contact.id}>
          <span>{contact.name}:</span>
          <span>{contact.number}</span>
          <DeleteButton
            type="button"
            onClick={()=>onDelete(contact.id)}
          >
            Delete
          </DeleteButton>
        </Contact>
      ))}
    </ContactItem>
  );
};

export default Contacts;
