import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Search For Books
      </a>
      <a className="navbar-brand ml-3" href="/saved">
        My Saved Books
      </a>
    </nav>
  );
}

export default Nav;
