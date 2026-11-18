import React from "react"

type OptionProps = {
    index: number;
    name: string;
};

class Option extends React.Component<OptionProps> {
    render() {
        return <option value={this.props.name}>{this.props.name}</option>
    }
}

export default Option;