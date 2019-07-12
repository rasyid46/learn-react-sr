import { combineReducers} from 'redux';

const songReducer = () => {
    return [
        { title : 'No Scrubs', duration : '4:05'},
        { title : 'Macarena', duration : '2:05'},
        { title : 'All Start', duration : '3:05'},
        { title : 'I Want it That Way', duration : '1:05'},
    ];
};

const selectedSongReducer = (selectSong = null , action ) => {
    if(action.type == 'SONG_SELECTED'){
        return action.payload;
    }

    return selectSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong : selectedSongReducer
});