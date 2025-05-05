import React from 'react';

const Layout = ({ children }) => {
	return (
		<div className='py-10 bg-zinc-900 min-h-screen h-full'>{children}</div>
	);
};

export default Layout;
