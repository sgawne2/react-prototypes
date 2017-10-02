import React from 'react';
import ReactDOM from 'react-dom';

const luckyNumber = () => { 
	return Math.floor( (Math.random() * 1000) + 1) 
}

const greeting = (user) => {
	let element = (
		<div className="container">
			<h1>Hey! What's up { user.name }?</h1>
			<h2 className="text-muted">Your lucky number is { user.luckyNumber }</h2>
		</div>
	);
	return element;
}

const user = {
	name: "Sean",
	luckyNumber: luckyNumber()
}

ReactDOM.render(
    //<h1 className="container">React Prototypes!</h1>,
    greeting(user),
    document.getElementById('root')
);