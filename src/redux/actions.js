import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contact/add", (name, number) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});

const deleteContact = createAction("contact/delete");

const filterContact = createAction("contact/filterChange");

export default { addContact, deleteContact, filterContact };
