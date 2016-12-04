import React from 'react';
import { combineReducers } from 'redux'

import ModelsPane, { modelsReducer } from './ModelsPane/ModelsPaneComponent';
import StagesPane, { stagesPaneReducer } from './StagesPane/StagesPaneComponent';
import OutputPane, { outputReducer } from './OutputPane/OutputPaneComponent';

export default class Layout extends React.Component {
  render() {
    return <div>
      <ModelsPane/>
      <StagesPane/>
      <OutputPane/>
    </div>
  }
}

export var layoutReducer = combineReducers({
  models: modelsReducer,
  stages: stagesPaneReducer,
  output: outputReducer
});
