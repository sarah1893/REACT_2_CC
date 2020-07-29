import React from 'react';

export class GuineaPigs extends React.Component {
  render() {
    const src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}


// Stateless version voir 9 
import React from 'react';

export const GuineaPigs = (props) => {
  let src = props.src;
  return (
    <div>
      <h1>Cute Guinea Pigs</h1>
      <img src={src} />
    </div>
  );
}