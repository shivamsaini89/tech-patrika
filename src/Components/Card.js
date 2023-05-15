import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <>
        <div className="my-4">
          <div className="card" style={{ width: 18 + 'rem' }}>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}
