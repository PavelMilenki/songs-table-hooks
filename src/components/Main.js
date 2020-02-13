import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSongs, setCurrentSongs, setPage,  setSongs} from "../redux/songsReducer";
import s from '../App.module.css'
import {TableBody} from "./TableBody";
import {Table} from "./Table";
import {Selects} from "./Selects";
import {Pagination} from "./Pagination";
import {slice} from "lodash";

export const ARTIST = "Artist";
export const SONG = "Song";
export const COUNTRY = "Country";
export const YEAR = "Year";
export const ALL = 'ALL';
export const UP = "up";
export const DOWN = "down";

export const Main = () => {

    const {currentSongs, songs, page, pageCount, totalCount} = useSelector((state) => state.songsPage);
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(ALL);

    useEffect(() => {
        dispatch(getSongs());
    }, [dispatch]);

    
    const tableElements = slice(currentSongs, [(page - 1) * pageCount], [pageCount * page]).map(s => {
       return <TableBody year={s.Year}
                          country={s.Country}
                          artist={s.Artist}
                          song={s.Song}
                          key={s.Year + Math.random()}/>
    });

    const sortSongParams = (songParam, direction) => {
        let sorteredSongs = currentSongs.sort((a, b) => {
            return a[songParam].localeCompare(b[songParam])
        });
        if (direction === UP) {
            dispatch(setSongs(sorteredSongs));
        } else if (direction === DOWN) {
            let reverseSong = sorteredSongs.reverse();
            dispatch(setSongs(reverseSong));
        }
    };

    const sortByUP = (sort) => {
        sortSongParams(sort, UP);
    };

    const sortByDown = (sort) => {
        sortSongParams(sort, DOWN);
    };

    const onChanged = (str, selectedValue) => {
        let filteredSongs = songs.filter((value) => {
            return value[str] === selectedValue
        });
        if (selectedValue === ALL) {
            dispatch(getSongs());
        } else {
            setSelected(selectedValue);
            dispatch(setCurrentSongs(filteredSongs));
        }
    };

    const onChangedValue = (str, e) => {
        onChanged(str, e.currentTarget.value);
    };

    const getPage = (newPage, newPageCount) => {
        dispatch(setPage(newPage, newPageCount));
    };

    return (
        <div className={s.container}>
            <div className={s.tableSongs}>
                <Table sortByUP={sortByUP}
                       sortByDown={sortByDown}
                       tableElements={tableElements}/>
                <Selects onChangedValue={onChangedValue}
                         selected={selected}
                         songs={songs}/>
            </div>
            <div className={s.paginatorContainer}>
                <Pagination page={page}
                            pageCount={pageCount}
                            totalCount={totalCount}
                            getPage={getPage}/>
            </div>
        </div>
    )
};