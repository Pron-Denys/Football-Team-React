import React from "react"
import "./VictoryTeam.css"

type VictoryTeamProps = {
    index: number;
    title: string;
    photo: string;
    counter: number;
};

class VictoryTeam extends React.Component<VictoryTeamProps> {
    render() {
        return (
            <div className="victory">
                <img src={this.props.photo}
                    width="150px" />
                <p>{this.props.title}</p>
                <p><span>Кількість: </span>{this.props.counter}</p>
            </div>
        )
    }
}

export default VictoryTeam;