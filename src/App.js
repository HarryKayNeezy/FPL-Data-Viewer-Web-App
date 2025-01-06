import React, { useState } from 'react';
import { getGeneralInfo, getPlayerData, getFixtures, getManagerData } from './services/fplService';

const App = () => {
  // Separate state for each type of data
  const [generalInfo, setGeneralInfo] = useState(null);
  const [playerData, setPlayerData] = useState(null);
  const [fixtures, setFixtures] = useState(null);
  const [managerData, setManagerData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState('');  // This tracks which section to display

  // Fetch general information about the game (bootstrap-static data)
  const fetchGeneralInfo = async () => {
    setLoading(true);
    try {
      const data = await getGeneralInfo();
      setGeneralInfo(data);
      setActiveSection('generalInfo'); // Indicate which section to show
    } catch (error) {
      console.error('Error fetching general info:', error);
    }
    setLoading(false);
  };

  // Fetch data for a specific player (e.g., player ID 1)
  const fetchPlayerData = async (playerId) => {
    setLoading(true);
    try {
      const data = await getPlayerData(playerId);
      setPlayerData(data);
      setActiveSection('playerData'); // Indicate which section to show
    } catch (error) {
      console.error('Error fetching player data:', error);
    }
    setLoading(false);
  };

  // Fetch fixtures (past and upcoming games)
  const fetchFixtures = async () => {
    setLoading(true);
    try {
      const data = await getFixtures();
      setFixtures(data);
      setActiveSection('fixtures');  // Indicate which section to show
    } catch (error) {
      console.error('Error fetching fixtures:', error);
    }
    setLoading(false);
  };

  // Fetch data for a specific manager (e.g., manager ID 12345)
  const fetchManagerData = async (managerId) => {
    setLoading(true);
    try {
      const data = await getManagerData(managerId);
      setManagerData(data);
      setActiveSection('managerData');  // Indicate which section to show
    } catch (error) {
      console.error('Error fetching manager data:', error);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Fantasy Premier League (FPL) Data Viewer</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button style={{ marginRight: '5px' }} onClick={fetchGeneralInfo}>Fetch General Info</button>
        <button style={{ marginRight: '5px' }} onClick={() => fetchPlayerData(1)}>Fetch Player Data (Player ID: 1)</button>
        <button style={{ marginRight: '5px' }} onClick={fetchFixtures}>Fetch Fixtures</button>
        <button onClick={() => fetchManagerData(12345)}>Fetch Manager Data (Manager ID: 12345)</button>
      </div>

      {loading && <p>Loading...</p>}

      {/* Conditionally render the correct section based on what was fetched */}
      {activeSection === 'generalInfo' && generalInfo && (
        <div key="generalInfo">
          <h2>General Info</h2>
          <pre>{JSON.stringify(generalInfo, null, 2)}</pre>
        </div>
      )}

      {activeSection === 'playerData' && playerData && (
        <div key="playerData">
          <h2>Player Data</h2>
          <pre>{JSON.stringify(playerData, null, 2)}</pre>
        </div>
      )}

      {activeSection === 'fixtures' && fixtures && (
        <div key="fixtures">
          <h2>Fixtures</h2>
          <pre>{JSON.stringify(fixtures, null, 2)}</pre>
        </div>
      )}

      {activeSection === 'managerData' && managerData && (
        <div key="managerData">
          <h2>Manager Data</h2>
          <pre>{JSON.stringify(managerData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
