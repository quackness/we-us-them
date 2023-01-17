import axios from "axios";
import { useState, useEffect } from "react";
import SingleContact from "./SingleContact";
import AddContact from "./AddContact";

export default function Contacts() {
  const [contacts, setContacts, contact] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost/wordpress/wp-json/wp/v2/contacts`)
      .then(function (response) {
        setContacts([...response.data]);
      });
  }, []);

  return (
    <>
      <AddContact contacts={contacts} setContacts={setContacts} />

      <div>
        <table className="table-bordered">
          <thead>
            <tr>
              <th scope="col">Avatar</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <SingleContact
                key={contact.id}
                contact={contact}
                setContacts={setContacts}
                contacts={contacts}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
