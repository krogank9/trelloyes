import React from 'react';
import './App.css';

import List from './composition/List.js';

import STORE from './store.js';

function omit(obj, keyToOmit) {
	return Object.entries(obj).reduce(
		(newObj, [key, value]) =>
			key === keyToOmit ? newObj : {...newObj, [key]: value},
		{}
	);
}

class App extends React.Component {
	
	state = {
		store: STORE
	}
	
	newRandomCard = () => {
		const id = Math.random().toString(36).substring(2, 4)
		         + Math.random().toString(36).substring(2, 4);
		return {
			id,
			title: `Random Card ${id}`,
			content: 'lorem ipsum',
		}
	}
	
	deleteCardClicked = (cardId) => {
		const { lists, allCards } = this.state.store;
		
		const newLists = lists.map((list) => ({
			...list,
			cardIds: list.cardIds.filter(id => id !== cardId)
		}));
		
		const newCards = omit(allCards, cardId);
		
		this.setState(
			{
				store: {
					"lists": newLists,
					"allCards": newCards
				}
			}
		);
	}
	
	addCardClicked = (listId) => {
		console.log('aa');
		
		const newCard = this.newRandomCard();
		
		const newLists = this.state.store.lists.map(list => {
			if(list.id === listId) {
				return {
					...list,
					cardIds: list.cardIds.concat(newCard.id)
				};
			}
			return list;
		});
		
		const newCards = {
			...this.state.store.allCards,
			[newCard.id]: newCard
		};
		
		this.setState( { store: { "lists": newLists, "allCards": newCards } } );
	}
	
	renderLists() {
		let that = this;
		return this.state.store.lists.map(function(l, index) {
			let cardsJSON = l.cardIds.map(function(id) {
				return that.state.store.allCards[id];
			});
			return (
				<List
					header={l.header}
					cards={cardsJSON}
					deleteCardClicked={that.deleteCardClicked}
					addCardClicked={() => that.addCardClicked(l.id)}
					key={l.id}
				/>
			);
		});
	}
	
	render() {
		return (
			<main className='App'>
				<header className="App-header">
					<h1>Trelloyes!</h1>
				</header>
				<div className="App-list">
					{this.renderLists()}
				</div>
			</main>
		);
	}
}

export default App;
