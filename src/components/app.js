import React from 'react';

import Table from './table'

const students = [
	{
		student: 'Sean',
		course: 'Creativity',
		grade: 1
	},
	{
		student: 'who cares',
		course: 'React',
		grade: 100
	},
	{
		student: 'some guy',
		course: 'React',
		grade: 100
	}
];

const App = (props) => (
	//<h1>My first React functional component</h1>
	<div className="container">
		<h1>Student Grade Table</h1>
		<Table data={ students } />
	</div>
);

export default App;