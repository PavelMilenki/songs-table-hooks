import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://raw.githubusercontent.com/PavelMilenki/songs-table-hooks/master/src/songs.json'

});

export const api ={
    getSongs() {
        return instance.get("")
    },
};