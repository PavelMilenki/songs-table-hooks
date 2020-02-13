import React from "react";


export const TableBody = ({year, country, artist, song}) => {
    return (
        <tbody>
        <tr>
            <td>{artist}</td>
            <td>{song}</td>
            <td>{country}</td>
            <td>{year}</td>
        </tr>
        </tbody>
    )
};