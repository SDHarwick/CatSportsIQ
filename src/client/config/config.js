export const apiPath = 'api/';

export const HOST = process.env.HOST || '0.0.0.0';
export const PORT = process.env.PORT;
export const APP_HOST = `${HOST}:${PORT}/`;

// export const BASE_URL = `https://${APP_HOST}`;
export const BASE_URL = `http://localhost:3000/`;
// export const API_URL = `https://${APP_HOST}/${apiPath}`;

export const API_URL =  `http://127.0.0.1:8080/api/`;
// export const API_URL = `https://cat-sports-api.herokuapp.com/${apiPath}`;