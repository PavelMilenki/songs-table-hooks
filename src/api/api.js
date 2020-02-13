import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://raw.githubusercontent.com/PavelMilenki/songs-table/master/public/songs.json'

});

export const api ={
    getSongs() {
        return instance.get("")
    },
};