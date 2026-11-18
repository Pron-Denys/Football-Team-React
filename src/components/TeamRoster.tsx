import React from "react"
import "./TeamRoster.css"
import Item from "./Item";
import SelectItem from "./SelectItem";

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

type TeamRosterProps = {
    footballTeams: FootballTeam[];
    teamInfo: (name: string) => void;
    cupsTeam: (name: string) => void;
};

type TeamRosterState = {
    players: Player[];
};

class TeamRoster extends React.Component<TeamRosterProps, TeamRosterState> {
    constructor(props: TeamRosterProps) {
        super(props)
        this.state = {
            players: props.footballTeams[0].players
        };
    }

    getPlayers(name: string) {
        const team = this.props.footballTeams.filter((t) => t.name == name)[0];
        this.setState({
            players: team.players
        });
    }

    render() {
        return (
            <div className="conteiner-3">
                <div className="team">
                    <h2>Склад команди</h2>
                    <ul>
                        {this.state.players.map((p, index) => <Item index={index} fullName={p.fullName} position={p.position} />)}
                    </ul>
                </div>
                <SelectItem listTeams={this.props.footballTeams} teamInfo={this.props.teamInfo} cupsTeam={this.props.cupsTeam} teamRoster={(name: string) => this.getPlayers(name)}/>
            </div>
        )
    }
}

export default TeamRoster;