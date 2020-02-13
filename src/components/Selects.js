import React from "react";
import {Select} from "./Select";
import s from '../App.module.css'
import {ALL, ARTIST, COUNTRY, YEAR} from "./Main";


export const Selects = ({selected, songs, onChangedValue}) => {

    const getSelectorsValues = (propertyName) => {
        let propertiesValues = songs.map(s => s[propertyName]);
        propertiesValues = [...new Set(propertiesValues)];
        propertiesValues = propertiesValues.sort((a, b) => {
            return a.localeCompare(b)
        });
        return [ALL, ...propertiesValues];
    };

    return (
        <div className={s.selects}>
            <Select title={ARTIST}
                    onChange={(e) => {
                        onChangedValue(ARTIST, e)
                    }}
                    selected={selected}
                    getSelectorsValues={getSelectorsValues(ARTIST)}/>
            <Select title={COUNTRY}
                    onChange={(e) => {
                        onChangedValue(COUNTRY, e)
                    }}
                    selected={selected}
                    getSelectorsValues={getSelectorsValues(COUNTRY)}/>
            <Select title={YEAR}
                    onChange={(e) => {
                        onChangedValue(YEAR, e)
                    }}
                    selected={selected}
                    getSelectorsValues={getSelectorsValues(YEAR)}/>
        </div>
    )
};
