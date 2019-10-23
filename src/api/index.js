// TODO: move to setting file
// const API_SERVER = 'https://api.giphy.com';
// const WEB_SERVER = 'https://giphy.com/api';
// const API_KEY = 'XNNemKvbx821jjL7rEwQNqp2c8PBoAJQ';
const API_URL = `${process.env.REACT_APP_API_URL}`
const API_KEY = `${process.env.REACT_APP_API_KEY}`

export const END_POINT = {
    getGifsByQuery: {
        url: (query) => `${API_URL}/v1/gifs/search?api_key=${API_KEY}&${query}&limit=8`,
        method: 'GET'
    },
    getGifsByArray: {
        url: (array) => `${API_URL}/v1/gifs?api_key=${API_KEY}&ids=${array}`,
        method: 'GET'
    },
}