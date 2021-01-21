import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App.jsx';
import exampleData from '../../data/exampleData.js'

ReactDOM.render(<App data={exampleData} />, document.getElementById('root'));