import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem(props) {
  return (
    <div className="card">
      <div className="btn-container">
        <a href={props.link} target="_blank">
          <span className="view-btn btn card-btn">View</span>
        </a>
  <span className="save-btn btn card-btn" onClick={props.clickEvent} data-id={props.dataId}>{props.buttonName}</span>
      </div>
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.author}</p>
      <div className="card-body row">
        <img src={props.image} alt={props.title} className="col-sm-1"></img>
        <p className="card-text col-sm-10">{props.description}</p>
      </div>

    </div>
  )
}
