import React from 'react';
import { connect } from 'react-redux';

import ModelsActions from './ModelsActions';
import ModelsReducer from './ModelsReducer';
import './ModelPane.sass';

class ModelsPane extends React.Component {
  componentWillMount() {
    this.props.dispatch(ModelsActions.loadModels);
  }
  
  render () {
    const { models } = this.props;
    const modelsArrayView = models.map(m => <li className="ui-btn" key={m}>{m}...</li>);
    return <selector>
      <h1>Models:</h1>
      <ul>{modelsArrayView}</ul>
    </selector>
  }
}

export default connect ((store) => {
  return {
    models: store.models
  }
})(ModelsPane);

export var modelsReducer = ModelsReducer.reducer;
