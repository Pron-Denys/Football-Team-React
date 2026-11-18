import React from "react"
import "./FootballTeamInfo.css"
import CupsTeam from "./CupsTeam";
import { FootballTeam } from "../App";

type FootballTeamInfoProps = {
    data: {
        teams: FootballTeam[];
    };
};

type FootballTeamInfoState = {
    name: string;
    country: string;
    city: string;
    dateOfEstablishment: string;
    photo: string;
};

class FootballTeamInfo extends React.Component<FootballTeamInfoProps, FootballTeamInfoState> {

    constructor(props: FootballTeamInfoProps) {
        super(props);
        this.state = {
            name: props.data.teams[0].name,
            country: props.data.teams[0].country,
            city: props.data.teams[0].city,
            dateOfEstablishment: props.data.teams[0].dateOfEstablishment,
            photo: props.data.teams[0].photo
        };
    }

    changeFootballTeamInfo(name: string) {
        const footballTeam = this.props.data.teams.filter((t) => t.name == name)[0];
        this.setState({
            name: footballTeam.name,
            country: footballTeam.country,
            city: footballTeam.city,
            dateOfEstablishment: footballTeam.dateOfEstablishment,
            photo: footballTeam.photo
        });
    }

    render() {
        return (
            <div className="column">           
                <div className="cardTeam">
                    <h2>{this.state.name}</h2>
                    <img src={this.state.photo}
                    width="200px" />
                    <p>Країна: <span>{this.state.country}</span></p>
                    <p>Місто: <span>{this.state.city}</span></p>
                    <p>Дата заснування: <span>{this.state.dateOfEstablishment}</span></p>
                </div>
                <CupsTeam teams={this.props.data.teams} teamInfo={(name: string) => this.changeFootballTeamInfo(name)}/>
            </div>
        )
    }
}

export default FootballTeamInfo;