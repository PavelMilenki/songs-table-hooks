import React from "react";
import {Icon} from "antd";
import s from '../App.module.css'
import {ARTIST, COUNTRY, DOWN, SONG, UP, YEAR} from "./Main";

export const Table = ({sortByUP, sortByDown, tableElements}) => {
    return (
        <table className={s.songsTable}>
            <thead>
            <tr>
                <th>
                    Artist
                    <Icon className={s.icon} type={UP} onClick={() => (sortByUP(ARTIST))}/>
                    <Icon className={s.icon} type={DOWN} onClick={() => (sortByDown(ARTIST))}/>
                </th>
                <th>Song
                    <Icon className={s.icon} type={UP} onClick={() => (sortByUP(SONG ))}/>
                    <Icon className={s.icon} type={DOWN} onClick={() => (sortByDown(SONG ))}/></th>
                <th>Country
                    <Icon className={s.icon} type={UP} onClick={() => (sortByUP(COUNTRY))}/>
                    <Icon className={s.icon} type={DOWN} onClick={() => (sortByDown(COUNTRY))}/></th>
                <th>Year
                    <Icon className={s.icon} type={UP} onClick={() => (sortByUP(YEAR))}/>
                    <Icon className={s.icon} type={DOWN} onClick={() => (sortByDown(YEAR))}/></th>
            </tr>
            </thead>
            {tableElements}
        </table>
    )
};