import React from 'react';
import { connect } from 'react-redux';

const SCENARIO_TYPE_UNKNOWN = 'SCENARIO_TYPE_UNKNOWN';
const SCENARIO_TYPE_QUERY = 'SCENARIO_TYPE_QUERY';
const SCENARIO_TYPE_AGGREGATE = 'SCENARIO_TYPE_AGGREGATE';

export default class ScenarioBox extends React.Component {
  render () {
    return <li>{this.props.model.label}</li>
  };
}