import React, { Component } from 'react';
import Songs from './Songs';
import axios from 'axios';
import AllAlbums from './AllAlbums.js';
import { HashRouter, Route, Link } from 'react-router-dom';

export default class SingleArtist extends Component {

  constructor(){
    super();
    this.state = {
      selectedArtist: {},
      artistAlbums: [],
      artistSongs: []
    }
  }

  componentDidMount () {
    const artistId = this.props.match.params.artistId;
    
    axios.get(`/api/artists/${artistId}` )
      .then(res => res.data)
      .then(artists => {
        this.setState({ selectedArtist:artists })
      });

    axios.get(`/api/artists/${artistId}/albums` )
      .then(res => res.data)
      .then(albums => {
        this.setState({ artistAlbums:albums })
  });
    axios.get(`/api/artists/${artistId}/songs` )
    .then(res => res.data)
    .then(songs => {
      this.setState({ artistSongs:songs })
  });
  }



  render () {

  const artist = this.state.selectedArtist;
  console.log(this.state);

  return (
    <div>
      <h3>{ artist.name }</h3>
      <ul className="nav nav-tabs">
        <li><Link to="TODO">ALBUMS</Link></li>
        <li><Link to="TODO">SONGS</Link></li>
      </ul>

      {/* Routes will go here! */}
    </div>
  );
}
}
