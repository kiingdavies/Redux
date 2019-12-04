import { combineReducers } from 'redux';

// Reducers which are the various states of this app

const songsReducer = () => {
  return [
      { title: 'No Scrubs', duration: '2:05' },
      { title: 'Macarena', duration: '3:15' },
      { title: 'All Stars', duration: '4:01' },
      { title: 'I Want it That Way', duration: '1:35' },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    // we care about this action
    return action.payload;
  }
  //else we dont care about this action
  return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});