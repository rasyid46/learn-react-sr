import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
    console.log('SOng detail');
    console.log(song);
  if(!song){
       return <div>Select a song </div>;
  }
   return <div>
    <h3> Detail For : </h3>
    <p>
        title :   {song.title}
        duration : {song.duration}
    </p>
    </div>
};

const mapStateToProps = state => {
  return { song : state.selectedSong };
};

export default connect (mapStateToProps)(SongDetail);