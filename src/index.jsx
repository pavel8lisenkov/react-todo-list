import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/layout/Layout';
import Home from './components/screens/Home/Home';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Layout>
			<Home />
		</Layout>
	</React.StrictMode>
);
