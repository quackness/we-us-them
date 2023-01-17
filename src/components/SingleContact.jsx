import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import EditContact from "./EditContact";

export default function SingleContact(props) {
  const { id, contact, setContacts, contacts } = props;
  const [image, setImage] = useState("");

  const config = {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION}`,
    },
  };

  const navigate = useNavigate();

  const deleteContact = function (id) {
    return axios
      .delete(
        `http://localhost/wordpress/wp-json/wp/v2/contacts/${contact.id}`,
        config
      )
      .then((res) => {
        setContacts(contacts.filter((contact) => contact.id !== id));
      });
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost/wordpress/wp-json/wp/v2/media/${contact.featured_media}`,
        config
      )
      .then(function (res) {
        console.log("media res", res);
        setImage(res.data.source_url);
      });
  }, []);

  return (
    <>
      <tr key={contact.id}>
        <td>
          <img src={image} width="300" margin-left="50" />
        </td>

        <td>
          <Link to={`/contact/${contact.id}`}> {contact.acf.name} </Link>
        </td>

        <td>{contact.acf.phone}</td>
        <td>{contact.acf.email}</td>
        <td>
          <EditContact
            contact={contact}
            setContacts={setContacts}
            contacts={contacts}
          />
          {/* <button type="button" className="btn btn-success">
            Edit
          </button> */}
        </td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
