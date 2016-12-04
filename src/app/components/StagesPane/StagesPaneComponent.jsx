import React from 'react';
import { connect } from 'react-redux';

import StagesReducer from './stagesReducer';
import ScenarioBox from './ScenarioBoxComponent';

class StagesPane extends React.Component {
  render () {
    const { scenario } = this.props;
    let scenarioVM = scenario.map(sc => {
      let className;
      switch (sc.type) {
        case 'query':
          className = 'ui-query-scenario fn-query-scenario';
          break;
        case 'aggregate':
          className = 'fn-query-aggregate ui-query-aggregate';
          break;
        default:
          className = '';
      }
      return <ScenarioBox key={sc.id} model={sc}/>;
    });
    
    return <div>
      <div>
        <a><button>Run Selected</button></a>
        <a><button>Run All</button></a>
      </div>
      <ul>{scenarioVM}</ul>
    </div>
  }
}

export default connect ((store) => {
  return {
    scenario: store.stages.scenario
  }
})(StagesPane);

export var stagesPaneReducer = StagesReducer.reducer;
