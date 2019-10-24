import React from "react";

const Matches = ({ matches }) => {
  // Matsin boxscore:
  // https://statsapi.web.nhl.com/api/v1/game/ID/boxscore

  return (
    <div>
      <h1>Today</h1>
      {matches.map(match => {
        return (
          <div className="grid" key={match.gamePk}>
            <div className="away">{match.teams.away.team.name}</div>
            <div>
              <div className="score">
                {match.teams.away.score} - {match.teams.home.score}
              </div>
              <div className="state">({match.status.detailedState})</div>
            </div>
            <div className="home">{match.teams.home.team.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Matches;
