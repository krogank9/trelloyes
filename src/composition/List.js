import React from 'react';
import './List.css';

import Card from './Card.js';

function List(props) {
	const cards = props.cards.map(function(c,i) {
		return (
			<Card
				title={c.title}
				content={c.content}
				key={c.id}
			/>
		);
	});
	return (
		<section className="List">
			<header className="List-header">
				<h2>{props.header}</h2>
			</header>
			<div className="List-cards">
			
				{cards}
				
				<button type="button" className="List-add-button">
					+ Add Random Card
				</button>
			</div>
		</section>
	);
}

export default List;