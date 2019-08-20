import React from 'react';
import './List.css';

import Card from './Card.js';

class List extends React.Component {
	renderCards() {
		let that = this;
		return this.props.cards.map(function(c,i) {
			return (
				<Card
					title={c.title}
					content={c.content}
					key={c.id}
					deleteCardClicked={() => that.props.deleteCardClicked(c.id)}
				/>
			);
		});
	}
	render() {
		return (
			<section className="List">
				<header className="List-header">
					<h2>{this.props.header}</h2>
				</header>
				<div className="List-cards">
				
					{this.renderCards()}
					
					<button type="button" className="List-add-button" onClick={this.props.addCardClicked}>
						+ Add Random Card
					</button>
				</div>
			</section>
		);
	}
}

export default List;
