import React from 'react';
import { connect } from 'react-redux';

class TeamList extends React.Component {
    render() {
        console.log(this.props[this.props.stateList]);
        return(
            <h2>Team List</h2>
        );
    }
}

const mapStateTopProps = state => {
    return {
        players: state.characters.players,
        enemies: state.characters.enemies,
    };
};

export default connect(mapStateTopProps)(TeamList);
// connect returns a function which is immediately called, and to which TeamList is passed
