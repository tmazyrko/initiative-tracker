import React from 'react';
import { connect } from 'react-redux';

const InitiativeList = (props) => {
    return (
        <h2>Initiative List</h2>
    );
}

function mapStateToProps(state) {
    return {
        characters: state.characters.characters,
    };
}

export default connect(mapStateToProps)(InitiativeList);
