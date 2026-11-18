import React from "react"

type ItemProps = {
    index: number;
    fullName: string;
    position: string;
};

class Item extends React.Component<ItemProps> {
    render() {
        return (
            <li>{this.props.fullName}<span>- {this.props.position}</span></li>
        )
    }
}

export default Item;