const API_CHARACTER = 'https://rickandmortyapi.com/api/character';
const API_CHARACTER_DETAILS = 'https://rickandmortyapi.com/api/character/';

export const fetchCharacter = async () => {
    return fetch(`${API_CHARACTER}`)
    .then ((res) => {
        if (!res.ok){
            throw new Error ('Error fetching data from API')
        }
        return res.json()
    })
    .then((data)=>{
        return data.results
    })
}

export const fetchCharacterDetails = async (id) => {
    return fetch(`${API_CHARACTER_DETAILS}`+id)
    .then ((res) => {
        if (!res.ok){
            throw new Error ('Error fetching data from API')
        }
        return res.json()
    })
    .then((data)=>{
        return data
    })
}