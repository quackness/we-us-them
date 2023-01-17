import { useState, useEffect } from "react";
import axios from "axios";

export default function EditContact(props) {
  const { contact, setContacts, contacts } = props;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  // const [image, setImage] = useState([]);

  const headerConfig = {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION}`,
    },
  };

  function onSubmitEditForm(e) {
    e.preventDefault();
    console.log(e.currentTarget);

    const contactData = {
      fields: {
        name,
        phone,
        email,
      },
      // featured_media: newImage.id,
      status: "publish",
    };
    return axios
      .post(
        `http://localhost/wordpress/wp-json/wp/v2/contacts/${contact.id}`,
        contactData,
        headerConfig
      )
      .then((response) => {
        const editedContact = response.data;
        console.log("editedContact", editedContact);
        const newElement = [editedContact, ...contacts];
        setContacts(newElement);
        axios
          .get(`http://localhost/wordpress/wp-json/wp/v2/contacts`)
          .then(function (res) {
            setContacts([...res.data]);
          })
          .catch((err) => console.log(err));
      }, []);
  }

  return (
    <>
      <div>
        <button
          type="button"
          class="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target={`#editContact${contact.id}`}
        >
          Edit contact
        </button>
      </div>

      <div
        class="modal fade"
        id={`editContact${contact.id}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Edit contact
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={onSubmitEditForm}>
              <div class="modal-body">
                <div class="mb-3">
                  <label for="name" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <label for="phone" class="form-label">
                    Phone
                  </label>

                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <label for="excerpt" class="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="excerpt"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  {/* <label for="image" class="form-label">
                    Image
                  </label>
                  <input type="file" class="form-control" id="file" /> */}
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Edit a contact
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
