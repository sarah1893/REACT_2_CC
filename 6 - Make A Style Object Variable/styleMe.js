import React from 'react';
import ReactDOM from 'react-dom';

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

const styles = {
  background: 'lightblue',
  color:      'darkred'
}

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);