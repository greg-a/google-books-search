import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="book-search">Search for a book:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          type="text"
          className="form-control"
          placeholder="Search for a book"
          id="book-search"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success float-left">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
