import { Container, ListTitle } from "./App.styled";
import Form from "./components/form/Form.jsx";
import Contacts from "./components/contacts/Contacts.jsx";
import Filter from "./components/filter/Filter.jsx";

function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <ListTitle>Contacts</ListTitle>
      <Filter />
      <Contacts />
    </Container>
  );
}

export default App;
