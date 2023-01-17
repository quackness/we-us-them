export default function NavBar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand">E-mail app</a>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
