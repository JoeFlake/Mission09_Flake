import React, { useState, useEffect } from 'react';
import './App.css';
import teamsData from './CollegeBasketballTeams.json';

// #1 Create the heading
function Heading() {
  return (
    <div>
      <h1>Welcome to March Madness</h1>
      <h4>The craziest time for college sports!</h4>
      <hr /> {/* Horizontal line */}
    </div>
  );
}

// #2: A team “card” that contains the following information about each school:
// • School Name
// • Mascot Name
// • Location (City, State)
function TeamCard(props: any) {
  const oneTeam = props;

  return (
    <div className="card">
      <h2>{oneTeam.school}</h2>
      <p>Mascot: {oneTeam.name}</p>
      <p>Location: {oneTeam.city}, {oneTeam.state}</p>
    </div>
  );
}

// #3: A list of team cards that shows all the teams on the list.
function TeamList() {
  const [teams, setTeams] = useState<any[]>([]); // Define type for teams state

  useEffect(() => {
    // Fetch data from JSON file
    setTeams(teamsData.teams); // Access the correct property from the JSON data
  }, []);
  
  return (
    <div className="team-list">
      {teams.map((team) => (
        <TeamCard {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Heading />
      <TeamList />
    </div>
  );
}

export default App;
