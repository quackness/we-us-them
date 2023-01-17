import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary bg-primary">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand">
            E-mail app
          </Link>
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
