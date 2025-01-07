import React, {useState} from "react";
import "./App.css";
import {
  getGeneralInfo,
  getPlayerData,
  getFixtures,
  getManagerData,
  getManagerPicks,
  getManagerTransfers,
  getManagerHistory,
  getLeagueStandings,
  getH2HLeagueFixtures,
  getH2HLeagueStandings,
  getLiveEventData,
  getTransfersData,
} from "./services/fplService";

const App = () => {
  const [generalInfo, setGeneralInfo] = useState(null);
  const [playerData, setPlayerData] = useState(null);
  const [fixtures, setFixtures] = useState(null);
  const [managerData, setManagerData] = useState(null);
  const [managerPicks, setManagerPicks] = useState(null);
  const [managerTransfers, setManagerTransfers] = useState(null);
  const [managerHistory, setManagerHistory] = useState(null);
  const [leagueStandings, setLeagueStandings] = useState(null);
  const [h2hLeagueStandings, setH2HLeagueStandings] = useState(null);
  const [h2hLeagueFixtures, setH2HLeagueFixtures] = useState(null);
  const [liveEventData, setLiveEventData] = useState(null);
  const [transfersData, setTransfersData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // fetch general info
  const fetchGeneralInfo = async () => {
    setLoading(true);
    try {
      const data = await getGeneralInfo();
      setGeneralInfo(data);
      setActiveSection("generalInfo");
    } catch (error) {
      console.error("Error fetching general info:", error);
    }
    setLoading(false);
  };

  // fetch player data
  const fetchPlayerData = async (playerId) => {
    setLoading(true);
    try {
      const data = await getPlayerData(playerId);
      setPlayerData(data);
      setActiveSection("playerData");
    } catch (error) {
      console.error("Error fetching player data:", error);
    }
    setLoading(false);
  };

  // fetch fixtures
  const fetchFixtures = async () => {
    setLoading(true);
    try {
      const data = await getFixtures();
      setFixtures(data);
      setActiveSection("fixtures");
    } catch (error) {
      console.error("Error fetching fixtures:", error);
    }
    setLoading(false);
  };

  // fetch manager data
  const fetchManagerData = async (managerId) => {
    setLoading(true);
    try {
      const data = await getManagerData(managerId);
      setManagerData(data);
      setActiveSection("managerData");
    } catch (error) {
      console.error("Error fetching manager data:", error);
    }
    setLoading(false);
  };

  // fetch manager gameweek picks
  const fetchManagerPicks = async (managerId, eventId) => {
    setLoading(true);
    try {
      const data = await getManagerPicks(managerId, eventId);
      setManagerPicks(data);
      setActiveSection("managerPicks");
    } catch (error) {
      console.error("Error fetching manager picks:", error);
    }
    setLoading(false);
  };

  // fetch manager transfer history
  const fetchManagerTransfers = async (managerId) => {
    setLoading(true);
    try {
      const data = await getManagerTransfers(managerId);
      setManagerTransfers(data);
      setActiveSection("managerTransfers");
    } catch (error) {
      console.error("Error fetching manager transfers:", error);
    }
    setLoading(false);
  };

  // fetch manager history
  const fetchManagerHistory = async (managerId) => {
    setLoading(true);
    try {
      const data = await getManagerHistory(managerId);
      setManagerHistory(data);
      setActiveSection("managerHistory");
    } catch (error) {
      console.error("Error fetching manager history:", error);
    }
    setLoading(false);
  };

  // fetch league standings
  const fetchLeagueStandings = async (leagueId) => {
    setLoading(true);
    try {
      const data = await getLeagueStandings(leagueId);
      setLeagueStandings(data);
      setActiveSection("leagueStandings");
    } catch (error) {
      console.error("Error fetching league standings:", error);
    }
    setLoading(false);
  };

  // fetch H2H league standings
  const fetchH2HLeagueStandings = async (leagueId) => {
    setLoading(true);
    try {
      const data = await getH2HLeagueStandings(leagueId);
      setH2HLeagueStandings(data);
      setActiveSection("h2hLeagueStandings");
    } catch (error) {
      console.error("Error fetching H2H league standings:", error);
    }
    setLoading(false);
  };

  // fetch H2H league fixtures
  const fetchH2HLeagueFixtures = async (leagueId, eventId) => {
    setLoading(true);
    try {
      const data = await getH2HLeagueFixtures(leagueId, eventId);
      setH2HLeagueFixtures(data);
      setActiveSection("h2hLeagueFixtures");
    } catch (error) {
      console.error("Error fetching H2H league fixtures:", error);
    }
    setLoading(false);
  };

  // fetch live event data (live gameweek updates)
  const fetchLiveEventData = async (eventId) => {
    setLoading(true);
    try {
      const data = await getLiveEventData(eventId);
      setLiveEventData(data);
      setActiveSection("liveEventData");
    } catch (error) {
      console.error("Error fetching live event data:", error);
    }
    setLoading(false);
  };

  // fetch transfers data
  const fetchTransfersData = async () => {
    setLoading(true);
    try {
      const data = await getTransfersData();
      setTransfersData(data);
      setActiveSection("transfersData");
    } catch (error) {
      console.error("Error fetching transfers data:", error);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1> Fantasy Premier League (FPL) Data Viewer </h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={fetchGeneralInfo}> Fetch General Info</button>
        <button onClick={() => fetchPlayerData(1)}>
          {" "}
          Fetch Player data (Player ID: 1)
        </button>
        <button onClick={fetchFixtures}> Fetch Fixtures</button>
        <button onClick={() => fetchManagerData(12345)}>
          {" "}
          Fetch Manager Data (Manager Id: 12345)
        </button>
        <button onClick={() => fetchManagerPicks(12345, 1)}>
          Fetch Manager Picks (Manager ID: 12345, Event ID: 1)
        </button>
        <button onClick={() => fetchManagerTransfers(12345)}>
          Fetch Manager Transfers (Manager ID: 12345)
        </button>
        <button onClick={() => fetchManagerHistory(12345)}>
          Fetch Manager History (Manager ID: 12345)
        </button>
        <button onClick={() => fetchLeagueStandings(100)}>
          Fetch League Standings (League ID: 100)
        </button>
        <button onClick={() => fetchLiveEventData(1)}>
          Fetch Live Event Data (Event ID: 1)
        </button>
        {/* fix these */}
        {/* <button onClick={() => fetchH2HLeagueStandings(100)}>
          Fetch H2H League Standings (League ID: 100)
        </button>
        <button onClick={() => fetchH2HLeagueFixtures(100, 1)}>
          Fetch H2H League Fixtures (League ID: 100, Event ID: 1)
        </button>
        <button onClick={fetchTransfersData}>Fetch Transfers Data</button> */}
      </div>

      {loading && <p> Loading ... </p>}

      {activeSection === "generalInfo" && generalInfo && (
        <div key="generalInfo">
          <h2>General Info</h2>
          <pre>{JSON.stringify(generalInfo, null, 2)}</pre>
        </div>
      )}

      {activeSection === "playerData" && playerData && (
        <div key="playerData">
          <h2>Player Data</h2>
          <pre>{JSON.stringify(playerData, null, 2)}</pre>
        </div>
      )}

      {activeSection === "fixtures" && fixtures && (
        <div key="fixtures">
          <h2>Fixtures</h2>
          <pre>{JSON.stringify(fixtures, null, 2)}</pre>
        </div>
      )}

      {activeSection === "managerData" && managerData && (
        <div key="managerData">
          <h2>Manager Data</h2>
          <pre>{JSON.stringify(managerData, null, 2)}</pre>
        </div>
      )}

      {activeSection === "managerPicks" && managerPicks && (
        <div key="managerPicks">
          <h2>Manager Picks</h2>
          <pre>{JSON.stringify(managerPicks, null, 2)}</pre>
        </div>
      )}

      {activeSection === "managerTransfers" && managerTransfers && (
        <div key="managerTransfers">
          <h2>Manager Transfers</h2>
          <pre>{JSON.stringify(managerTransfers, null, 2)}</pre>
        </div>
      )}

      {activeSection === "managerHistory" && managerHistory && (
        <div key="managerHistory">
          <h2>Manager History</h2>
          <pre>{JSON.stringify(managerHistory, null, 2)}</pre>
        </div>
      )}

      {activeSection === "leagueStandings" && leagueStandings && (
        <div key="leagueStandings">
          <h2>League Standings</h2>
          <pre>{JSON.stringify(leagueStandings, null, 2)}</pre>
        </div>
      )}

      {activeSection === "h2hLeagueStandings" && h2hLeagueStandings && (
        <div key="h2hLeagueStandings">
          <h2>H2H League Standings</h2>
          <pre>{JSON.stringify(h2hLeagueStandings, null, 2)}</pre>
        </div>
      )}

      {activeSection === "h2hLeagueFixtures" && h2hLeagueFixtures && (
        <div key="h2hLeagueFixtures">
          <h2>H2H League Fixtures</h2>
          <pre>{JSON.stringify(h2hLeagueFixtures, null, 2)}</pre>
        </div>
      )}

      {activeSection === "liveEventData" && liveEventData && (
        <div key="liveEventData">
          <h2>Live Event Data</h2>
          <pre>{JSON.stringify(liveEventData, null, 2)}</pre>
        </div>
      )}

      {activeSection === "transfersData" && transfersData && (
        <div key="transfersData">
          <h2>Transfers Data</h2>
          <pre>{JSON.stringify(transfersData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
