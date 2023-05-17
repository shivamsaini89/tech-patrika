import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } = this.props;
    return (
      <>
        <div className="my-4 ">
          <div className="card" style={{ width: 18 + 'rem' }}>
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-success" style={{ zIndex: '1', left: '90%' }} >{source}</span>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-success">By {!author ? "Unknown" : author} on {new Date(publishedAt).toGMTString()}</small></p>
              <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}
