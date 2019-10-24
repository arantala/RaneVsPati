import React from "react";

const Comparison = ({ player1, player2 }) => {
  return (
    <div>
      <h1>
        {player1.name} vs. {player2.name}
      </h1>
      <div className="grid">
        <div className="img">
          <img src={player1.img} width="400px" alt={player1.name} />
        </div>
        <div>
          <div>
            <h3>Goals</h3>
            <p>
              {player1.goals} vs. {player2.goals}
            </p>
          </div>
          <div>
            <h3>Assists</h3>
            <p>
              {player1.assists} vs. {player2.assists}
            </p>
          </div>
          <div>
            <h3>Points</h3>
            <p>
              {player1.points} vs. {player2.points}
            </p>
          </div>
          <div>
            <h3>P/GP</h3>
            <p>
              {(player1.points / player1.gamesPlayed).toFixed(2)} vs.{" "}
              {(player2.points / player2.gamesPlayed).toFixed(2)}
            </p>
          </div>
          <div>
            <h3>+/-</h3>
            <p>
              {player1.plusMinus} vs. {player2.plusMinus}
            </p>
          </div>
        </div>
        <div className="img">
          <img src={player2.img} width="400px" alt={player2.name} />
        </div>
      </div>
    </div>
  );
};

export default Comparison;
