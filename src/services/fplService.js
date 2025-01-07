import axios from 'axios';

const BASE_URL = '/api'; // proxy will handle base url

// general info about game (players, teams, positions, etc)
export const getGeneralInfo = async () => {
  const response = await axios.get(`${BASE_URL}/bootstrap-static/`);
  return response.data;
};

// player-specific data
export const getPlayerData = async (playerId) => {
  const response = await axios.get(`${BASE_URL}/element-summary/${playerId}/`);
  return response.data;
};

// fetch fixtures
export const getFixtures = async () => {
  const response = await axios.get(`${BASE_URL}/fixtures/`);
  return response.data;
};


// fetch manager data
export const getManagerData = async (managerId) => {
  const response = await axios.get(`${BASE_URL}/entry/${managerId}/`);
  return response.data;
};


// fetch manager gameweek picks
export const getManagerPicks= async (managerId, eventId) => {
  const response = await axios.get(`${BASE_URL}/entry/${managerId}/event/${eventId}/picks/`);
  return response.data;
};

// fetch manager transfer history
export const getManagerTransfers = async (managerId) => {
  const response = await axios.get(`${BASE_URL}/entry/${managerId}/transfers/`);
  return response.data;
}

// fetch manafer history
export const getManagerHistory = async (managerId) => {
  const response = await axios.get(`${BASE_URL}/entry/${managerId}/history/`);
  return response.data;
}


// fetch league standings
export const getLeagueStandings = async (leagueId, eventId) => {
  const response = await axios.get(`${BASE_URL}/leagues-classic/${leagueId}/standings/`);
  return response.data;
}


// fetch live event data (live gameweek updates)
export const getLiveEventData = async (eventId) => {
  const response = await axios.get(`${BASE_URL}/event/${eventId}/live/`);
  return response.data;
};




// fetch h2h league standings
export const getH2HLeagueStandings = async (leagueId) => {
  const response = await axios.get(`${BASE_URL}/leagues-h2h/${leagueId}/standings/`); //fix
  return response.data;
};

// fetch h2h league fixtures
export const getH2HLeagueFixtures = async (leagueId, eventId) => {
  const response = await axios.get(`${BASE_URL}/leagues-h2h-matches/league/${leagueId}/?event=${eventId}`); //fix
  return response.data;
};

// Fetch transfer data
export const getTransfersData = async () => {
  const response = await axios.get(`${BASE_URL}/transfers/`); //fix
  return response.data;
};