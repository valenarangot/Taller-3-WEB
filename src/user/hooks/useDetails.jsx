import {useEffect, useState } from "react";
import { fetchCharacterDetails } from "../services/FetchRickyMorty";

export const useDetails = (id) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchCharacterDetails(id).then((character) => {
            setData(character)
        })
    }, [id])

    return {
        data,
    }
}