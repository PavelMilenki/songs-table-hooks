import {api} from "../api/api";

const SET_SONGS = '/redux/songsReducer/SET_SONGS';
const SET_CURRENT_SONGS = '/redux/songsReducer/SET_CURRENT_SONGS';
const SET_PAGE = '/redux/songsReducer/SET_PAGE';

const initialState = {
    songs: [],
    currentSongs: [],
    totalCount: 1,
    page: 1,
    pageCount: 5
    };

export const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SONGS:
            return {
                ...state,
                songs: action.songs,
                currentSongs: action.songs,
                totalCount: action.songs.length
            };

        case SET_CURRENT_SONGS:
            return {
                ...state,
                currentSongs: action.songs,
                totalCount: action.songs.length
            };
        case SET_PAGE:
            return {
                ...state,
                page: action.page,
                pageCount: action.pageCount,
            };
        default:
            return state;
    }
};

export const setSongs = (songs) => {
    return {
        type: SET_SONGS,
        songs
    }
};

export const setCurrentSongs = (songs) => {
    return {
        type: SET_CURRENT_SONGS,
        songs
    }
};

export const setPage = (page, pageCount) => {
    return {
        type: SET_PAGE,
        page, pageCount
    }
};

export const getSongs = () => async (dispatch) => {
    try {
        const data = await api.getSongs();
        dispatch(setSongs(data.data));
    } catch (e) {
        console.log('Message error' + e);
    }
};