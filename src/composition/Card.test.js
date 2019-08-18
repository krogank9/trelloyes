import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';
import renderer from 'react-test-renderer';

describe('Card component', () => {
	
	// Smoke test
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Card title="title" content="content" />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	
	// Snapshot
	it('renders a card as expected', () => {
		const tree = renderer.create(
			<Card title="title" content="content" />
		).toJSON();
		expect(tree).toMatchSnapshot();
	});
	
});