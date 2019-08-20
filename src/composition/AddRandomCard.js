import React from 'react';

class AddRandomCard extends React.Component {
	render() {
		return (
			<button type="button" onClick={this.props.onClick}>Add Random Card</button>
		);
	}
}

export default AddRandomCard;
