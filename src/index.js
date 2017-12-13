import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './base/pages/Login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
