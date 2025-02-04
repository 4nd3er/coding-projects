const baserUrl: string = "https://rickandmortyapi.com/api/character";

export const getCharacters = (page: number) => {
  return fetch(`${baserUrl}/?page=${page}`)
    .then((res) => res.json())
    .then((data) => {
      return data.results;
    });
};
export const getCharacterById = (id: string | undefined) => {
  return fetch(`${baserUrl}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};
