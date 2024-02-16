import React from "react";

export default function CatCard({ imgSrc, name, description, link }) {
  return (
    <div className="col-sm mb-3">
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <a href={link} target="_blank" className="btn btn-primary">
            Wikipedia Link
          </a>
        </div>
      </div>
    </div>
  );
}
