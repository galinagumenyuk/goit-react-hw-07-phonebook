import { useState } from "react";
import { AddButton } from "./Form.styled";
import { useCreateContactsMutation, useFetchContactsQuery } from "../../contactsSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const [createContact] = useCreateContactsMutation();
  const { data: contacts} = useFetchContactsQuery();

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "number":
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };
  
  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      toast(`Contact ${name} is already exists`);
      setName("");
      setNumber("");
      return;
    }
    
    createContact(name, number);
    setName("");
    setNumber("");  
  };
  
  return (
    <form onSubmit={onHandleSubmit}>
      <label>
        name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <AddButton type="submit"> Add contact </AddButton>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </form>
  );
}

export default Form;

