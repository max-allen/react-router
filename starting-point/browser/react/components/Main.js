import React, { Component } from 'react';
import StatefulAlbums from './StatefulAlbums';
import AllArtists from './AllArtists';
import SingleAlbum from './SingleAlbum';
import SingleArtist from './SingleArtist';
import Sidebar from './Sidebar';
import Player from './Player';
import { HashRouter, Route } from 'react-router-dom';

export default class Main extends Component {

  constructor (props) {
    super(props);
  }

render () {
    return (
      <HashRouter>
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar />
        </div>
        <div className="col-xs-10">
          <Route exact path ='/albums' component={StatefulAlbums} />
          <Route path="/albums/:albumId" component={SingleAlbum} />
          <Route path="/artists/:artistId" component={SingleArtist} />
          <Route exact path = '/' component={StatefulAlbums} />
          <Route exact path="/artists" component={AllArtists} /> 
        </div>
        <Player />
      </div>
      </HashRouter>
    );
  }
}

