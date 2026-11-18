import React from "react"
import "./CupsTeam.css"
import VictoryTeam from "./VictoryTeam";
import TeamRoster from "./TeamRoster";

type Cup = {
    title: string;
    photo: string;
    counter: number;
};

type Player = {
    fullName: string;
    position: string;
};

type FootballTeam = {
    name: string;
    country: string;
    city: string;
    dateOfEstablishment: string;
    players: Player[];
    cups: Cup[];
    photo: string;
};

type CupsTeamProps = {
    teams: FootballTeam[];
    teamInfo: (name: string) => void;
};

type CupsTeamState = {
    cups: Cup[];
};

class CupsTeam extends React.Component<CupsTeamProps, CupsTeamState> {
    constructor(props: CupsTeamProps) {
        super(props);
        this.state = {
            cups: props.teams[0].cups
        };
    }

    getCups(name: string) {
        const team = this.props.teams.filter((t) => t.name == name)[0];
        this.setState({
            cups: team.cups 
        });
    }

    render() {
        return (
            <div className="conteiner-2">
                <div className="victories-conteiner">
                    <h2>Перемоги</h2>
                    <div className="victories">
                        {this.state.cups.map((cup, index) => <VictoryTeam index={index} title={cup.title} photo={cup.photo} counter={cup.counter}/>)}
                    </div>
                </div>
                <TeamRoster footballTeams={this.props.teams} teamInfo={(name: string) => this.props.teamInfo(name)} cupsTeam={(name: string) => this.getCups(name)} />
            </div>
        )
    }
}

export default CupsTeam;