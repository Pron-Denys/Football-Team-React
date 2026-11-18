import React from "react"
import "./SelectItem.css"
import Option from "./Option";

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

type SelectItemProps = {
    listTeams: FootballTeam[];
    teamInfo: (name: string) => void;
    cupsTeam: (name: string) => void;
    teamRoster: (name: string) => void;
};

type SelectItemState = {
    teams: FootballTeam[];
    teamInfo: (name: string) => void;
    cupsTeam: (name: string) => void;
    teamRoster: (name: string) => void;
};

class SelectItem extends React.Component<SelectItemProps, SelectItemState> {
    constructor(props: SelectItemProps) {
        super(props);
        this.state = {
            teams: props.listTeams,
            teamInfo: props.teamInfo,
            cupsTeam: props.cupsTeam,
            teamRoster: props.teamRoster
        };
    }

    changeTeam(name: string) {
        this.state.teamInfo(name);
        this.state.cupsTeam(name);
        this.state.teamRoster(name);
    }

    render() {
        return (
            <div className="team-choice">
                <h1>Оберіть команду:</h1>
                <div className="select-conteiner">
                    <select id="select" name="team" onChange={(e) => this.changeTeam(e.target.value)}>
                        {this.props.listTeams.map((t, index) => <Option index={index} name={t.name} />)}
                    </select>
                </div>
            </div>
        )
    }
}

export default SelectItem;