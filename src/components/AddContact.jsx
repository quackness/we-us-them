export default function AddContact() {
  function onSubmitForm() {}
  return (
    <>
      <div className="addBookButton">
        <button
          type="button"
          className="btn btn-warning col-6"
          data-bs-toggle="modal"
          data-bs-target="#addContact"
        >
          Add a contact
        </button>
      </div>

      <div
        class="modal fade"
        id="addContact"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Add a new contact
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={onSubmitForm}>
              <div class="modal-body">
                <div class="mb-3">
                  <label for="title" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    // value={title}
                    // onChange={(e) => setTitle(e.target.value)}
                  />

                  <label for="content" class="form-label">
                    Phone
                  </label>

                  <input
                    type="text"
                    class="form-control"
                    id="content"
                    // value={content}
                    // onChange={(e) => setContent(e.target.value)}
                  />

                  <label for="excerpt" class="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="excerpt"
                    // value={excerpt}
                    // onChange={(e) => setExcerpt(e.target.value)}
                  />

                  <label for="image" class="form-label">
                    Avatar
                  </label>
                  <input type="file" class="form-control" id="file" />
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
                  Add a contact
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
