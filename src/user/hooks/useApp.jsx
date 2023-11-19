import {useEffect, useState } from "react";
import { fetchCharacter } from "../services/FetchRickyMorty";

export const useApp = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchCharacter().then((character) => {
            setData(character)
        })
    }, [])

    return {
        data,
    }
}