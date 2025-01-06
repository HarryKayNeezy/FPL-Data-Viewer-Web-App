import axios from 'axios';

const BASE_URL = '/api';  // Proxy will handle the base URL

// General information about the game (players, teams, positions, etc.)
export const getGeneralInfo = async () => {
  const response = await axios.get(`${BASE_URL}/bootstrap-static/`);
  return response.data;
};

// Player-specific data
export const getPlayerData = async (playerId) => {
  const response = await axios.get(`${BASE_URL}/element-summary/${playerId}/`);
  return response.data;
};

// Fetch fixtures
export const getFixtures = async () => {
  const response = await axios.get(`${BASE_URL}/fixtures/`);
  return response.data;
};

// Fetch manager data
export const getManagerData = async (managerId) => {
  const response = await axios.get(`${BASE_URL}/entry/${managerId}/`);
  return response.data;
};
