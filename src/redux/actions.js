import { createAction } from "@reduxjs/toolkit";
// import shortid from "shortid";

// const addContact = createAction("contact/add", (name, number) => {
//   return {
//     payload: {
//       id: shortid.generate(),
//       name,
//       number,
//     },
//   };
// });

// const deleteContact = createAction("contact/delete");

const filterContact = createAction("contact/filterChange");

export default { filterContact };
