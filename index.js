import React from 'react';
import ReactDOM from 'react-dom';

const World = () => {
	return (<span>{'World'}</span>);
}

const render = () => {
  ReactDOM.render(
      <h1>Hello <World /></h1>,
      document.getElementById('root')
  );
};

render();
