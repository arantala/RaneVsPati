import React from "react";
import Matches from "./components/Matches";
import Comparison from "./components/Comparison";

//https://gitlab.com/dword4/nhlapi/blob/master/stats-api.md
//https://statsapi.web.nhl.com/api/v1/people/8478420/stats?stats=statsSingleSeason&season=20192020
//https://statsapi.web.nhl.com/api/v1/teams/21/?expand=team.roster

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rane: {
        id: "8478420",
        name: "Rane",
        img: "https://media0.giphy.com/media/JpdhgOvddhVjaQsmrK/giphy.gif",
        gamesPlayed: 0,
        goals: 0,
        assists: 0,
        points: 0,
        plusMinus: 0
      },
      pati: {
        id: "8479339",
        name: "Pati",
        img:
          "https://im.mtv.fi/image/5907402/landscape16_9/792/446/997ab59c460a951876e48d18db2cbb07/ET/patrik-laine-2016-11.jpg",
        gamesPlayed: 0,
        goals: 0,
        assists: 0,
        points: 0,
        plusMinus: 0
      },
      kaapo: {
        id: "8481554",
        name: "Kaapo",
        img: "https://media1.giphy.com/media/VGEmpTXasjkHEpasJS/giphy.gif",
        gamesPlayed: 0,
        goals: 0,
        assists: 0,
        points: 0,
        plusMinus: 0
      },
      metrimake: {
        id: "8481559",
        name: "Metri-Make",
        img:
          "https://www.gannett-cdn.com/presto/2019/06/22/USAT/49a27a36-5afa-44af-b0f0-fd92eb867f0b-hughes_first.jpg?crop=2349,1333,x0,y176&width=3200&height=1680&fit=bounds",
        gamesPlayed: 0,
        goals: 0,
        assists: 0,
        points: 0,
        plusMinus: 0
      },
      matches: []
    };
  }

  async getPlayerData(playerId) {
    let response = await fetch(
      `https://statsapi.web.nhl.com/api/v1/people/${playerId}/stats?stats=statsSingleSeason&season=20192020`
    );
    let data = await response.json();
    return data;
  }

  componentDidMount() {
    this.getPlayerData(this.state.rane.id).then(data => {
      this.setState({
        rane: {
          ...this.state.rane,
          gamesPlayed: data.stats[0].splits[0].stat.games,
          goals: data.stats[0].splits[0].stat.goals,
          assists: data.stats[0].splits[0].stat.assists,
          points: data.stats[0].splits[0].stat.points,
          plusMinus: data.stats[0].splits[0].stat.plusMinus
        }
      });
    });

    this.getPlayerData(this.state.pati.id).then(data => {
      this.setState({
        pati: {
          ...this.state.pati,
          gamesPlayed: data.stats[0].splits[0].stat.games,
          goals: data.stats[0].splits[0].stat.goals,
          assists: data.stats[0].splits[0].stat.assists,
          points: data.stats[0].splits[0].stat.points,
          plusMinus: data.stats[0].splits[0].stat.plusMinus
        }
      });
    });

    this.getPlayerData(this.state.kaapo.id).then(data => {
      this.setState({
        kaapo: {
          ...this.state.kaapo,
          gamesPlayed: data.stats[0].splits[0].stat.games,
          goals: data.stats[0].splits[0].stat.goals,
          assists: data.stats[0].splits[0].stat.assists,
          points: data.stats[0].splits[0].stat.points,
          plusMinus: data.stats[0].splits[0].stat.plusMinus
        }
      });
    });

    this.getPlayerData(this.state.metrimake.id).then(data => {
      this.setState({
        metrimake: {
          ...this.state.metrimake,
          gamesPlayed: data.stats[0].splits[0].stat.games,
          goals: data.stats[0].splits[0].stat.goals,
          assists: data.stats[0].splits[0].stat.assists,
          points: data.stats[0].splits[0].stat.points,
          plusMinus: data.stats[0].splits[0].stat.plusMinus
        }
      });
    });

    fetch("https://statsapi.web.nhl.com/api/v1/schedule")
      .then(result => result.json())
      .then(data => {
        this.setState({ matches: data.dates[0].games });
      });
  }

  render() {
    return (
      <div>
        <Matches matches={this.state.matches} />
        <Comparison player1={this.state.rane} player2={this.state.pati} />
        <Comparison player1={this.state.kaapo} player2={this.state.metrimake} />
      </div>
    );
  }
}

export default App;
