import React from 'react';
import './App.css';

import List from './composition/List.js';

function App(props) {
	const lists = props.store.lists.map(function(l) {
		let cardsJSON = l.cardIds.map(function(id) {
			return props.store.allCards[id];
		});
		return (
			<List
				header={l.header}
				cards={cardsJSON}
				key={l.id}
			/>
		);
	});
	return (
		<main className='App'>
			<header className="App-header">
				<h1>Trelloyes!</h1>
			</header>
			<div className="App-list">
				{lists}
			</div>
		</main>
	);
}

export default App;