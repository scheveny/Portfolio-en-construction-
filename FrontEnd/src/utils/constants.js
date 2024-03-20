const API_URL = 'http://localhost:3001';
export const API_ROUTES = {
  SIGN_UP: `${API_URL}/api/auth/signup`,
  SIGN_IN: `${API_URL}/api/auth/login`,
  WORKS: `${API_URL}/api/works`,
};

export const APP_ROUTES = {
  SIGN_UP: '/Inscription',
  SIGN_IN: '/Connexion',
  ADD_WORK: '/Ajouter',
  WORK: '/projet/:id',
};