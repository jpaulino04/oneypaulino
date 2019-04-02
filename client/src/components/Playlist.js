import React, { Component } from 'react'

export default class Playlist extends Component {
  render() {
    return (
      <div className="row mx-0 my-4 col-12"> 
        <iframe className="mx-auto d-block" width="620" height="420" src="https://www.youtube.com/embed/videoseries?list=PLWme-k7nWuTr6OJWFt1BvDaA8PXo6pEbQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    )
  }
}
