import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="container col-10">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem(props) {
  return (
    <div className="card p-3">
      <div className="btn-container">
        <a href={props.link} target="_blank">
          <span className="view-btn btn card-btn">View</span>
        </a>
        <span className={props.class} onClick={props.clickEvent} data-id={props.dataId}>{props.buttonName}</span>
      </div>
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.author}</p>
      <div className="card-body row">
        <img src={props.image} alt={props.title} className="col-md-2"></img>
        <p className="card-text col-sm-10">{props.description}</p>
      </div>

    </div>
  )
}
