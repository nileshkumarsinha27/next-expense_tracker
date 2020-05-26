import ROUTES from './routes.constants';

const BASE_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';

const USER_ROUTE = `${BASE_URL}${ROUTES.API_ROUTES}/users`;

const API = {
  LOGIN: `${USER_ROUTE}/login`,
  SIGN_UP: `${USER_ROUTE}/signup`
};

export default API;
