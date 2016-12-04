/**
 * Created by kfirerez on 04/11/2016.
 */
import Q from 'q';

export default class OutputActions {
  static ACTIONS_TYPES = {
    ACTION_ADD_LINE: 'ACTION_ADD_LINE'
  }
  
  static addLineAction (line) {
    return {
      type: OutputActions.ACTIONS_TYPES.ACTION_ADD_LINE,
      payload: line
    };
  }
}
