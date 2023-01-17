import { useState, useEffect } from "react";

export default function EditContact(props) {

  const { contact, setContacts, contacts } = props;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  // const [image, setImage] = useState([]);

  function onSubmitEditForm(e) {

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
                {/* <button
                  type="submit"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Edit a contact
                </button> */}
           
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
