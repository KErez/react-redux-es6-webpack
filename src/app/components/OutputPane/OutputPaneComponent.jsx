import React from 'react';
import { connect } from 'react-redux';

import OutputReducer from './OutputReducer';

// @connect((store) => {
//   return {
//     output: store.output
//   };
// })
/*export default*/ class OutputPane extends React.Component {
  render () {
    const outputLines = this.props.output;
    let outputLinesVM = outputLines.map(ol => <li key={ol}>{ol}</li>);
    return <ul>{outputLinesVM}</ul>
  }
}

export default connect ((store) => {
  return {
    output: store.output
  };
})(OutputPane);

export var outputReducer = OutputReducer.reducer;
