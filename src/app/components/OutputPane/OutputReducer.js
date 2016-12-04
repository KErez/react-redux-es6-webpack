/**
 * Created by kfirerez on 02/11/2016.
 */
import OutputActions from './OutputActions';

export default class OutputReducer {
  static reducer (state=[], action) {
    switch (action.type) {
      case OutputActions.ACTIONS_TYPES.ACTION_ADD_LINE:
        return action.payload;
    }
    return ['line of output1'];
  }
}
