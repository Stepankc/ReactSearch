const URL_CHARACTERS = 'https://swapi.dev/api/people/';
const API_KEY = 'IdK6z6Msr_F5mbeWDQduItiwwAXApLpoBmzqJ3h56Ok';
const API_URL = `https://api.unsplash.com/search/photos?orientation?portrait?page=1&query=`;

function handleResponseError(response: Response) {
  if (response.status === 401) {
    console.warn(
      'Ошибка авторизации: Необходимо предоставить правильные учетные данные.',
    );
    return null;
  }

  if (!response.ok) {
    throw new Error('Ошибка получения данных о персонажах');
  }

  return response.json();
}

function searchCharacterPhoto(characterName: string): Promise<string[]> {
  return fetch(API_URL + encodeURIComponent(characterName), {
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
  })
    .then(handleResponseError)
    .then((data) => {
      if (data) {
        return data.results.map(
          (result: UnsplashResult) => result.urls.regular,
        ) as string[];
      } else {
        return [];
      }
    });
}

export default class API {
  static getCharacters(): Promise<characterProps[]> {
    return fetch(URL_CHARACTERS)
      .then(handleResponseError)
      .then(async (data) => {
        if (data) {
          const characters = data.results || [];
          const charactersWithImages = await Promise.all(
            characters.map(async (character: character) => {
              if (data) {
                const photoUrls = await searchCharacterPhoto(character.name);
                return {
                  ...character,
                  image:
                    photoUrls.length > 0
                      ? photoUrls[0]
                      : 'https://placehold.co/600x400',
                };
              } else {
                return character;
              }
            }),
          );
          return charactersWithImages;
        } else {
          return [];
        }
      })
      .catch((error) => {
        console.log(error.message);
        throw error;
      });
  }
  static getCharactersByName(characterName: string): Promise<characterProps[]> {
    return fetch(`${URL_CHARACTERS}?search=${characterName}`)
      .then(handleResponseError)
      .then(async (data) => {
        if (data) {
          const characters = data.results || [];
          const charactersWithImages = await Promise.all(
            characters.map(async (character: character) => {
              if (data) {
                const photoUrls = await searchCharacterPhoto(character.name);
                return {
                  ...character,
                  image:
                    photoUrls.length > 0
                      ? photoUrls[0]
                      : 'https://placehold.co/600x400',
                };
              } else {
                return character;
              }
            }),
          );
          return charactersWithImages;
        } else {
          return [];
        }
      })
      .catch((error) => {
        console.log(error.message);
        throw error;
      });
  }
}
